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
          v-if="$q.platform.is.mobile"
          @click="toggleLeftDrawer"
        />
        <q-space />
        <q-toolbar-title class="text-center"> CBKB </q-toolbar-title>
        <q-space />
        <!-- <q-btn
          flat
          dense
          round
          :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
          @click="toggleDarkMode"
        ></q-btn> -->
      </q-toolbar>
      <q-toolbar class="vertical-middle" v-if="!$q.platform.is.mobile" insert>
        <q-space />
        <div v-for="btn in essentialLinks" :key="btn.link">
          <q-btn
            dense
            flat
            :to="btn.link"
            :icon="btn.icon"
            :label="btn.title"
            class="q-pr-md"
          />
        </div>
        <q-space />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
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

    $q.dark.set(localStorage.darkTheme ? localStorage.darkTheme : 'auto');

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      darkMode: $q.dark.isActive,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleDarkMode() {
        $q.dark.toggle();
        localStorage.darkTheme = $q.dark.isActive;
      },
    };
  },
});
</script>
