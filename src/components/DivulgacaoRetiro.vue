<template>
  <div :style="$q.platform.is.mobile ? 'padding: 2% 10%' : 'padding: 2% 20%'">
    <div class="text-h4 text-bold q-mb-md">RETIRO EXTERNO DE PURUFICAÇÃO</div>
    <div class="text-h4 text-bold q-mb-md">PURIFICAÇÃO DO CARMA NEGATIVO</div>
    <div class="text-subtitle1 text-bold text-italic q-mb-md">
      COM A PROFª GEN KELSANG ZANGMO
    </div>
    <div :class="$q.platform.is.mobile ? '' : 'row'">
      <div :class="$q.platform.is.mobile ? 'q-mb-md' : 'col q-mr-sm'">
        <div class="text-subtitle1">
          Sob a influência de mentes deludidas acumulamos, em nossas vidas
          anteriores, grande carma negativo. Como resultado, experienciamos
          agora dificuldade em desenvolver fé e convicção no Dharma e em fazer
          progressos nas etapas do caminho à iluminação.
        </div>
        <div class="q-my-md"></div>
        <div class="text-subtitle1">
          Se não purificarmos toda negatividade que acumulamos, teremos de
          experienciar grande sofrimento no futuro!
        </div>
        <div class="q-my-md"></div>
        <div class="text-subtitle1">
          Neste retiro, iremos aprender como purificar nosso carma negativo e
          utilizar nossa vida humana de forma significativa - purificando nossas
          negatividades e garantindo nossa felicidade futura!
        </div>
        <div class="q-my-md"><hr /></div>
        <div class="text-subtitle1">
          <b>Local:</b> <i>Tabuba, Praia do Cumbuco - Caucaia-CE</i>
        </div>
        <div class="text-subtitle1">
          <i>Rua Dep. Hildo Furtado Leite, Nº 315</i>
        </div>
        <div class="q-my-md"><hr /></div>
        <div class="text-subtitle1">
          <b>Contribuição:</b>
        </div>
        <div class="text-subtitle1"><b>Retiro Completo:</b> R$ 450,00</div>
        <div class="text-subtitle1"><b>Diária:</b> R$ 200,00</div>
        <div class="text-subtitle1">
          <i
            >*Valores Incluem Hospedagem, Alimentação no Local e Sessões de
            Retiro!</i
          >
        </div>
      </div>
      <div :class="$q.platform.is.mobile ? 'q-mt-md' : 'col q-ml-sm'">
        <q-img
          ratio="1"
          src="http://meditaremfortaleza.org.br/assets/retiro_externo.png"
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
          href="https://wa.me/558588456001"
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
