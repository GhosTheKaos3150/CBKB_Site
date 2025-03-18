<template>
  <q-page padding>
    <divulgacao-iniciacao-component />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DivulgacaoIniciacaoComponent from 'src/components/DivulgacaoIniciacao.vue';

export default defineComponent({
  name: 'DivulgacaoPFPage',
  components: {
    DivulgacaoIniciacaoComponent,
  },
});
</script>
