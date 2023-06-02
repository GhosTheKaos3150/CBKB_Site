<template>
  <div class="absolute-center">
    <div class="text-h3 text-center q-mb-lg">Acesse sua Conta</div>
    <q-input filled v-model="user" class="q-mb-md" label="Usuário" />
    <q-input
      id=""
      filled
      v-model="pwd"
      class="q-mb-md"
      label="Senha"
      :type="isPwd ? 'password' : 'text'"
      @keydown.enter.prevent="sendLogin"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <q-btn
      color="primary"
      label="ENTRAR"
      style="width: 100%"
      @click="sendLogin"
    />
  </div>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';
import { defineComponent } from 'vue';
import { User } from './models';
export default defineComponent({
  name: 'LoginComponent',
  data: () => {
    return {
      $q: useQuasar(),
      user: '',
      pwd: '',
      isPwd: true,
    };
  },
  mounted() {
    if (localStorage.token) {
      const headers = {
        Authorization: 'Bearer ' + localStorage.token,
      };

      api.get('/user/auth', { headers: headers }).then((res) => {
        if (res.status === 200) this.$router.push({ path: '/admin' });
      });
    }
  },
  methods: {
    async sendLogin() {
      const login = { username: this.user, password: this.pwd };
      let canRedirect = false;

      this.$q.loading.show();
      await api
        .post('/user/login', login)
        .then((res) => {
          return res.data;
        })
        .then((json) => {
          localStorage.token = json.token;
          localStorage.currentUser = json.user as User;

          canRedirect = true;
        })
        .catch((e) => {
          if (e.response.status === 401) {
            this.$q.notify({
              type: 'negative',
              message:
                'Você ainda não tem autorização para acessar o Sistema. Contate o Administrador.',
            });
          } else {
            this.$q.notify({
              type: 'warning',
              message: 'Usuário ou Senha Incorreto(s). Tente Novamente.',
            });
          }
        });

      this.$q.loading.hide();
      if (canRedirect) this.$router.push({ path: '/admin' });
    },
  },
});
</script>
