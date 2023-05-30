<template>
  <div>
    <div v-if="prof._id" class="text-h6 q-ma-sm">EDITAR DADOS DO PROFESSOR</div>
    <div v-else class="text-h6 q-ma-sm">ADICIONAR PROFESSOR</div>
    <q-input
      filled
      counter
      maxlength="60"
      class="q-mb-md"
      v-model="prof.name"
      label="Nome do Professor"
      hint="Digite o Nome do Professor"
    />
    <q-input
      filled
      counter
      maxlength="128"
      class="q-mb-md"
      v-model="prof.desc"
      label="Descrição do Professor"
      hint="Digite uma descrição amigável sobre o Professor"
      type="textarea"
    />
  </div>
  <div class="row">
    <q-space />
    <q-btn class="q-mr-sm" color="primary" label="Salvar" @click="send" />
    <q-btn color="secondary" label="Cancelar" @click="cancel" />
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { Teacher } from './models';
import { api } from 'src/boot/axios';
export default defineComponent({
  name: 'TeacherEdit',

  // Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet augue ac leo cursus consequat. Fusce tincidunt nec nisi in ornare.

  props: {
    selectedProf: {
      type: Object as PropType<Teacher>,
      required: true,
    },
  },
  emits: ['selectedProf'],

  data: () => {
    return {
      prof: {} as Teacher,
    };
  },

  mounted() {
    this.prof = this.selectedProf;
  },

  methods: {
    async send() {
      if (this.selectedProf._id) {
        const updatedProf = {
          name: this.prof.name,
          desc: this.prof.desc,
        };

        await api
          .put(`/professor/${this.prof._id}`, updatedProf)
          .then((res) => {
            if (res.status === 204) {
              this.$q.notify({
                type: 'positive',
                message: 'Dados do Professor atualizado com Sucesso!',
              });

              this.$emit('selectedProf', null);
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
        const newProf = {
          name: this.prof.name,
          desc: this.prof.desc,
        };

        await api
          .post('/professor', newProf)
          .then((res) => {
            if (res.status === 201) {
              this.$q.notify({
                type: 'positive',
                message: 'Professor Adicionado com Sucesso!',
              });

              this.$emit('selectedProf', null);
            }
          })
          .catch(() => {
            this.$q.notify({
              type: 'negative',
              message:
                'Não foi possível adicionar Professor. Tente Novamente mais tarde.',
            });
          });
      }
    },
    cancel() {
      this.$emit('selectedProf', null);
    },
  },
});
</script>
