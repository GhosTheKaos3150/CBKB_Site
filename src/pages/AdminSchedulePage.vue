<template>
  <q-page padding>
    <div class="text-h5 q-ma-sm">
      <q-btn
        icon="bi-arrow-left q-my-md"
        v-if="!scheduleSelected"
        @click="$router.go(-1)"
        flat
      />
      PROGRAMAÇÃO DO CENTRO
    </div>
    <ScheduleList
      v-if="!scheduleSelected"
      :schedules="schedules"
      @selectedSchd="
        (scs) => {
          scheduleSelected = scs;
        }
      "
    />
    <ScheduleEdit
      v-else
      :selectedSchd="scheduleSelected"
      @selectedSchd="
        (scs) => {
          scheduleSelected = scs;
        }
      "
    />
  </q-page>
</template>

<script lang="ts">
import { api } from 'src/boot/axios';
import { defineComponent } from 'vue';
import ScheduleList from 'src/components/ScheduleList.vue';
import ScheduleEdit from 'src/components/ScheduleEdit.vue';
import { ScheduleEvent } from 'src/components/models';

export default defineComponent({
  name: 'SchedulePage',
  components: {
    ScheduleList,
    ScheduleEdit,
  },

  data: () => {
    var schd_init: ScheduleEvent[] = [];
    var selecteSchd_init: ScheduleEvent | null = null;

    return {
      schedules: schd_init,
      scheduleSelected: selecteSchd_init,
    };
  },

  async mounted() {
    this.checkIsAuth();

    const headers = {
      Authorization: 'Bearer ' + localStorage.token,
    };
    await api
      .get('/programacao', { headers: headers })
      .then((res) => {
        return res.data;
      })
      .then((json: ScheduleEvent[]) => {
        this.schedules = json
          .filter((se) => new Date(se.date).valueOf() >= Date.now())
          .sort((a: ScheduleEvent, b: ScheduleEvent) => {
            return new Date(a.date).valueOf() - new Date(b.date).valueOf();
          });

        console.log(this.schedules);
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
