<template>
  <div class="absolute-center">
    <div class="text-h3 text-center q-mb-md">ADMINISTRAÇÃO</div>
    <q-btn
      class="q-mb-sm"
      align="between"
      size="lg"
      color="primary"
      icon="schedule"
      label="PROGRAMAÇÃO DO CENTRO"
      style="width: 100%"
    />
    <br />
    <q-btn
      class="q-mb-sm"
      align="between"
      size="lg"
      color="primary"
      icon="self_improvement"
      label="LISTA DE ATIVIDADES"
      style="width: 100%"
    />
    <br />
    <q-btn
      class="q-mb-sm"
      align="between"
      size="lg"
      color="primary"
      icon="person"
      label="LISTA DE PROFESSORES"
      style="width: 100%"
    />
    <br />
    <q-btn
      class="q-mb-sm"
      align="between"
      size="lg"
      color="primary"
      icon="logout"
      label="SAIR"
      style="width: 100%"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AdminHome',
});
</script>
