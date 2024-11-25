<template>
  <q-page padding>
    <divulgacao-voluntario-component />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DivulgacaoVoluntarioComponent from 'src/components/DivulgacaoVoluntario.vue';

export default defineComponent({
  name: 'DivulgacaoPFPage',
  components: {
    DivulgacaoVoluntarioComponent,
  },
});
</script>
