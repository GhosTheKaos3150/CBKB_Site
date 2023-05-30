<template>
  <div class="row q-mb-md">
    <q-space />
    <q-img
      src="https://picsum.photos/500/300"
      style="max-width: 500px"
      :ratio="16 / 9"
    />
    <q-space />
  </div>
  <div class="text-h6 q-mb-md">{{ prof.name }}</div>
  <q-separator />
  <div class="text-p q-my-md">{{ prof.desc }}</div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { Teacher } from './models';

export default defineComponent({
  name: 'TeachersView',
  props: {
    prof: {
      type: Object as PropType<Teacher>,
      required: true,
    },
  },
});
</script>
