<template>
  <div>
    <div v-if="schd._id" class="text-h6 q-ma-sm">EDITAR DADOS DA ATIVIDADE</div>
    <div v-else class="text-h6 q-ma-sm">ADICIONAR ATIVIDADE</div>
    <q-select
      filled
      class="q-mb-md"
      v-model="selectedAtv"
      :options="atvsDisponiveis"
      label="Atividade Programada"
    />
    <q-select
      filled
      class="q-mb-md"
      v-model="selectedPrf"
      :options="prfsDisponiveis"
      label="Professor(a) da Atividade"
    />
    <div :class="!$q.platform.is.mobile ? 'row' : ''">
      <q-input
        filled
        maxlength="100"
        class="q-mb-md"
        :class="!$q.platform.is.mobile ? 'col' : ''"
        v-model="date"
        label="Data da Atividade"
        type="date"
      />
      <q-input
        filled
        maxlength="100"
        class="q-mb-md"
        :class="!$q.platform.is.mobile ? 'col q-ml-md' : ''"
        v-model="time"
        label="Hora da Atividade"
        type="time"
      />
    </div>
    <q-separator class="q-mb-md" />
    <div v-if="selectedAtv">
      <q-input
        filled
        counter
        maxlength="100"
        class="q-mb-md"
        v-model="selectedAtv.value.name"
        label="Título da Atividade*"
      />
      <q-input
        v-if="selectedAtv.value.hasTema"
        filled
        counter
        maxlength="100"
        class="q-mb-md"
        v-model="schd.tema"
        label="Tema da Atividade*"
      />
      <q-input
        filled
        counter
        maxlength="248"
        class="q-mb-md"
        v-model="selectedAtv.value.description"
        label="Descrição da Atividade*"
        type="textarea"
        disable
        autogrow
      />
      <q-input
        filled
        counter
        maxlength="248"
        class="q-mb-md"
        v-model="selectedAtv.value.obsv"
        label="Observação"
        type="textarea"
        disable
        autogrow
      />
      <q-input
        filled
        counter
        maxlength="100"
        class="q-mb-md"
        v-model="schd.optionalTitle"
        label="Título Especial da Atividade"
      />
      <q-input
        filled
        counter
        maxlength="1500"
        class="q-mb-md"
        v-model="schd.descricaoSpc"
        label="Descrição do Evento*"
        type="textarea"
        autogrow
      />
      <q-input
        v-if="selectedAtv.value.hasProgram"
        filled
        counter
        maxlength="500"
        class="q-mb-md"
        v-model="schd.prgm"
        label="Programação"
        type="textarea"
        autogrow
      />
      <q-input
        filled
        class="q-mb-md"
        v-model="schd.ytLink"
        label="Link de Vídeo (Youtube)"
        type="text"
      />
      <q-input
        filled
        class="q-mb-md"
        v-model="schd.imgSpc"
        label="Imagem do Evento (Nome do Arquivo)"
        type="text"
        hint="Recomenda-se arquivos .PNG para melhor resolução!"
      />
      <div class="q-mb-md" :class="!$q.platform.is.mobile ? 'row' : ''">
        <div :class="!$q.platform.is.mobile ? 'col' : ''">
          <q-select
            filled
            class="q-mb-md"
            v-model="schd.tipoAtv"
            :options="actTipo"
            label="Tipo de Atividade"
          />
          <q-toggle v-model="schd.destaque" label="Atividade em Detaque?" />
        </div>
        <div :class="!$q.platform.is.mobile ? 'col q-ml-md' : ''">
          <q-input
            filled
            class="q-mb-md"
            v-model="selectedAtv.value.valor"
            label="Valor"
            prefix="R$"
            type="number"
            :disable="selectedAtv.value.isGratuita"
          />
          <q-toggle
            v-model="selectedAtv.value.isGratuita"
            label="Atividade Gratuita?"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <q-space />
    <q-btn class="q-mr-sm" color="primary" label="Salvar" @click="send" />
    <q-btn color="secondary" label="Cancelar" @click="cancel" />
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent, ref } from 'vue';
import { Activity, ScheduleEvent, Teacher, SelectOption } from './models';
import { api } from 'src/boot/axios';

