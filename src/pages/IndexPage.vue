<template>
  <q-page class="items-start">
    <!-- <script
      async
      src="https://api.kadampa.org/en/banner/festival/leaderboard/4"
    ></script>
    <div id="DivAds_4"></div> -->
    <index-banner-show />
    <div
      class="justify-center"
      :style="
        $q.platform.is.mobile
          ? 'background-color: #3f3f41; color: #ffffff; padding: 2% 10%'
          : 'background-color: #3f3f41; color: #ffffff; padding: 2% 25%'
      "
    >
      <div id="homeTag" class="text-h5 text-center text-bold q-mb-md">
        CENTRO BUDISTA KADAMPA BODHISATTVA
      </div>
      <div
        class="q-mt-md text-center text-subtitle1"
        style="padding: 2% 2% 0% 0%"
      >
        O Budismo Kadampa torna os ensinamentos de Buda e as práticas de
        meditação acessíveis para as pessoas de todo o mundo. O budismo tem uma
        relevância atemporal e universal, e pode ser praticado por qualquer
        pessoa em qualquer cultura, independente de raça, gênero, classe ou
        idade. Por meio do treino da meditação e outras práticas budistas
        podemos aperfeiçoar a qualidade da nossa vida, desenvolvendo paz
        interior, compaixão e sabedoria.
      </div>
      <div class="row">
        <div
          class="q-ma-md"
          :class="$q.platform.is.mobile ? '' : 'col'"
          v-for="stc in atvsStatic"
          :key="stc.id"
        >
          <q-img
            :src="`http://meditaremfortaleza.org.br/assets/${stc._img}`"
            fit="cover"
            ratio="1"
            :width="$q.platform.is.mobile ? '85%' : '50%'"
            style="
              border-radius: 100%;
              margin-left: auto;
              margin-right: auto;
              display: block;
            "
          />
          <div
            class="text-bold text-center q-mt-md"
            :class="$q.platform.is.mobile ? 'text-subtitle1' : 'text-h6'"
          >
            {{ stc.nome }}
          </div>
          <div class="text-center q-mt-md">
            {{ stc.description }}
          </div>
        </div>
      </div>
    </div>
    <index-activity-show />
    <index-center-show />
    <index-tradition-show />
    <index-geshela-show />
    <div
      class="justify-center"
      :class="$q.platform.is.mobile ? '' : 'row'"
      :style="
        $q.platform.is.mobile
          ? 'background-color: #1565c0; color: #ffffff;  padding: 5% 10%'
          : 'background-color: #1565c0; color: #ffffff;  padding: 2% 25%'
      "
    >
      <div>
        <div
          class="text-bold q-mb-md text-center"
          :class="$q.platform.is.mobile ? 'text-h6' : 'text-h4'"
        >
          PRESENTES DE VENERÁVEL <br v-if="$q.platform.is.mobile" />
          GESHE KELSANG GYATSO
        </div>
        <div :class="$q.platform.is.mobile ? '' : 'row'">
          <div v-if="!$q.platform.is.mobile" class="col q-mr-sm">
            <q-img
              src="bm_gratis.png"
              style="
                width: 55%;
                margin-left: auto;
                margin-right: auto;
                display: block;
              "
            ></q-img>
          </div>
          <q-space></q-space>
          <div
            :class="
              $q.platform.is.mobile
                ? 'q-mb-md text-center text-subtitle2 justify-center'
                : 'col q-mr-sm text-center text-subtitle2 justify-center'
            "
          >
            Por sua enorme bondade e visando beneficiar a todos os seres vivos,
            Venerável Geshe Kelsang Gyatso deixou dois preciosos livros em
            formato digital como presente para todos!
            <br />
            <br />
            Você pode baixar estas preciosas obras para seu celular ou e-reader
            agora mesmo!
            <br />
            <br />
            <q-btn
              class="full-width"
              color="light-blue-6"
              href="https://tharpa.com/br/e-books-gratis"
              >FAÇA O DOWNLOAD GRATUITO!</q-btn
            >
          </div>
          <div :class="$q.platform.is.mobile ? 'q-mb-md' : 'col q-mr-sm'">
            <div v-if="$q.platform.is.mobile" class="row">
              <q-img
                class="col"
                src="ctsv_gratis.png"
                style="
                  width: 75%;
                  margin-left: auto;
                  margin-right: auto;
                  display: block;
                "
              ></q-img>
              <q-img
                class="col"
                src="bm_gratis.png"
                style="
                  width: 75%;
                  margin-left: auto;
                  margin-right: auto;
                  display: block;
                "
              ></q-img>
            </div>
            <q-img
              v-else
              src="ctsv_gratis.png"
              style="
                width: 55%;
                margin-left: auto;
                margin-right: auto;
                display: block;
              "
            ></q-img>
          </div>
          <q-space></q-space>
        </div>
      </div>
    </div>
    <div
      class="justify-center"
      :class="$q.platform.is.mobile ? '' : 'row'"
      :style="
        $q.platform.is.mobile
          ? 'background-color: #3f3f41; color: #ffffff;  padding: 2% 10%'
          : 'background-color: #3f3f41; color: #ffffff;  padding: 2% 25%'
      "
    >
      <div :class="$q.platform.is.mobile ? '' : 'col'">
        <div class="text-h6 q-mb-xl">CENTRO BUDISTA KADAMPA BODHISATTVA</div>
        <div class="text-subtitle2">
          Rua Dr. José Lourenço, 870 - sala 510. Aldeota
        </div>
        <div class="text-subtitle2">
          E-mail: contato@meditaremfortaleza.org.br
        </div>
        <div class="text-subtitle2 q-mb-xl">Telefone: 85 8965-7264</div>
        <div class="text-subtitle2 q-mb-xs">ACOMPANHE NOSSA PROGRAMAÇÃO!</div>
        <q-btn
          dense
          flat
          round
          icon="bi-instagram"
          target="_blank"
          href="https://www.instagram.com/meditaremfortaleza/"
        />
        <q-btn
          dense
          flat
          round
          icon="bi-whatsapp"
          target="_blank"
          href="https://wa.me/message/7A5QUB4NZQ6MG1"
        />
        <div class="text-subtitle2 q-my-xs">SIGA A NTK EM OUTRAS REDES</div>
        <q-btn
          dense
          flat
          round
          icon="bi-instagram"
          target="_blank"
          href="https://www.instagram.com/budismokadampabr/"
        />
        <q-btn
          dense
          flat
          round
          icon="bi-youtube"
          target="_blank"
          href="https://www.youtube.com/@NKTIKBU"
        />
      </div>
      <div class="q-mt-md" :class="$q.platform.is.mobile ? '' : 'col'">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3574791496853!2d-38.5097065886191!3d-3.7320256431766548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7485ef8375acb%3A0x5dca009be89beaa5!2sCentro%20Budista%20Kadampa%20Bodhisattva!5e0!3m2!1spt-BR!2sbr!4v1686149403593!5m2!1spt-BR!2sbr"
          :width="$q.platform.is.mobile ? '100%' : '600px'"
          :height="$q.platform.is.mobile ? '300px' : '450px'"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import IndexBannerShow from '../components/IndexBannerShow.vue';
