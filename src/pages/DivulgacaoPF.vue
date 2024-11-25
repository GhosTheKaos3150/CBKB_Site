<template>
  <q-page padding>
    <divulgacao-p-f-component />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DivulgacaoPFComponent from 'src/components/DivulgacaoPF.vue';

export default defineComponent({
  name: 'DivulgacaoPFPage',
  components: {
    DivulgacaoPFComponent,
  },
});
</script>
