<template>
  <q-page class="items-start">
    <schedule-view />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ScheduleView from 'src/components/ScheduleView.vue';

export default defineComponent({
  name: 'ScheduleViewPage',
  components: {
    ScheduleView,
  },
});
</script>
