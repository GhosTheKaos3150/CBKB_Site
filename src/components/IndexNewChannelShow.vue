<template>
  <div
    :class="
      $q.platform.is.mobile
        ? ' items-center justify-center gd-especial-vertical'
        : 'row items-center justify-center gd-especial-horizontal'
    "
    :style="$q.platform.is.mobile ? 'padding: 2% 10%' : 'padding: 2% 10%'"
  >
    <div class="col">
      <div id="homeTag" class="text-h5 text-center text-bold q-mb-md">
        O CANAL DO YOUTUBE DA <i>NOVA TRADIÇÃO KADAMPA</i> ESTÁ DE CARA NOVA!
      </div>
      <hr v-if="$q.platform.is.mobile" />
    </div>
    <div
      :class="
        $q.platform.is.mobile
          ? 'flex-center'
          : 'col-7 q-ml-xl q-pl-xl flex-center'
      "
    >
      <div class="text-h6 text-center text-bold q-mb-md">ASSISTA O VÍDEO!</div>
      <iframe
        :width="$q.platform.is.mobile ? '100%' : '100%'"
        :height="$q.platform.is.mobile ? '550' : '550'"
        src="https://www.youtube.com/embed/xUyq0D1fJ4A"
        title="O canal do Youtube da Nova Tradição Kadampa está de cara nova!"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div class="text-h6 text-center text-bold q-mb-md">
        <a
          href="https://www.youtube.com/channel/UCRvpT2dbLasFvBNOUSdhOAg"
          style="color: beige"
          >VISITE O CANAL DA NKT NO YOUTUBE!</a
        >
      </div>
    </div>
  </div>
</template>

<style>
.gd-especial-horizontal {
  background: rgb(239, 150, 85);
  background: linear-gradient(
    90deg,
    rgba(239, 150, 85, 1) 30%,
    rgba(235, 112, 35, 1) 70%
  );
  color: beige;
}

.gd-especial-vertical {
  background: rgb(239, 150, 85);
  background: linear-gradient(
    180deg,
    rgba(239, 150, 85, 1) 30%,
    rgba(235, 112, 35, 1) 70%
  );
  color: beige;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'IndexNewChannelShow',
});
</script>
