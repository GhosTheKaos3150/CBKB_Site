<template>
  <q-page padding>
    <div class="text-h5 q-ma-sm">
      <q-btn
        icon="bi-arrow-left q-my-md"
        v-if="!activitySelected"
        @click="$router.go(-1)"
        flat
      />
      ATIVIDADES DO CENTRO
    </div>
    <ActivitiesList
      v-if="!activitySelected"
      :activities="activities"
      @selectedActv="
        (as) => {
          activitySelected = as;
        }
      "
    />
    <ActivitiesEdit
      v-else
      :selectedActv="activitySelected"
      @selectedActv="
        (as) => {
          activitySelected = as;
        }
      "
    />
  </q-page>
</template>

<script lang="ts">
import { api } from 'src/boot/axios';
import { defineComponent } from 'vue';
import ActivitiesEdit from 'src/components/ActivitiesEdit.vue';
import ActivitiesList from 'src/components/ActivitiesList.vue';
import { Activity } from 'src/components/models';

export default defineComponent({
  name: 'ActivitiesPage',
  components: {
    ActivitiesEdit,
    ActivitiesList,
  },

  data: () => {
    var actvs_init: Activity[] = [];
    var selecteActv_init: Activity | null = null;

    return {
      activities: actvs_init,
      activitySelected: selecteActv_init,
    };
  },

  async mounted() {
    this.checkIsAuth();

    const headers = {
      Authorization: 'Bearer ' + localStorage.token,
    };
    await api
      .get('/atividade', { headers: headers })
      .then((res) => {
        return res.data;
      })
      .then((json) => {
        this.activities = json as Activity[];
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
    checkIsAuth() {
      if (!localStorage.token) this.$router.push({ path: '/login' });

      const headers = {
        Authorization: 'Bearer ' + localStorage.token,
      };

      api.get('/user/auth', { headers: headers }).then((res) => {
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
