<template>
  <div :style="$q.platform.is.mobile ? 'padding: 0% 10%' : 'padding: 0% 25%'">
    <q-btn icon="bi-arrow-left q-my-md" @click="$router.go(-1)" flat />
  </div>
  <div
    :class="$q.platform.is.mobile ? '' : 'row'"
    :style="$q.platform.is.mobile ? 'padding: 2% 10%' : 'padding: 2% 25%'"
  >
    <div
      :class="$q.platform.is.mobile ? 'q-mb-md' : 'col q-mr-md'"
      v-if="evento.atividade"
    >
      <div style="background-color: #7e642a" v-if="evento.imgSpc">
        <q-img
          :src="`http://meditaremfortaleza.org.br/assets/${evento.imgSpc}`"
          fit="scale-down"
          :ratio="$q.platform.is.mobile ? 1 : 16 / 9"
        >
          <div class="absolute-bottom">
            <div class="text-subtitle1 text-bold">
              {{ evento.atividade.name }}
            </div>
            <div
              v-if="evento.atividade.hasTema"
              class="text-subtitle2 text-italic"
            >
              TEMA: {{ evento.tema }}
            </div>
            <div class="text-subtitle2">
              Dia
              {{ new Date(evento.date).toLocaleString('pt-BR').slice(0, 10) }}
              às
              {{ new Date(evento.date).toLocaleString('pt-BR').slice(12, 17) }}
            </div>
          </div>
        </q-img>
      </div>
      <div style="background-color: #7e642a" v-else>
        <div>
          <q-img
            :src="`http://meditaremfortaleza.org.br/assets/${evento!.atividade!._img}`"
            fit="scale-down"
            :ratio="$q.platform.is.mobile ? 1 : 16 / 9"
          >
            <div class="absolute-bottom">
              <div class="text-subtitle1 text-bold">
                {{
                  evento.optionalTitle
                    ? evento.optionalTitle
                    : evento.atividade.name
                }}
              </div>
              <div
                v-if="evento.atividade.hasTema"
                class="text-subtitle2 text-italic"
              >
                TEMA: {{ evento.tema }}
              </div>
              <div class="text-subtitle2">
                Dia
                {{ new Date(evento.date).toLocaleString('pt-BR').slice(0, 10) }}
                às
                {{
                  new Date(evento.date).toLocaleString('pt-BR').slice(12, 17)
                }}
              </div>
            </div>
          </q-img>
        </div>
      </div>
      <iframe
        v-if="evento.ytLink"
        width="100%"
        height="480"
        :src="evento.ytLink"
        title="Video de Apresentação do Evento"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div class="text-h5 text-bold q-mb-md">
        TODOS OS SERES SÃO BEM VINDOS!
      </div>
      <div class="text-h5">
        {{
          evento.optionalTitle ? evento.optionalTitle : evento.atividade.name
        }}
      </div>
      <div class="text-h6 text-italic q-mb-md">
        Por {{ evento.professor.name }}
      </div>
      <div
        style="white-space: pre-line"
        class="text-subtitle2 text-nowrap q-mb-md"
      >
        {{
          evento.descricaoSpc
            ? evento.descricaoSpc
            : evento.atividade.description
        }}
      </div>
      <div
        v-if="evento.atividade.isGratuita && !evento.customPrice"
        class="q-my-sm"
      >
        <div class="text-subtitle2 text-italic">Atividade Gratuita</div>
      </div>
      <div
        v-else-if="evento.atividade.isVoluntaryPayment && !evento.customPrice"
        class="q-my-sm"
      >
        <div class="text-subtitle2 text-italic">Contribuição Voluntária</div>
      </div>
      <div v-else class="q-my-sm">
        <div class="text-subtitle2 text-italic">
          Valor da Atividade: R$
          {{ evento.customPrice ? evento.customPrice : evento.atividade.valor }}
        </div>
      </div>
      <div class="text-subtitle2 text-italic q-mb-md">
        {{ evento.atividade.obsv }}
      </div>
      <div v-if="evento.atividade.hasProgram">
        <div class="text-h6 q-mb-md">Programação</div>
        <div
          style="white-space: pre-line"
          class="text-body1 text-italic q-mb-md"
        >
          {{ evento.prgm }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { api } from 'src/boot/axios';
import { defineComponent, ref } from 'vue';
import { ScheduleEvent } from './models';
export default defineComponent({
  name: 'ScheduleView',
  setup() {
    return {
      sch_id: ref(''),
    };
  },

  data() {
    return {
      evento: {} as ScheduleEvent,
    };
  },

  async mounted() {
    this.sch_id = this.$route.params.id as string;

    await api
      .get(`/programacao/${this.sch_id}`)
      .then((res) => {
        return res.data;
      })
      .then((json: ScheduleEvent) => {
        this.evento = json;
      });
  },
});
</script>
