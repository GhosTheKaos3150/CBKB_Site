<template>
  <div class="absolute-center">
    <div class="text-h3 text-center q-mb-lg">Acesse sua Conta</div>
    <q-input filled v-model="user" class="q-mb-md" label="Usuário" />
    <q-input
      filled
      v-model="pwd"
      class="q-mb-md"
      label="Senha"
      :type="isPwd ? 'password' : 'text'"
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
  methods: {
    sendLogin() {
      const login = { username: this.user, password: this.pwd };
      api
        .post('/user/login', login)
        .then((res) => {
          return res.data;
        })
        .then((json) => {
          console.log(json.token);
          localStorage.token = json.token;
        })
        .catch(() => {
          this.$q.notify({
            type: 'warning',
            message: 'Usuário ou Senha Incorreto(s). Tente Novamente.',
          });
        });
    },
  },
});
</script>
