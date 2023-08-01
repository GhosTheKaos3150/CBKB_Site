<template>
  <q-page padding>
    <UserEdit
      :selectedUser="user"
      @selectedUser="
        (u) => {
          user = u;
        }
      "
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserEdit from 'components/UserEdit.vue';

export default defineComponent({
  name: 'PageName',

  components: {
    UserEdit,
  },

  data() {
    return {
      user: JSON.parse(localStorage.currentUser),
    };
  },
});
</script>