import IndexActivityShow from '../components/IndexActivityShow.vue';
import IndexCenterShow from '../components/IndexCenterShow.vue';
import IndexTraditionShow from '../components/IndexTraditionShow.vue';
import IndexGeshelaShow from '../components/IndexGeshelaShow.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    IndexBannerShow,
    IndexActivityShow,
    IndexCenterShow,
    IndexTraditionShow,
    IndexGeshelaShow,
  },
  setup() {
    return {
      slide: ref('1'),
    };
  },
  data: () => {
    return {
      mapCenter: { lat: 0, lng: 0 },

      atvsStatic: [
        {
          id: 1,
          nome: 'Meditações Guiadas',
          description:
            'Atividade aberta ao público, com temas variados de introdução aos ' +
            'principais ensinamentos Budistas, que são conselhos práticos para a nossa vida moderna. ' +
            'Se praticados de maneira sincera, esses ensinamentos nos ajudarão a solucionar todos os nossos ' +
            'problemas diários, como a raiva, o apego, o ciúme, a inveja e, em particular, nossa ignorância.',
          _img: 'stc1.jpg',
        },
        {
          id: 2,
          nome: 'Preces Cantadas',
          description:
            'As preces cantadas, ou pujas, são métodos poderosos para recebermos bênçãos, ' +
            'purificarmos nosso carma negativo e acumularmos virtude. ' +
            'Nesses encontros fazemos oferendas e seguimos uma Sadhana (livreto em português), com as preces, ' +
            'para gerarmos estados mentais positivos e virtuosos.',
          _img: 'stc2.jpg',
        },
        {
          id: 3,
          nome: 'Palestras e Cursos',
          description:
            'Prática é ideal para relaxarmos e aprendermos a controlar a mente, independentemente de ' +
            'origem, fé ou prática religiosa. Não é preciso ter experiência prévia, nem ser budista. ' +
            'Basta nos sentarmos confortavelmente e acompanhar as instruções do livro Novo Manual de Meditação. ' +
            'No final, somos convidados a aplicar os aspectos dos ensinamentos que mais forem úteis para o nosso próprio bem-estar mental.',
          _img: 'stc3.jpg',
        },
      ],
    };
  },
});
</script>
