<template>
  <q-img
    id="centerTag"
    src="../../public/banners/header2.png"
    fit="cover"
    :ratio="$q.platform.is.mobile ? 16 / 9 : 16 / 3"
  >
    <div
      class="absolute-bottom text-bold text-center"
      :class="$q.platform.is.mobile ? 'text-h5' : 'text-h4'"
    >
      O CENTRO
    </div>
  </q-img>
  <div
    class="justify-center"
    :style="
      $q.platform.is.mobile
        ? 'background-color: #e6e6e6; color: #000000; padding: 2% 10%'
        : 'background-color: #e6e6e6; color: #000000; padding: 2% 25%'
    "
  >
    <div
      class="q-my-md text-center text-subtitle1"
      style="padding: 2% 2% 0% 0%"
    >
      Desde 2006, o Centro Bodhisattva está aberto a todas as pessoas que buscam
      a paz interior e a verdadeira felicidade. Somos uma organização sem fins
      lucrativos, afiliada a uma entidade beneficente budista internacional
      denominada New Kadampa Tradition – International Kadampa Buddhist Union
      (NKT-IKBU). Nosso propósito é preservar e promover a essência dos
      ensinamentos de Buda, de uma forma que seja adequada ao mundo e estilo de
      vida moderno. Os centros Kadampas oferecem programas de estudo sobre a
      psicologia e a filosofia budistas, instruções para meditar e retiros para
      todos os níveis de praticantes. Nossa intenção é beneficiar a todos os
      seres vivos, de maneira que possam transformar significativamente suas
      vidas. Para tanto, oferecemos este espaço tranquilo e acolhedor, aberto a
      todas as pessoas – budistas e não budistas. Sinta-se à vontade para nos
      visitar a qualquer momento!
    </div>
    <div class="text-h5 text-center text-bold q-mb-md">NOSSAS ATIVIDADES</div>
    <q-scroll-area class="q-mb-md hide-scrollbar" style="height: 100vh">
      <div class="row no-wrap">
        <q-card
          class="q-mx-md"
          v-for="atividade in atividades"
          :key="atividade._id"
          :style="
            $q.platform.is.mobile
              ? 'width: 72vw; height: 95vh'
              : 'width: 250px; height: 72vh'
          "
        >
          <q-img
            :src="`http://meditaremfortaleza.org.br/assets/${atividade._img}`"
            ratio="1"
            fit="contain"
            class=""
            style="border-radius: 100%"
          />
          <q-card-section>
            <div class="text-h5 text-bold q-mb-sm">
              {{ atividade.name }}
            </div>
            <div class="text-subtitle2 q-mb-md">
              {{ atividade.description }}
            </div>
            <div v-if="atividade.isGratuita" class="text-subtitle2 text-italic">
              Atividade Gratuita
            </div>
            <div v-else class="text-subtitle2 text-italic">
              Valor: R$ {{ atividade.valor }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </q-scroll-area>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Activity } from './models';
import { api } from 'src/boot/axios';

export default defineComponent({
  name: 'IndexCenterShow',
  data() {
    return {
      atividades: [] as Activity[],
    };
  },

  async mounted() {
    await api
      .get('/atividade')
      .then((res) => {
        return res.data;
      })
      .then((json: Activity[]) => {
        this.atividades = json;
      })
      .catch((e) => {
        console.log(e);

        this.$q.notify({
          type: 'negative',
          message:
            'O Servidor não concluiu a requisição. Tente novamente mais tarde.',
        });
      });
  },
});
</script>
