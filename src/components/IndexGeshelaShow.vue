<template>
  <q-img
    id="gesheTag"
    src="../../public/banners/header4.png"
    fit="cover"
    :ratio="$q.platform.is.mobile ? 16 / 9 : 16 / 3"
  >
    <div
      class="absolute-bottom text-bold text-center"
      :class="$q.platform.is.mobile ? 'text-h5' : 'text-h4'"
    >
      GESHE-LA
    </div>
  </q-img>
  <div
    class="justify-center"
    :style="
      $q.platform.is.mobile
        ? 'background-color: #3f3f41; color: #ffffff;  padding: 2% 10%'
        : 'background-color: #3f3f41; color: #ffffff;  padding: 2% 25%'
    "
  >
    <div
      class="q-mt-md text-center text-subtitle1"
      style="padding: 2% 2% 0% 0%"
    >
      O fundador da Nova Tradição Kadampa – União Budista Kadampa Internacional.
      Venerável Geshe Kelsang Gyatso Rinpoche é um renomado mestre de meditação
      e detentor da Linhagem Oral Ganden do Mahamudra. é também um dos pioneiros
      na introdução do Budismo moderno na sociedade contemporânea. Deu milhares
      de ensinamentos, escreveu mais de vinte livros sobre Budismo e Meditação,
      criou mais de 1.200 centros de meditação em todo o mundo, treinou centenas
      de qualificados professores de meditação e desenvolveu programas práticos
      de estudo e meditação concebidos para o mundo moderno. Geshe-la – como é
      carinhosamente chamado por seus discípulos – é um erudito altamente
      considerado e um praticante do Budismo Kadampa plenamente realizado. Seus
      ensinamentos e conselhos transmitem perfeitamente para o nosso mundo
      moderno a antiga sabedoria do Budismo.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'IndexGeshelaShow',
});
</script>
