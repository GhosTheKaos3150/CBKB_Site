<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar v-if="$q.platform.is.mobile">
        <q-space />
        <q-img
          src="../assets/cbkb_logo.png"
          fit="scale-down"
          height="100px"
          :ratio="1"
          @click="$router.push(`/`)"
        ></q-img>
        <q-space />
      </q-toolbar>

      <q-toolbar v-else>
        <q-space />
        <q-btn-group flat>
          <!-- <q-btn icon="bi-facebook" /> -->
          <q-btn
            icon="bi-instagram"
            target="_blank"
            href="https://www.instagram.com/meditaremfortaleza/"
          />
          <!-- <q-btn icon="bi-twitter" /> -->
        </q-btn-group>
      </q-toolbar>

      <q-toolbar class="" v-if="!$q.platform.is.mobile" insert>
        <q-space />
        <q-img
          src="../assets/cbkb_logo.png"
          fit="scale-down"
          height="100px"
          :ratio="1"
          @click="$router.push(`/`)"
        ></q-img>
        <q-space />
      </q-toolbar>

      <q-toolbar class="vertical-middle" v-if="!$q.platform.is.mobile" insert>
        <q-space />
        <div v-for="btn in essentialLinks" :key="btn.title">
          <q-btn
            dense
            flat
            :icon="btn.icon"
            :label="btn.title"
            class="q-pr-md"
            @click="scroll(btn.click)"
          />
        </div>
        <q-space />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { scroll } from 'quasar';

const { getScrollTarget, setVerticalScrollPosition } = scroll;

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  data() {
    return {
      essentialLinks: [
        {
          title: 'Sobre Nós',
          caption: 'Confira a Programação do Centro',
          icon: 'home',
          click: 'homeTag',
        },
        {
          title: 'Atividades',
          caption: 'As Atividades que nosso Centro proporciona',
          icon: 'self_improvement',
          click: 'atvsTag',
        },
        {
          title: 'O Centro',
          caption: 'Conheça nossos Centro de Meditação',
          icon: 'person',
          click: 'centerTag',
        },
        {
          title: 'A Tradição',
          caption: 'Conheça nossos queridos Professores',
          icon: 'person',
          click: 'dharmaTag',
        },
        {
          title: 'Geshe-La',
          caption: 'Conheça nossos querido Guia Espiritual',
          icon: 'person',
          click: 'gesheTag',
        },
        {
          title: 'Onde nos Encontrar',
          caption: 'Venha nos conhecer!',
          icon: 'map',
          click: 'findTag',
        },
      ],
    };
  },
  methods: {
    scroll(name: string) {
      const elemento = document.getElementById(name);
      if (!elemento) {
        return;
      }

      const target = getScrollTarget(elemento);
      const offset = elemento?.offsetTop;
      const dur = 1000;

      setVerticalScrollPosition(target, offset, dur);
    },
  },
});
</script>
