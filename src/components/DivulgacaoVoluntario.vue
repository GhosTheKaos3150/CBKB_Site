<template>
  <div :style="$q.platform.is.mobile ? 'padding: 2% 10%' : 'padding: 2% 20%'">
    <div class="text-h4 text-bold q-mb-md">VENHA SER VOLUNTÁRIO!</div>
    <div :class="$q.platform.is.mobile ? '' : 'row'">
      <div :class="$q.platform.is.mobile ? 'q-mb-md' : 'col q-mr-sm'">
        <div class="text-subtitle1">
          A Nova Tradição Kadampa valoriza imensamente o trabalho voluntário, e
          todas as atividades da NTK ao redor do mundo são organizadas,
          gerenciadas e mantidas por trabalho voluntário, desde os Centros de
          Meditação e Budismo ao redor do mundo até os maravilhosos Festivais
          Internacionais!
        </div>

        <div class="q-my-md"></div>
        <div class="text-subtitle1">
          O Voluntariado é extremamente precioso, e uma excelente oportunidade
          para acumular mérito! Há várias atividades em que podemos colaborar
          com o Centro e ajudar a espalhar o precioso Dharma Kadam em nossa
          comunidade local e além.
        </div>
        <div class="text-subtitle1 text-bold q-my-md">
          COMO FAÇO PARA PARTICIPAR?
        </div>
        <div class="text-subtitle1">
          Em geral, todos podem participar em alguma atividade. Caso você deseje
          participar, basta entrar em contato com nosso Coordenador do Programa
          de Estudos (EPC) para se candidatar.
        </div>
        <q-btn
          dense
          flat
          icon="bi-whatsapp"
          target="_blank"
          label="ENTRE EM CONTATO!"
          href="https://wa.me/5585997489811"
          class="q-my-lg"
        />
        <div class="text-subtitle1">Essa é uma atividade muito meritória!</div>
        <div class="text-subtitle1">
          <b>Não esqueça de dedicar seus méritos!</b>
        </div>
      </div>
      <div :class="$q.platform.is.mobile ? 'q-mt-md' : 'col q-ml-sm'"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  // name: 'ComponentName'
});
</script>
