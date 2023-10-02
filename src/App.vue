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
        'O Centro Bodhisattva está aberto a todas as pessoas que buscam a paz interior. ' +
        ' Oferecemos um espaço tranquilo e acolhedor, aberto a budistas e não budistas.',
    },
    keywords: {
      name: 'keywords',
      content:
        'budismo moderno em fortaleza, budismo kadampa em fortaleza, meditar em fortaleza, budismo em fortaleza, kadampa em fortaleza, geshe-la em fortaleza,' +
        'pujas em fortaleza, centro de meditação em fortaleza, meditação em fortaleza, meditação kadampa em fortaleza, budismo no ceará, budismo kadampa no ceará,' +
        'kadampa no ceará, centro budista kadampa bodhisattva',
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
