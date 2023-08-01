<template>
  <q-btn icon="bi-arrow-left q-my-md" @click="$router.go(-1)" flat />
  <div>
    <div class="text-h6 q-ma-sm">EDITAR DADOS DA ATIVIDADE</div>
    <q-input
      filled
      maxlength="100"
      class="q-mb-md"
      v-model="username"
      label="Usuário"
      type="text"
    />
    <q-input
      filled
      maxlength="100"
      class="q-mb-md"
      v-model="fullname"
      label="Nome Completo"
      type="text"
    />
    <q-toggle v-model="isProfessor" label="É um Professor?" />

    <div class="text-h6 q-ma-sm">Alterar Senha</div>
    <div :class="!$q.platform.is.mobile ? 'row q-my-xl' : ''">
      <q-input
        id=""
        filled
        v-model="password"
        class="q-mb-md"
        :class="!$q.platform.is.mobile ? 'col q-mr-md' : ''"
        label="Senha"
        :type="isPwd ? 'password' : 'text'"
      />
      <q-input
        id=""
        filled
        v-model="cfmPassword"
        class="q-mb-md"
        :class="!$q.platform.is.mobile ? 'col col q-ml-md' : ''"
        label="Confirmar Senha"
        :type="isPwdCfmd ? 'password' : 'text'"
        :rules="[(val) => val == password || 'Senhas devem coincidir!']"
      />
    </div>
    <div class="row">
      <q-space />
      <q-btn
        class="q-mr-sm"
        color="primary"
        label="Salvar"
        @click="send"
        :disable="password?.length! > 0 && password !== cfmPassword"
      />
      <q-btn color="secondary" label="Cancelar" @click="cancel" />
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent, ref } from 'vue';
import { User } from './models';
import { api } from 'src/boot/axios';
export default defineComponent({
  name: 'UserEditComponent',

  props: {
    selectedUser: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  emits: ['selectedUser'],

  setup() {
    return {
      username: ref<string>(),
      fullname: ref<string>(),
      isProfessor: ref<boolean>(),
      password: ref<string>(),
      cfmPassword: ref<string>(),
    };
  },

  data: () => {
    return {
      user: {} as User,

      isPwd: true,
      isPwdCfmd: true,
    };
  },

  mounted() {
    this.user = this.selectedUser;

    console.log(this.selectedUser._id);

    this.username = this.user.username;
    this.fullname = this.user.fullname;
    this.isProfessor = this.user.isProfessor;
  },

  methods: {
    async send() {
      let reload = false;
      this.$q.loading.show();

      let editUser = {};

      if (!this.password) {
        editUser = {
          username: this.username,
          fullname: this.fullname,
          isProfessor: this.isProfessor,
        };
      } else {
        editUser = {
          username: this.username,
          fullname: this.fullname,
          isProfessor: this.isProfessor,
          password: this.password,
        };
      }

      const headers = {
        Authorization: 'Bearer ' + localStorage.token,
      };

      await api
        .put(`/user/${this.user._id}`, editUser, {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 204) {
            this.$q.notify({
              type: 'positive',
              message: 'Dados do Usuário atualizados com Sucesso!',
            });

            if (this.username) this.user.username = this.username;
            if (this.fullname) this.user.fullname = this.fullname;
            if (this.isProfessor) this.user.isProfessor = this.isProfessor;

            localStorage.currentUser = JSON.stringify(this.user);
            this.$router.go(-1);
          }
        })
        .catch(() => {
          this.$q.notify({
            type: 'negative',
            message:
              'Não foi possível atualizar os dados. Tente Novamente mais tarde.',
          });
        });

      this.$q.loading.hide();
      if (reload) this.$router.go(0);
    },
    cancel() {
      this.$router.go(-1);
    },
  },
});
</script>
