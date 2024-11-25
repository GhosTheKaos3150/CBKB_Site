<template>
  <q-page padding>
    <divulgacao-retiro-component />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DivulgacaoRetiroComponent from 'src/components/DivulgacaoRetiro.vue';

export default defineComponent({
  name: 'DivulgacaoPFPage',
  components: {
    DivulgacaoRetiroComponent,
  },
});
</script>
