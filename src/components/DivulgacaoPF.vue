<template>
  <div :style="$q.platform.is.mobile ? 'padding: 2% 10%' : 'padding: 2% 20%'">
    <div class="text-h4 text-bold q-mb-md">PROGRAMA FUNDAMENTAL</div>
    <div :class="$q.platform.is.mobile ? '' : 'row'">
      <div :class="$q.platform.is.mobile ? 'q-mb-md' : 'col q-mr-sm'">
        <div class="text-subtitle1">
          O objetivo do Programa Fundamental é proporcionar uma apresentação
          sistemática de tópicos particulares do Budismo Mahayana para capacitar
          os praticantes a aprofundarem seu conhecimento e experiência do
          budismo.
        </div>
        <div class="q-my-md"></div>
        <div class="text-subtitle1">
          Todos os ensinamentos são fundamentados nos comentários do Venerável
          Geshe Kelsang Gyatso.
        </div>
        <div class="q-my-md"></div>
        <div class="text-subtitle1">
          O Programa Fundamental leva aproximadamente cinco anos para ser
          concluído e requer um procedimento de inscrição.
        </div>
        <div class="q-my-md"></div>
        <div class="text-subtitle1">
          O programa abrange os seguintes assuntos, fundamentados nos
          ensinamentos de sutra de Buda e os respectivos comentários feitos pelo
          Venerável Geshe Kelsang Gyatso:
        </div>
        <div class="text-subtitle1 q-mt-md">
          <ol>
            <li>
              As etapas do caminho a iluminação, com base no comentário Caminho
              Alegre da Boa Fortuna
            </li>
            <li>
              Treino da mente, com base no comentário nos comentários Compaixão
              Universal e Novo Oito Passos para a Felicidade
            </li>
            <li>
              O Sutra Coração, com base no comentário Novo Coração de Sabedoria
            </li>
            <li>
              Guia do estilo de vida do Bodhisattva, com base no comentário
              Contemplações Significativas
            </li>
            <li>
              As diversas mentes, com base no comentário Como Entender a Mente
            </li>
          </ol>
        </div>
      </div>
      <div :class="$q.platform.is.mobile ? 'q-mt-md' : 'col q-ml-sm'">
        <q-img
          src="http://meditaremfortaleza.org.br/assets/pf_divulgacao.png"
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
          AGENDE UMA ENTREVISTA COM NOSSO EPC!
        </div>
        <q-btn
          dense
          flat
          icon="bi-whatsapp"
          target="_blank"
          label="ENTRE EM CONTATO!"
          href="https://wa.me/message/7A5QUB4NZQ6MG1"
          class="q-my-lg"
          style="
            width: 75%;
            margin-left: auto;
            margin-right: auto;
            display: block;
          "
        />
        <div class="text-subtitle1 text-center">
          Livro que estamos Estudando: <b>Caminho Alegre da Boa Fortuna</b>
        </div>
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
