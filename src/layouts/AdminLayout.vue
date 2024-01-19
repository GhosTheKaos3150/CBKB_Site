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
          <!-- <q-btn icon="bi-twitter" /> -->
        </q-btn-group>
      </q-toolbar>

      <q-toolbar v-if="!$q.platform.is.mobile" insert>
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
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>
