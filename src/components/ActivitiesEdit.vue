<template>
  <div>
    <div v-if="actv._id" class="text-h6 q-ma-sm">EDITAR DADOS DA ATIVIDADE</div>
    <div v-else class="text-h6 q-ma-sm">ADICIONAR ATIVIDADE</div>
    <q-input
      filled
      counter
      maxlength="100"
      class="q-mb-md"
      v-model="actv.name"
      label="Título da Atividade*"
      hint="Digite o título da Atividade"
    />
    <q-input
      filled
      counter
      maxlength="248"
      class="q-mb-md"
      v-model="actv.description"
      label="Descrição da Atividade*"
      hint="Faça uma breve descriptionrição sobre a Atividade"
      type="textarea"
      autogrow
    />
    <q-input
      filled
      counter
      maxlength="248"
      class="q-mb-md"
      v-model="actv.obsv"
      label="Observação"
      hint="Adicione informações sobre oferendas e outras observações interessantes."
      type="textarea"
      autogrow
    />
    <div class="row q-mb-md">
      <div class="col q-px-sm">
        <q-input
          filled
          class="q-mb-md"
          v-model="actv.valor"
          label="Valor"
          prefix="R$"
          type="number"
          :disable="actv.isGratuita || actv.isVoluntaryPayment"
        />
        <q-toggle
          v-model="actv.isGratuita"
          label="Atividade Gratuita?"
          :disable="actv.isVoluntaryPayment"
        />
        <q-toggle
          v-model="actv.isVoluntaryPayment"
          label="Contribuição Voluntaria?"
          :disable="actv.isGratuita"
        />
      </div>
      <q-select
        class="col q-px-sm"
        :options="options"
        v-model="hasProgram"
        label="Possui Programação?*"
      />
      <q-select
        class="col q-px-sm"
        :options="options"
        v-model="hasTema"
        label="Possui Tema?*"
      />
    </div>
    <div class="row q-mb-md">
      <q-input
        filled
        class="col q-mb-md"
        v-model="actv._img"
        label="Imagem (Nome do Arquivo)"
        type="text"
        hint="Recomenda-se arquivos .PNG para melhor resolução!"
      />
    </div>
  </div>
  <div class="row">
    <q-space />
    <q-btn class="q-mr-sm" color="primary" label="Salvar" @click="send" />
    <q-btn color="secondary" label="Cancelar" @click="cancel" />
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { Activity } from './models';
import { api } from 'src/boot/axios';

export default defineComponent({
  name: 'ActivityEdit',

  props: {
    selectedActv: {
      type: Object as PropType<Activity>,
      required: true,
    },
  },
  emits: ['selectedActv'],

  data: () => {
    return {
      actv: {} as Activity,
      options: [
        { label: 'Sim', value: true },
        { label: 'Não', value: false },
      ],
      hasProgram: { label: 'Não', value: false },
      hasTema: { label: 'Não', value: false },
    };
  },

  mounted() {
    this.actv = this.selectedActv;
    this.hasProgram = {
      label: this.actv.hasProgram ? 'Sim' : 'Não',
      value: this.actv.hasProgram ? this.actv.hasProgram : false,
    };
    this.hasTema = {
      label: this.actv.hasTema ? 'Sim' : 'Não',
      value: this.actv.hasTema ? this.actv.hasTema : false,
    };
  },

  methods: {
    async send() {
      let reload = false;
      this.$q.loading.show();

      if (this.selectedActv._id) {
        const updatedactv = {
          name: this.actv.name,
          description: this.actv.description,
          obsv: this.actv.obsv,
          _img: this.actv._img ? this.actv._img : 'logo.png',
          valor: this.actv.valor,
          isGratuita: this.actv.isGratuita,
          isVoluntaryPayment: this.actv.isVoluntaryPayment,
          hasProgram: this.hasProgram.value,
          hasTema: this.hasTema.value,
        };
        const headers = {
          Authorization: 'Bearer ' + localStorage.token,
        };

        await api
          .put(`/atividade/${this.actv._id}`, updatedactv, { headers: headers })
          .then((res) => {
            if (res.status === 204) {
              this.$q.notify({
                type: 'positive',
                message: 'Dados do Atividade atualizados com Sucesso!',
              });

              this.$emit('selectedActv', null);
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
        const newactv = {
          name: this.actv.name,
          description: this.actv.description,
          obsv: this.actv.obsv ? this.actv.obsv : '',
          _img: this.actv._img ? this.actv._img : 'logo.png',
          valor: this.actv.valor ? this.actv.valor : 0,
          isGratuita: this.actv.isGratuita,
          isVoluntaryPayment: this.actv.isVoluntaryPayment,
          hasProgram: this.hasProgram.value,
          hasTema: this.hasTema.value,
        };
        const headers = {
          Authorization: 'Bearer ' + localStorage.token,
        };

        await api
          .post('/atividade', newactv, { headers: headers })
          .then((res) => {
            if (res.status === 201) {
              this.$q.notify({
                type: 'positive',
                message: 'Atividade Adicionada com Sucesso!',
              });

              this.$emit('selectedActv', null);
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
      this.$emit('selectedActv', null);
    },
  },
});
</script>
