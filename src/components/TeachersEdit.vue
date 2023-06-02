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
  <div class="row q-mb-md">
    <q-file
      class="col-2"
      counter
      v-model="file"
      label="Selecione uma Imagem"
      accept=".jpg, image/*"
    />
  </div>
  <div class="row">
    <q-space />
    <q-btn class="q-mr-sm" color="primary" label="Salvar" @click="send" />
    <q-btn color="secondary" label="Cancelar" @click="cancel" />
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent, ref } from 'vue';
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

  setup() {
    return {
      file: ref<File>(),
    };
  },

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
          desc: this.prof.desc,
          _img: `tch_${this.prof._id}.png`,
        };
        const headers = {
          Authorization: 'Bearer ' + localStorage.token,
        };
        const formData = new FormData();

        if (this.file) {
          formData.append(this.file.name, this.file);
          await api
            .post(`/upload/tch_${this.prof._id}.png`, formData, {
              headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then((res) => {
              console.log(res.status);
            });
        }

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
          desc: this.prof.desc,
          _img: `tch_${this.prof._id}.png`,
        };
        const headers = {
          Authorization: 'Bearer ' + localStorage.token,
        };
        const formData = new FormData();

        if (this.file) {
          formData.append(this.file.name, this.file);
          await api
            .post(`/upload/tch_${this.prof._id}.png`, formData, {
              headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then((res) => {
              console.log(res.status);
            });
        }

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
