<template>
  <div :style="$q.platform.is.mobile ? 'padding: 2% 10%' : 'padding: 2% 20%'">
    <div class="text-h4 text-bold q-mb-md">
      INICIAÇÃO 2025 | DIAS 2 A 4 DE JUNHO
    </div>
    <div class="text-h4 text-bold q-mb-md">
      TARA BRANCA - BUDA DE LONGA VIDA, SABEDORIA E BOA FORTUNA
    </div>
    <div class="text-subtitle1 text-bold text-italic q-mb-md">
      COM A PROFª GEN KELSANG ZANGMO
    </div>
    <div :class="$q.platform.is.mobile ? '' : 'row'">
      <div :class="$q.platform.is.mobile ? 'q-mb-md' : 'col q-mr-sm'">
        <div class="text-subtitle1">
          Tara Branca é uma deidade iluminada feminina, cuja função é conceder
          longa vida, sabedoria e boa fortuna.
        </div>
        <div class="q-my-md"></div>
        <div class="text-subtitle1">
          Durante a Iniciação, teremos a oportunidade de receber as profundas
          bênçãos de Tara Branca e ensinamentos para aprofundar nossa prática
          espiritual!
        </div>
        <div class="q-my-md"></div>
        <div class="text-subtitle1">
          <b>ATENÇÃO! A INICIAÇÃO NÃO SERÁ TRANSMITIDA ON-LINE!</b>
        </div>
        <div class="q-my-md"><hr /></div>
        <div class="text-subtitle1">
          <b>VENERÁVEL GESHE-LA:</b>
        </div>
        <div class="q-my-md"></div>
        <div class="text-subtitle1">
          Venerável Geshe Kelsang Gyatso Rinpoche, ou Geshe-la, é o fundador do
          Budismo Kadampa no mundo moderno e um mestre em meditação plenamente
          realizado, que mantém no seu coração a essência dos ensinamentos de
          Buda.
        </div>
        <div class="q-my-md"><hr /></div>
        <div class="text-subtitle1">
          <b>A PROFESSORA:</b>
        </div>
        <div class="q-my-md"></div>
        <div class="text-subtitle1">
          Gen Kelsang Zangmo é a professora residente do Centro Budista Kadampa
          Bodhisattva, discípula de venerável Geshe-la e monja ordenada desde
          2002, sendo praticante budista há mais de trinta anos.
        </div>
        <div class="q-my-md"><hr /></div>
        <div class="text-subtitle1">
          <b>Contribuição:</b>
        </div>
        <div class="text-subtitle1">EM BREVE!</div>
        <!-- <div class="text-subtitle1"><b>Retiro Completo:</b> R$ 450,00</div>
        <div class="text-subtitle1"><b>Diária:</b> R$ 200,00</div> -->
        <div class="q-my-md"><hr /></div>
        <div class="text-subtitle1">
          <b>PROGRAMAÇÃO:</b>
        </div>
        <div class="text-subtitle1">
          <i>EM BREVE!</i>
        </div>
      </div>
      <div :class="$q.platform.is.mobile ? 'q-mt-md' : 'col q-ml-sm'">
        <q-img
          ratio="1"
          src="http://meditaremfortaleza.org.br/assets/iniciacao.png"
          style="
            width: 75%;
            margin-left: auto;
            margin-right: auto;
            display: block;
          "
        ></q-img>
        <div class="text-subtitle1 text-bold text-center">
          DESEJA PARTICIPAR?
        </div>
        <div class="text-subtitle1 text-bold text-center">
          ENTRE EM CONTATO CONOSCO!
        </div>
        <q-btn
          dense
          flat
          icon="bi-whatsapp"
          target="_blank"
          label="ENTRE EM CONTATO!"
          href="https://wa.me/558588456001?text=Ol%C3%A1%21+Me+chamo+%3Cseu+nome%3E+e+estou+vindo+pelo+site+do+CBK+Bodhisattva%21+Gostaria+de+me+informar+sobre+a+Inicia%C3%A7%C3%A3o+de+Tara+Branca%21"
          class="q-my-lg"
          style="
            width: 75%;
            margin-left: auto;
            margin-right: auto;
            display: block;
          "
        />
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
