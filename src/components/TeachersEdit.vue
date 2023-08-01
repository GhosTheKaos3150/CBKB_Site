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
      maxlength="256"
      class="q-mb-md"
      v-model="prof.description"
      label="Descrição do Professor"
      hint="Digite uma descrição amigável sobre o Professor"
      type="textarea"
    />
  </div>
  <div class="row q-mb-md">
    <q-input
      filled
      class="col q-mb-md"
      v-model="prof._img"
      label="Imagem (Nome do Arquivo)"
      type="text"
      hint="Recomenda-se arquivos .PNG para melhor resolução!"
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
      let reload = false;
      this.$q.loading.show();

      if (this.selectedProf._id) {
        const updatedProf = {
          name: this.prof.name,
          description: this.prof.description,
          _img: this.prof._img ? this.prof._img : 'logo.png',
        };
        const headers = {
          Authorization: 'Bearer ' + localStorage.token,
        };

        await api
          .put(`/professor/${this.prof._id}`, updatedProf, { headers: headers })
          .then((res) => {
            if (res.status === 204) {
              this.$q.notify({
                type: 'positive',
                message: 'Dados do Professor atualizado com Sucesso!',
              });

              this.$emit('selectedProf', null);
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
        const newProf = {
          name: this.prof.name,
          description: this.prof.description,
          _img: this.prof._img ? this.prof._img : 'logo.png',
          exibir: false,
        };
        const headers = {
          Authorization: 'Bearer ' + localStorage.token,
        };

        await api
          .post('/professor', newProf, { headers: headers })
          .then((res) => {
            if (res.status === 201) {
              this.$q.notify({
                type: 'positive',
                message: 'Professor Adicionado com Sucesso!',
              });

              this.$emit('selectedProf', null);
              reload = true;
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
      this.$q.loading.hide();

      if (reload) this.$router.go(0);
    },
    cancel() {
      this.$emit('selectedProf', null);
    },
  },
});
</script>