export default defineComponent({
  name: 'ScheduleEdit',

  props: {
    selectedSchd: {
      type: Object as PropType<ScheduleEvent>,
      required: true,
    },
  },
  emits: ['selectedSchd'],

  setup() {
    return {
      file: ref<File>(),
      selectedAtv: ref<SelectOption>(),
      selectedPrf: ref<SelectOption>(),
      date: ref<string>(),
      time: ref<string>(),
    };
  },

  data: () => {
    return {
      schd: {} as ScheduleEvent,

      atvsDisponiveis: [] as SelectOption[],
      prfsDisponiveis: [] as SelectOption[],

      actTipo: ['Presencial', 'Remota', 'Presencial ou Remota'],
    };
  },

  async mounted() {
    this.schd = this.selectedSchd;

    if (this.schd._id) {
      this.selectedAtv = {
        label: this.schd.atividade.name,
        value: this.schd.atividade,
        disabled: false,
        description: null,
        category: null,
      };

      this.selectedPrf = {
        label: this.schd.professor.name,
        value: this.schd.professor,
        disabled: false,
        description: null,
        category: null,
      };

      this.date = this.schd.date.toLocaleString().slice(0, 10);
      this.time = this.schd.date.toLocaleString().slice(11, 16);
    }

    await api
      .get('/atividade')
      .then((res) => {
        return res.data;
      })
      .then((json: Activity[]) => {
        for (let actv of json) {
          this.atvsDisponiveis.push({
            label: actv.name,
            value: actv,
            disabled: false,
            description: null,
            category: null,
          });
        }
      });

    await api
      .get('/professor')
      .then((res) => {
        return res.data;
      })
      .then((json: Teacher[]) => {
        for (let prof of json) {
          this.prfsDisponiveis.push({
            label: prof.name,
            value: prof,
            disabled: false,
            description: null,
            category: null,
          });
        }
      });
  },

  methods: {
    async send() {
      let reload = false;
      this.$q.loading.show();

      const schedulling = {
        atv_id: this.selectedAtv?.value._id,
        prf_id: this.selectedPrf?.value._id,
        tema: this.schd.tema ? this.schd.tema : '',
        descricaoSpc: this.schd.descricaoSpc ? this.schd.descricaoSpc : '',
        prgm: this.schd.prgm ? this.schd.prgm : '',
        imgSpc: this.schd.imgSpc ? this.schd.imgSpc : '',
        date: `${this.date}T${this.time}`,
        tipoAtv: this.schd.tipoAtv,
        ytLink: this.schd.ytLink ? this.schd.ytLink : '',
        optionalTitle: this.schd.optionalTitle ? this.schd.optionalTitle : '',
        destaque: this.schd.destaque ? this.schd.destaque : false,
      };
      const headers = {
        Authorization: 'Bearer ' + localStorage.token,
      };

      console.log(schedulling);

      if (this.selectedSchd._id) {
        await api
          .put(`/programacao/${this.schd._id}`, schedulling, {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 204) {
              this.$q.notify({
                type: 'positive',
                message: 'Dados do Evento atualizados com Sucesso!',
              });

              this.$emit('selectedSchd', null);
              reload = true;
            }
          })
          .catch(() => {
            this.$q.notify({
              type: 'negative',
              message:
                'Não foi possível atualizar os dados. Tente Novamente mais tarde.',
            });
          });
      } else {
        await api
          .post('/programacao', schedulling, { headers: headers })
          .then((res) => {
            if (res.status === 201) {
              this.$q.notify({
                type: 'positive',
                message: 'Evento Adicionado com Sucesso!',
              });

              this.$emit('selectedSchd', null);
              reload = true;
            }
          })
          .catch(() => {
            this.$q.notify({
              type: 'negative',
              message:
                'Não foi possível adicionar atividade. Tente Novamente mais tarde.',
            });
          });
      }

      this.$q.loading.hide();
      if (reload) this.$router.go(0);
    },
    cancel() {
      this.$emit('selectedSchd', null);
    },
  },
});
</script>
