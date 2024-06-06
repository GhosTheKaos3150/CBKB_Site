<template>
  <div v-if="loaded && eventos.length > 0">
    <q-carousel
      v-model="slide"
      animated
      infinite
      swipeable
      autoplay
      transition-prev="slide-right"
      transition-next="slide-left"
      control-color="secondary"
    >
      <q-carousel-slide
        name="mainSlide"
        class="column flex-center"
        style="color: black"
      >
        <div>
          <q-img
            class="absolute-full"
            src="../../public/banners/header2.png"
            placeholder-src="../../public/banners/header2.png"
          >
          </q-img>
        </div>
        <div>
          <q-img
            src="../../public/banners/header2.png"
            fit="scale-down"
            class="absolute-full"
            :ratio="$q.platform.is.mobile ? 16 / 9 : 16 / 3"
            placeholder-src="../../public/banners/header2.png"
          >
            <div
              class="absolute-bottom text-bold"
              :class="$q.platform.is.mobile ? 'text-h5' : 'text-h4'"
              :style="$q.platform.is.mobile ? '' : 'padding-left: 25%;'"
            >
              TODOS OS SERES SÃO BEM VINDOS!
            </div>
          </q-img>
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        v-for="evento in destaques"
        :key="evento._id"
        :name="evento._id"
        class="column flex-center"
        style="color: black"
        @click="$router.push(`/programacao/${evento._id}`)"
      >
        <div>
          <q-img
            class="absolute-full"
            style="filter: blur(5px)"
            :src="
              evento.imgSpc
                ? `http://meditaremfortaleza.org.br/assets/${evento.imgSpc}`
                : `http://meditaremfortaleza.org.br/assets/${evento.atividade._img}`
            "
            placeholder-src="../../public/banners/header2.png"
          >
          </q-img>
        </div>
        <div>
          <q-img
            class="absolute-full"
            ratio="1"
            fit="scale-down"
            :src="
              evento.imgSpc
                ? `http://meditaremfortaleza.org.br/assets/${evento.imgSpc}`
                : `http://meditaremfortaleza.org.br/assets/${evento.atividade._img}`
            "
            placeholder-src="../../public/banners/header2.png"
          />
        </div>
        <div
          class="absolute-bottom custom-caption"
          :style="evento.destaque ? 'color: yellow;' : ''"
        >
          <div class="text-h5 text-bold">
            {{
              evento.optionalTitle
                ? evento.optionalTitle
                : evento.atividade.name
            }}
          </div>
          <div v-if="evento.destaque" class="text-subtitle1 text-bold">
            Atividade Especial!
          </div>
          <div class="text-subtitle2">
            Dia
            {{ new Date(evento.date).toLocaleString('pt-BR').slice(0, 10) }}
            às
            {{ new Date(evento.date).toLocaleString('pt-BR').slice(12, 17) }}
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="text-h4 text-bold seres-bemvindos">
      TODOS OS SERES SÃO BEM VINDOS!
    </div>
  </div>

  <q-img
    v-else
    src="../../public/banners/header1.png"
    fit="cover"
    :ratio="$q.platform.is.mobile ? 16 / 9 : 16 / 3"
  >
    <div
      class="absolute-bottom text-bold"
      :class="$q.platform.is.mobile ? 'text-h5' : 'text-h4'"
      :style="$q.platform.is.mobile ? '' : 'padding-left: 25%;'"
    >
      TODOS OS SERES SÃO BEM VINDOS!
    </div>
  </q-img>
</template>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .6)
.seres-bemvindos
  text-align: center
  padding: 12px
  color: white
  background-color: rgb(63,63,65)
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ScheduleEvent } from './models';
import { api } from 'src/boot/axios';

export default defineComponent({
  name: 'IndexBannerShow',

  setup() {
    return {
      slide: ref('1'),
    };
  },

  data() {
    return {
      destaques: [] as ScheduleEvent[],
      eventos: [] as ScheduleEvent[],
      loaded: false,
    };
  },

  async mounted() {
    var eventos: any[] = [];
    var destaques: any[] = [];
    var slide = '';

    await api
      .get('/programacao')
      .then((res) => {
        return res.data;
      })
      .then((json: ScheduleEvent[]) => {
        eventos = json
          .filter((se) => Date.now() <= new Date(se.date).valueOf())
          .sort((a: ScheduleEvent, b: ScheduleEvent) => {
            return new Date(a.date).valueOf() - new Date(b.date).valueOf();
          });

        if (eventos.length > 0) {
          destaques = eventos.slice(0, 5).sort((a, b) => {
            if (a.destaque && !b.destaque) return -1;
            if (b.destaque && !a.destaque) return 1;
            return 0;
          });
        }

        if (destaques.length > 0)
          slide = destaques[0].atividade.name.toLowerCase().replace(' ', '_');
      })
      .catch((e) => {
        console.log(e);

        this.$q.notify({
          type: 'negative',
          message:
            'O Servidor não concluiu a requisição. Tente novamente mais tarde.',
        });
      });

    this.eventos = eventos;
    this.destaques = destaques;
    this.slide = slide;

    this.loaded = true;
  },

  methods: {
    getWeekday(day: number) {
      return isNaN(day)
        ? null
        : [
            'Domingo',
            'Segunda-Feira',
            'Terça-Feira',
            'Quarta-Feira',
            'Quinta-Feira',
            'Sexta-Feira',
            'Sábado',
          ][day];
    },
  },
});
</script>
