<template>
  <q-btn icon="bi-arrow-left" @click="$router.go(-1)" flat />
  <div class="text-h6 q-ma-sm">VERIFICAR APARÊNCIA DO SITE</div>
  <div class="text-h6 q-ma-sm">HEADER 1 - TODOS OS SERES SÃO BEM VINDOS!</div>
  <div class="q-my-md"></div>
  <q-img
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

  <div class="text-h6 q-ma-sm">HEADER 2 - CENTRO</div>
  <q-img
    id="centerTag"
    src="../../public/banners/header2.png"
    fit="cover"
    :ratio="$q.platform.is.mobile ? 16 / 9 : 16 / 3"
  >
    <div
      class="absolute-bottom text-bold text-center"
      :class="$q.platform.is.mobile ? 'text-h5' : 'text-h4'"
    >
      O CENTRO
    </div>
  </q-img>

  <div class="text-h6 q-ma-sm">HEADER 3 - A TRADIÇÃO</div>
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

  <div class="text-h6 q-ma-sm">HEADER 4 - GESHE-LA</div>
  <q-img
    id="gesheTag"
    src="../../public/banners/header4.png"
    fit="cover"
    :ratio="$q.platform.is.mobile ? 16 / 9 : 16 / 3"
  >
    <div
      class="absolute-bottom text-bold text-center"
      :class="$q.platform.is.mobile ? 'text-h5' : 'text-h4'"
    >
      GESHE-LA
    </div>
  </q-img>

  <div class="text-h6 q-ma-sm">HEADER 5 - FINAL</div>
  <q-img
    id="findTag"
    src="../../public/banners/header5.png"
    fit="cover"
    :ratio="$q.platform.is.mobile ? 16 / 9 : 16 / 3"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { api } from 'src/boot/axios';

export default defineComponent({
  name: 'ApearenceEdit',

  setup() {
    return {
      file1: ref<File>(),
      file2: ref<File>(),
      file3: ref<File>(),
      file4: ref<File>(),
      file5: ref<File>(),
    };
  },

  methods: {
    async sendFile1() {
      const formData = new FormData();
      if (this.file1) {
        formData.append(this.file1.name, this.file1);
        await api
          .post('/upload/header1.png', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((res) => {
            console.log(res.status);
          })
          .catch(() => {
            this.$q.notify({
              type: 'negative',
              message:
                'Não foi possível atualizar banner. Tente Novamente mais tarde.',
            });
          });
      }
    },
    async sendFile2() {
      const formData = new FormData();
      if (this.file2) {
        formData.append(this.file2.name, this.file2);
        await api
          .post('/upload/header2.png', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((res) => {
            console.log(res.status);
          })
          .catch(() => {
            this.$q.notify({
              type: 'negative',
              message:
                'Não foi possível atualizar banner. Tente Novamente mais tarde.',
            });
          });
      }
    },
    async sendFile3() {
      const formData = new FormData();
      if (this.file3) {
        formData.append(this.file3.name, this.file3);
        await api
          .post('/upload/header3.png', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((res) => {
            console.log(res.status);
          })
          .catch(() => {
            this.$q.notify({
              type: 'negative',
              message:
                'Não foi possível atualizar banner. Tente Novamente mais tarde.',
            });
          });
      }
    },
    async sendFile4() {
      const formData = new FormData();
      if (this.file4) {
        formData.append(this.file4.name, this.file4);
        await api
          .post('/upload/header4.png', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((res) => {
            console.log(res.status);
          })
          .catch(() => {
            this.$q.notify({
              type: 'negative',
              message:
                'Não foi possível atualizar banner. Tente Novamente mais tarde.',
            });
          });
      }
    },
    async sendFile5() {
      const formData = new FormData();
      if (this.file5) {
        formData.append(this.file5.name, this.file5);
        await api
          .post('/upload/header5.png', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((res) => {
            console.log(res.status);
          })
          .catch(() => {
            this.$q.notify({
              type: 'negative',
              message:
                'Não foi possível atualizar banner. Tente Novamente mais tarde.',
            });
          });
      }
    },
  },
});
</script>
