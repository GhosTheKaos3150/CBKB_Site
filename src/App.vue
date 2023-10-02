<template>
  <q-pull-to-refresh v-if="$q.platform.is.mobile" @refresh="$router.go(0)">
    <router-view />
  </q-pull-to-refresh>

  <router-view v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useMeta } from 'quasar';

const metaData = {
  title: 'Meditar em Fortaleza - Centro Budista Kadampa Bodhisattva',

  meta: {
    description: {
      name: 'description',
      content:
        'O Centro Budista Kadampa Bodhissatva é aberto para todos que buscam paz interior em Fortaleza, ' +
        'com um espaço tranquilo e acolhedor para budistas e não budistas.',
    },
    keywords: {
      name: 'keywords',
      content:
        'budismo, moderno, fortaleza, kadampa, budismo kadampa, centro budista, centro, ceará, meditação, meditar, paz, felicidade',
    },
    robots: {
      name: 'robots',
      content: 'index, follow',
    },
  },

  // <noscript> tags
  noscript: {
    default: 'Por favor, instale ou habilite o JavaScript em seu Browser!',
  },
};

export default defineComponent({
  name: 'App',

  setup() {
    useMeta(metaData);
  },
});
</script>
