<template>
  <div :style="$q.platform.is.mobile ? 'padding: 2% 10%' : 'padding: 2% 20%'">
    <div class="text-h4 text-bold q-mb-md">PROGRAMA FUNDAMENTAL</div>
    <div :class="$q.platform.is.mobile ? '' : 'row'">
      <div :class="$q.platform.is.mobile ? 'q-mb-md' : 'col q-mr-sm'">
        <div class="text-subtitle1">
          O Programa Geral introduz a visão, a meditação e a ação budistas
          básicas, bem como vários outros ensinamentos e práticas, todos dentro
          da tradição budista mahayana de Atisha and Je Tsongkhapa, para ajudar
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
          O Programa Geral é ensinado em todos os Centros Budistas Kadampa é um
          começo ideal para os interessados em conhecer melhor o budismo e a
          meditação.
        </div>
        <div class="text-subtitle1 q-mt-md">
          <b>ASSUNTOS QUE O PROGRAMA ABRANGE:</b>
          <ol>
            <li>Quem foi Buda?</li>
            <li>Entender a mente</li>
            <li>Vidas passadas e futuras</li>
            <li>O que é carma?</li>
            <li>Nossa preciosa vida humana</li>
            <li>O que é meditação</li>
            <li>Morte</li>
            <li>O estilo de vida budista</li>
            <li>O que é libertação?</li>
            <li>Desenvolver renúncia</li>
            <li>Os três treinos superiores</li>
            <li>Tornar-se um Bodhisattva</li>
            <li>O estilo de vida do Bodhisattva</li>
            <li>Verdade última</li>
            <li>Iluminação</li>
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
          href="https://wa.me/5585997489811"
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
