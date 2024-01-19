<template>
  <q-img
    id="dharmaTag"
    src="../../public/banners/header3.png"
    fit="cover"
    :ratio="$q.platform.is.mobile ? 16 / 9 : 16 / 3"
  >
    <div
      class="absolute-bottom text-bold text-center"
      :class="$q.platform.is.mobile ? 'text-h5' : 'text-h4'"
    >
      A TRADIÇÃO
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
      O Budismo Kadampa é uma tradição especial do Budismo Mahayana fundada por
      Atisha (982 – 1054), um mestre budista indiano, responsável em grande
      parte pela reintrodução do budismo no Tibete no século XI. “Ka” refere-se
      a todos os ensinamentos de Sutra e de Tantra transmitidos por Buda, e
      “dam” refere-se às instruções especiais de Atisha conhecidas como “Etapas
      do Caminho”, ou Lamrim, em tibetano. A Nova Tradição Kadampa – União
      Budista Kadampa Internacional (NTK – UBKI) é uma associação internacional
      de Centros de estudos e meditação do budismo mahayana, que segue a
      tradição budista Kadampa fundada pelo Venerável Geshe Kelsang Gyatso. A
      NTK é uma tradição budista legal e inteiramente independente – registrada
      de acordo com a lei inglesa – e não tem afiliações políticas. O seu
      propósito é preservar e promover a essência dos ensinamentos de Buda, de
      uma forma que seja adequada ao estilo de vida do mundo moderno.
    </div>
    <div class="text-h6 text-center q-mb-xl">OS PROFESSORES</div>
    <q-scroll-area class="q-mb-md hide-scrollbar" style="height: 80vh">
      <div class="row no-wrap">
        <div v-for="prof in professores" :key="prof._id" class="col-auto">
          <q-card
            v-if="prof.exibir"
            class="q-mx-md q-pa-md"
            style="height: 72vh"
            :style="
              $q.platform.is.mobile
                ? 'width: 75vw; height: 75vh'
                : 'width: 250px; height: 72vh'
            "
          >
            <q-img
              :src="`http://meditaremfortaleza.org.br/assets/${prof._img}`"
              ratio="1"
              style="border-radius: 100%"
            />
            <q-card-section>
              <div class="text-h5 text-bold q-mb-sm">
                {{ prof.name }}
              </div>
              <div class="text-subtitle2">
                {{ prof.description }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-scroll-area>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Teacher } from './models';
import { api } from 'src/boot/axios';

export default defineComponent({
  name: 'IndexTraditionShow',

  data() {
    return {
      professores: [] as Teacher[],
    };
  },

  async mounted() {
    await api
      .get('/professor')
      .then((res) => {
        return res.data;
      })
      .then((json: Teacher[]) => {
        this.professores = json;
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
