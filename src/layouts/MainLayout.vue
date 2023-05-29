<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> CBKB logo </q-toolbar-title>
        <q-btn
          class="float-right"
          flat
          dense
          round
          :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
          @click="toggleDarkMode"
        ></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Centro Budista<br />Kadampa Bodhisattva
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { useQuasar } from 'quasar';

const linksList = [
  {
    title: 'Programação',
    caption: 'Confira a Programação do Centro',
    icon: 'schedule',
    link: '#',
  },
  {
    title: 'Atividades',
    caption: 'As Atividades que nosso Centro proporciona',
    icon: 'self_improvement',
    link: '#',
  },
  {
    title: 'Professores',
    caption: 'Conheça nossos queridos Professores',
    icon: 'person',
    link: '#',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const $q = useQuasar();
    const leftDrawerOpen = ref(false);

    $q.dark.set('auto');

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      darkMode: $q.dark.isActive,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleDarkMode() {
        $q.dark.toggle();
      },
    };
  },
});
</script>
