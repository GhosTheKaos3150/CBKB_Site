<template>
  <div
    v-if="evento.atividade"
    :style="$q.platform.is.mobile ? 'padding: 2% 10%' : 'padding: 2% 25%'"
  >
    <q-img
      :src="`http://0.0.0.0:5000/assets/${evento!.atividade!._img}`"
      fit="cover"
      :ratio="$q.platform.is.mobile ? 1 : 16 / 9"
    >
      <div class="absolute-bottom">
        <div class="text-subtitle1 text-bold">
          {{ evento.atividade.name }}
        </div>
        <div v-if="evento.atividade.hasTema" class="text-subtitle2 text-italic">
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
    <div class="text-h5 text-bold q-mb-md">TODOS OS SERES SÃO BEM VINDOS!</div>
    <div class="text-subtitle2 q-mb-md">{{ evento.atividade.description }}</div>
    <div v-if="evento.atividade.isGratuita" class="q-my-sm">
      <div class="text-subtitle2 text-italic">Atividade Gratuita</div>
    </div>
    <div v-else class="q-my-sm">
      <div class="text-subtitle2 text-italic">
        Valor da Atividade: R$ {{ evento.atividade.valor }}
      </div>
    </div>
    <div class="text-subtitle2 text-italic q-mb-md">
      {{ evento.atividade.obsv }}
    </div>
    <div v-if="evento.atividade.hasProgram">
      <div class="text-h6 q-mb-md">Programação</div>
      <div class="text-subtitle2 text-italic q-mb-md">
        {{ evento.prgm }}
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
