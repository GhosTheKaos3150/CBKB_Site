<template>
  <q-page padding>
    <AdminHome> </AdminHome>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AdminHome from 'src/components/AdminHome.vue';

export default defineComponent({
  name: 'AdminPage',
  components: {
    AdminHome,
  },
});
</script>
