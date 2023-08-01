<template>
  <q-page padding>
    <apearence-edit></apearence-edit>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ApearenceEdit from 'src/components/ApearenceEdit.vue';
export default defineComponent({
  name: 'ApearencePage',
  components: {
    ApearenceEdit,
  },
});
</script>
