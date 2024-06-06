<template>
  <div
    v-if="eventos.length > 0"
    class="justify-center"
    :style="
      $q.platform.is.mobile
        ? 'background-color: #e6e6e6; color: #000000; padding: 2% 10%'
        : 'background-color: #e6e6e6; color: #000000; padding: 2% 15%'
    "
  >
    <div class="text-h5 text-center text-bold q-mb-md">NOSSA PROGRAMAÇÃO</div>
    <div class="row">
      <div class="col">
        <q-scroll-area class="q-mb-md hide-scrollbar" style="height: 80vh">
          <div :class="$q.platform.is.mobile ? 'row no-wrap' : 'no-wrap'">
            <q-card
              class="q-ma-md"
              v-for="evento in eventos"
              :key="evento._id"
              :style="$q.platform.is.mobile ? 'width: 72vw; height: 75vh' : ''"
              @click="$router.push(`/programacao/${evento._id}`)"
            >
              <q-card-section :horizontal="!$q.platform.is.mobile" class="fit">
                <q-img
                  :src="
                    evento.imgSpc
                      ? `http://meditaremfortaleza.org.br/assets/${evento.imgSpc}`
                      : `http://meditaremfortaleza.org.br/assets/${evento.atividade._img}`
                  "
                  ratio="1"
                  :style="$q.platform.is.mobile ? '' : 'max-width: 250px'"
                />
                <q-card-section>
                  <div class="text-h5 text-bold">
                    {{
                      evento.optionalTitle
                        ? evento.optionalTitle
                        : evento.atividade.name
                    }}
                  </div>
                  <div class="text-subtitle2">
                    Dia
                    {{
                      new Date(evento.date).toLocaleString('pt-BR').slice(0, 10)
                    }}
                    às
                    {{
                      new Date(evento.date)
                        .toLocaleString('pt-BR')
                        .slice(12, 17)
                    }}
                  </div>
                  <div class="text-italic">Por {{ evento.professor.name }}</div>
                  <q-separator class="q-mt-md q-mb-xs" />
                  <q-card-actions>
                    <div>
                      <div
                        v-if="
                          evento.atividade.isGratuita && !evento.customPrice
                        "
                        class="text-subtitle2 text-italic"
                      >
                        Atividade Gratuita
                      </div>
                      <div
                        v-else-if="
                          evento.atividade.isVoluntaryPayment &&
                          !evento.customPrice
                        "
                        class="text-subtitle2 text-italic"
                      >
                        Contribuição Voluntária
                      </div>
                      <div v-else class="text-subtitle2 text-italic">
                        Valor: R$
                        {{
                          evento.customPrice
                            ? evento.customPrice
                            : evento.atividade.valor
                        }}
                      </div>
                    </div>
                  </q-card-actions>
                  <q-separator class="q-my-xs" />
                  <q-card-actions>
                    <div class="text-subtitle2 text-italic">
                      Observação:
                      {{ evento.atividade.obsv }}
                    </div>
                  </q-card-actions>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </q-scroll-area>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ScheduleEvent } from './models';
import { api } from 'src/boot/axios';

export default defineComponent({
  name: 'IndexActivityShow',

  setup() {
    return {
      slide: ref('1'),
    };
  },

  data() {
    return {
      destaques: [] as ScheduleEvent[],
      eventos: [] as ScheduleEvent[],
    };
  },

  async mounted() {
    await api
      .get('/programacao')
      .then((res) => {
        return res.data;
      })
      .then((json: ScheduleEvent[]) => {
        this.eventos = json
          .filter((se) => Date.now() <= new Date(se.date).valueOf())
          .sort((a: ScheduleEvent, b: ScheduleEvent) => {
            return new Date(a.date).valueOf() - new Date(b.date).valueOf();
          });

        if (this.eventos.length > 0) {
          this.destaques = this.eventos.slice(0, 5).sort((a, b) => {
            if (a.destaque && !b.destaque) return -1;
            if (b.destaque && !a.destaque) return 1;
            return 0;
          });
        }

        if (this.destaques.length > 0)
          this.slide = this.destaques[0].atividade.name
            .toLowerCase()
            .replace(' ', '_');
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
