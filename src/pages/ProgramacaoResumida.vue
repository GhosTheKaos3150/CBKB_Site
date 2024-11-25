<template>
  <q-page padding>
    <index-activity-show />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IndexActivityShow from '../components/IndexActivityShow.vue';

export default defineComponent({
  name: 'ProgramacaoResumidaPage',
  components: {
    IndexActivityShow,
  },
});
</script>
