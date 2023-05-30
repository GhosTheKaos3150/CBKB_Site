<template>
  <q-page padding>
    <div class="text-h5 q-mb-md">PROGRAMAÇÃO DO CENTRO</div>
  </q-page>
</template>

<script lang="ts">
import { api } from 'src/boot/axios';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SchedulePage',
  mounted() {
    this.checkIsAuth();
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
