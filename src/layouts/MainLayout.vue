<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar v-if="$q.platform.is.mobile">
        <q-btn flat @click="toggleLeftDrawer" round dense icon="menu" />
        <q-space />
        <q-img
          src="../assets/cbkb_logo.png"
          fit="scale-down"
          height="100px"
          :ratio="1"
          class="q-my-md"
          @click="$router.push(`/`)"
        ></q-img>
        <q-space />
      </q-toolbar>

      <q-toolbar v-else>
        <q-space />
        <q-btn-group flat>
          <q-btn @click="$router.push(`/donation`)">FAÇA UMA DOAÇÃO</q-btn>
          <!-- <q-btn icon="bi-facebook" /> -->
          <q-btn
            icon="bi-instagram"
            target="_blank"
            href="https://www.instagram.com/meditaremfortaleza/"
          />
          <q-btn
            icon="bi-whatsapp"
            target="_blank"
            href="https://wa.me/message/7A5QUB4NZQ6MG1"
          />
          <q-btn
            icon="bi-youtube"
            target="_blank"
            href="https://www.youtube.com/@NKTIKBU"
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
          class="q-mb-md"
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

    <q-drawer
      v-if="$q.platform.is.mobile"
      v-model="leftDrawerOpen"
      overlay
      bordered
    >
      <q-scroll-area class="fit">
        <q-item clickable href="/#/donation" class="q-my-md">
          <q-item-section avatar>
            <q-icon name="volunteer_activism" />
          </q-item-section>
          <q-item-section> Faça uma Doação! </q-item-section>
        </q-item>

        <q-separator />

        <q-item
          clickable
          target="_blank"
          href="https://www.instagram.com/meditaremfortaleza/"
          class="q-my-md"
        >
          <q-item-section avatar>
            <q-icon name="bi-instagram" />
          </q-item-section>
          <q-item-section> Acompanhe nosso Instagram! </q-item-section>
        </q-item>

        <q-separator />

        <q-item
          clickable
          target="_blank"
          href="https://wa.me/message/7A5QUB4NZQ6MG1"
          class="q-my-md"
        >
          <q-item-section avatar>
            <q-icon name="bi-whatsapp" />
          </q-item-section>
          <q-item-section> Entre em Contato pelo Whatsapp! </q-item-section>
        </q-item>

        <q-separator />

        <q-item
          clickable
          target="_blank"
          href="https://www.youtube.com/@NKTIKBU"
          class="q-my-md"
        >
          <q-item-section avatar>
            <q-icon name="bi-youtube" />
          </q-item-section>
          <q-item-section> Siga a NTK no Youtube! </q-item-section>
        </q-item>

        <q-separator />
      </q-scroll-area>
    </q-drawer>

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
