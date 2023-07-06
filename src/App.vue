<template>
  <q-pull-to-refresh v-if="$q.platform.is.mobile" @refresh="$router.go(0)">
    <router-view />
  </q-pull-to-refresh>

  <router-view v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>
