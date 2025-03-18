<template>
  <div :style="$q.platform.is.mobile ? 'padding: 2% 10%' : 'padding: 2% 20%'">
    <div class="text-h4 text-bold q-mb-md">
      RETIRO URBANO | DIAS 13 A 15 DE MAIO
    </div>
    <div class="text-h4 text-bold q-mb-md">
      TARA BRANCA - BUDA DE LONGA VIDA, SABEDORIA E BOA FORTUNA
    </div>
    <div class="text-subtitle1 text-bold text-italic q-mb-md">
      COM A PROFª GEN KELSANG ZANGMO
    </div>
    <div :class="$q.platform.is.mobile ? '' : 'row'">
      <div :class="$q.platform.is.mobile ? 'q-mb-md' : 'col q-mr-sm'">
        <div class="text-subtitle1">EM BREVE!</div>
        <div class="q-my-md"><hr /></div>
        <div class="text-subtitle1"><b>Local:</b> <i>CBK BODHISATTVA</i></div>
        <div class="text-subtitle1">
          <i>Rua Dr. José Lourenço, 870 - Sala 510 - Aldeota, Fortaleza-CE</i>
        </div>
        <div class="q-my-md"><hr /></div>
        <div class="text-subtitle1">
          <b>Contribuição:</b>
        </div>
        <div class="text-subtitle1">EM BREVE!</div>
        <!-- <div class="text-subtitle1"><b>Retiro Completo:</b> R$ 450,00</div>
        <div class="text-subtitle1"><b>Diária:</b> R$ 200,00</div> -->
        <!-- <div class="text-subtitle1">
          <i
            >*Valores Incluem Hospedagem, Alimentação no Local e Sessões de
            Retiro!</i
          >
        </div> -->
      </div>
      <div :class="$q.platform.is.mobile ? 'q-mt-md' : 'col q-ml-sm'">
        <q-img
          ratio="1"
          src="http://meditaremfortaleza.org.br/assets/retiro_iniciacao.png"
          style="
            width: 75%;
            margin-left: auto;
            margin-right: auto;
            display: block;
          "
        ></q-img>
        <div class="text-subtitle1 text-bold text-center">
          INSCRIÇÕES EM BREVE!
        </div>
        <!-- <div class="text-subtitle1 text-bold text-center">
          ENTRE EM CONTATO CONOSCO!
        </div>
        <q-btn
          dense
          flat
          icon="bi-whatsapp"
          target="_blank"
          label="ENTRE EM CONTATO!"
          href="https://wa.me/558588456001?text=Ol%C3%A1%21+Me+chamo+%3Cseu+nome%3E+e+estou+vindo+pelo+site+do+CBK+Bodhisattva%21+Gostaria+de+me+informar+sobre+o+Retiro+de+Purifica%C3%A7%C3%A3o%21"
          class="q-my-lg"
          style="
            width: 75%;
            margin-left: auto;
            margin-right: auto;
            display: block;
          "
        /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  // name: 'ComponentName'
});
</script>
