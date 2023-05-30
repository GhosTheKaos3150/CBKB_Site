<template>
  <div class="absolute-center">
    <div class="text-h3 text-center q-mb-md">ADMINISTRAÇÃO</div>
    <q-btn
      class="q-mb-sm"
      align="between"
      size="lg"
      color="primary"
      icon="schedule"
      label="PROGRAMAÇÃO DO CENTRO"
      style="width: 100%"
      @click="$router.push('/admin/programacao')"
    />
    <br />
    <q-btn
      class="q-mb-sm"
      align="between"
      size="lg"
      color="primary"
      icon="self_improvement"
      label="LISTA DE ATIVIDADES"
      style="width: 100%"
      @click="$router.push('/admin/atividades')"
    />
    <br />
    <q-btn
      class="q-mb-sm"
      align="between"
      size="lg"
      color="primary"
      icon="person"
      label="LISTA DE PROFESSORES"
      style="width: 100%"
      @click="$router.push('/admin/professores')"
    />
    <br />
    <q-btn
      class="q-mb-sm"
      align="between"
      size="lg"
      color="primary"
      icon="logout"
      label="SAIR"
      style="width: 100%"
      @click="logout"
    />
  </div>
</template>

<script lang="ts">
import { api } from 'src/boot/axios';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AdminHome',
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
