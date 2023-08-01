<template>
  <q-page padding>
    <div class="text-h5 q-ma-sm">
      <q-btn
        icon="bi-arrow-left q-my-md"
        v-if="!selectedProf"
        @click="$router.go(-1)"
        flat
      />
      PROFESSORES DO CENTRO
    </div>
    <div v-if="!selectedProf">
      <TeachersList
        :profes="profs"
        @selectedProf="
          (sp) => {
            selectedProf = sp;
          }
        "
      ></TeachersList>
    </div>
    <div v-else>
      <TeachersEdit
        :selectedProf="selectedProf"
        @selectedProf="
          (sp) => {
            selectedProf = sp;
          }
        "
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { api } from 'src/boot/axios';
import { defineComponent } from 'vue';
import TeachersList from 'src/components/TeachersList.vue';
import TeachersEdit from 'src/components/TeachersEdit.vue';
import { Teacher } from '../components/models';

export default defineComponent({
  name: 'TeachersPage',
  components: { TeachersList, TeachersEdit },

  data: () => {
    var profs_init: Teacher[] = [];
    var selectedProf_init: Teacher | null = null;

    return {
      selectedProf: selectedProf_init,
      profs: profs_init,
    };
  },

  async mounted() {
    await this.checkIsAuth();

    const headers = {
      Authorization: 'Bearer ' + localStorage.token,
    };
    await api
      .get('/professor', { headers: headers })
      .then((res) => {
        return res.data;
      })
      .then((json) => {
        this.profs = json as Teacher[];
      })
      .catch(() => {
        this.$q.notify({
          type: 'negative',
          message:
            'O Servidor não concluiu a requisição. Tente novamente mais tarde.',
        });
      });
  },

  methods: {
    async checkIsAuth() {
      if (!localStorage.token) this.$router.push({ path: '/login' });

      const headers = {
        Authorization: 'Bearer ' + localStorage.token,
      };

      await api.get('/user/auth', { headers: headers }).then((res) => {
        if (res.status !== 200) this.logout();
      });
    },
    logout() {
      localStorage.token = '';
      this.$router.push({ path: '/login' });
    },
  },
});
</script>
