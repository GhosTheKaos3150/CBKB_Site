<template>
  <div :style="$q.platform.is.mobile ? 'padding: 2% 10%' : 'padding: 2% 20%'">
    <div class="text-h4 text-bold q-mb-md">Faça uma Doação</div>
    <div :class="$q.platform.is.mobile ? '' : 'row'">
      <div :class="$q.platform.is.mobile ? 'q-mb-md' : 'col q-mr-sm'">
        <div class="text-subtitle1">
          O Centro de Meditação Kadampa Bodhisattva é uma entidade sem fins
          lucrativos e todo o trabalho realizado é feito por voluntários.
        </div>
        <div class="q-my-md"></div>
        <div class="text-subtitle1">
          Parte da receita vem da realização de nossas aulas e outros eventos,
          assim como da venda de livros e CDs, a fim de cobrir os custos com a
          infraestrutura do nosso espaço.
        </div>
        <div class="q-my-md"></div>
        <div class="text-subtitle1">
          Para possibilitar a manutenção e crescimento deste trabalho, toda
          doação é bem-vinda! Sua doação será direcionada ao
          <a
            target="_blank"
            href="https://budismokadampa.org.br/projeto-internacional-de-templos/"
            >Projeto Internacional de Templos</a
          >
          que mantém, amplia, ou estabelece novos Templos.
        </div>
        <div class="q-my-md"></div>
        <div class="text-subtitle1">
          Fazendo uma doação você também acumula muitos méritos, ou energia
          positiva, e garante que possamos continuar nosso trabalho de criar
          causas de paz e felicidade mundo afora, tanto para esta geração,
          quanto para as gerações futuras. Agradecemos a sua generosidade!
        </div>
        <div class="q-my-md"></div>
        <div class="text-subtitle1">Dedique os méritos!</div>
      </div>
      <div :class="$q.platform.is.mobile ? 'q-mt-md' : 'col q-ml-sm'">
        <div class="text-subtitle1 text-bold text-center">
          CENTRO BUDISTA KADAMPA BODHISATTVA
        </div>
        <q-img
          ratio="1"
          src="../assets/qrcode_pix.jpg"
          style="
            width: 75%;
            margin-left: auto;
            margin-right: auto;
            display: block;
          "
        ></q-img>
        <div class="text-subtitle1 text-center">
          <span class="text-bold">Chave Pix:</span> 49.756.898/0001-11 (CNPJ)
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'DonationComponent',
});
</script>
