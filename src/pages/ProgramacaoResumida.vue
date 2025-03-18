<template>
  <q-page padding>
    <div
      class="justify-center"
      :style="$q.platform.is.mobile ? 'padding: 2% 0%' : 'padding: 2% 15%'"
    >
      <div class="text-h5 text-center text-bold q-mb-md">
        CENTRO BUDISTA KADAMPA BODHISATTVA
      </div>
      <div class="text-subtitle1 text-center text-bold q-mb-md">
        TODOS SÃO MUITO BEM VINDOS!
      </div>
      <div
        class="q-mt-md text-center text-subtitle1"
        style="padding: 2% 2% 0% 0%"
      >
        O Budismo Kadampa torna os ensinamentos de Buda e as práticas de
        meditação acessíveis para as pessoas de todo o mundo. O budismo tem uma
        relevância atemporal e universal, e pode ser praticado por qualquer
        pessoa em qualquer cultura, independente de raça, gênero, classe ou
        idade. Por meio do treino da meditação e outras práticas budistas
        podemos aperfeiçoar a qualidade da nossa vida, desenvolvendo paz
        interior, compaixão e sabedoria.
      </div>
      <index-activity-show colourbg="#ffffff" />
    </div>
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
