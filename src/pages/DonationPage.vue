<template>
  <q-page padding>
    <donation-component />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DonationComponent from 'src/components/DonationComponent.vue';

export default defineComponent({
  name: 'DonationPage',
  components: {
    DonationComponent,
  },
});
</script>
