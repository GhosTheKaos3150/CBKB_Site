<template>
  <q-page class="items-start">
    <q-img
      src="../assets/banners/header1.png"
      fit="cover"
      :ratio="$q.platform.is.mobile ? 16 / 9 : 16 / 3"
    >
      <div
        class="absolute-bottom text-bold"
        :class="$q.platform.is.mobile ? 'text-h5' : 'text-h4'"
        :style="$q.platform.is.mobile ? '' : 'padding-left: 25%;'"
      >
        TODOS OS SERES SÃO BEM VINDOS!
      </div>
    </q-img>
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
            :src="stc._img"
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
    <div
      v-if="eventos.length > 0"
      class="justify-center"
      :style="
        $q.platform.is.mobile
          ? 'background-color: #e6e6e6; color: #000000; padding: 2% 10%'
          : 'background-color: #e6e6e6; color: #000000; padding: 2% 25%'
      "
    >
      <div id="atvsTag" class="text-h5 text-center text-bold q-mb-md">
        ATIVIDADES EM DESTAQUE
      </div>
      <q-carousel
        v-model="slide"
        animated
        infinite
        autoplay
        swipeable
        navigation-position="bottom"
        transition-prev="slide-right"
        transition-next="slide-left"
        control-color="secondary"
        class="rounded-borders q-mb-md"
      >
        <q-carousel-slide
          v-for="evento in destaques"
          :key="evento._id"
          :name="evento.atividade.name.toLowerCase().replace(' ', '_')"
          :img-src="require(`../assets/${evento.atividade._img}`)"
          class="column flex-center"
          style="color: black"
          @click="$router.push(`/programacao/${evento._id}`)"
        >
          <div
            class="absolute-bottom custom-caption"
            :style="evento.destaque ? 'color: yellow;' : ''"
          >
            <div class="text-h5 text-bold">
              {{ evento.atividade.name }}
            </div>
            <div v-if="evento.destaque" class="text-subtitle1 text-bold">
              Atividade Especial!
            </div>
            <div class="text-subtitle2">
              Dia
              {{ new Date(evento.date).toLocaleString('pt-BR').slice(0, 10) }}
              às
              {{ new Date(evento.date).toLocaleString('pt-BR').slice(12, 17) }}
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
      <div class="text-h5 text-center text-bold q-mb-md">NOSSA PROGRAMAÇÃO</div>
      <q-scroll-area
        class="q-mb-md"
        :style="$q.platform.is.mobile ? 'height: 600px' : 'height: 75vh'"
      >
        <div class="row no-wrap">
          <q-card
            class="col-auto wrap q-mx-md"
            v-for="evento in eventos"
            :key="evento._id"
            :style="$q.platform.is.mobile ? 'width: 75vw' : 'width: 15vw'"
            @click="$router.push(`/programacao/${evento._id}`)"
          >
            <q-img
              :src="require(`../assets/${evento.atividade._img}`)"
              ratio="1"
            >
              <div class="absolute-top-left text-subtitle2">
                {{ getWeekday(new Date(evento.date).getDay()) }}
                <br />
                Dia
                {{ new Date(evento.date).toLocaleString('pt-BR').slice(0, 10) }}
                às
                {{
                  new Date(evento.date).toLocaleString('pt-BR').slice(12, 17)
                }}
              </div>
            </q-img>
            <q-card-section>
              <div class="text-h5 text-bold">
                {{ evento.atividade.name }}
              </div>
              <div class="text-subtitle2 q-mb-md">
                {{ evento.atividade.description }}
              </div>
              <div
                v-if="evento.atividade.isGratuita"
                class="text-subtitle2 text-italic"
              >
                Atividade Gratuita
              </div>
              <div v-else class="text-subtitle2 text-italic">
                Valor: R$ {{ evento.atividade.valor }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </q-scroll-area>
    </div>
    <q-img
      id="centerTag"
      src="../assets/banners/header2.png"
      fit="cover"
      :ratio="$q.platform.is.mobile ? 16 / 9 : 16 / 3"
    >
      <div
        class="absolute-bottom text-bold text-center"
        :class="$q.platform.is.mobile ? 'text-h5' : 'text-h4'"
      >
        O CENTRO
      </div>
    </q-img>
    <div
      class="justify-center"
      :style="
        $q.platform.is.mobile
          ? 'background-color: #e6e6e6; color: #000000; padding: 2% 10%'
          : 'background-color: #e6e6e6; color: #000000; padding: 2% 25%'
      "
    >
      <div
        class="q-my-md text-center text-subtitle1"
        style="padding: 2% 2% 0% 0%"
      >
        Desde 2006, o Centro Bodhisattva está aberto a todas as pessoas que
        buscam a paz interior e a verdadeira felicidade. Somos uma organização
        sem fins lucrativos, afiliada a uma entidade beneficente budista
        internacional denominada New Kadampa Tradition – International Kadampa
        Buddhist Union (NKT-IKBU). Nosso propósito é preservar e promover a
        essência dos ensinamentos de Buda, de uma forma que seja adequada ao
        mundo e estilo de vida moderno. Os centros Kadampas oferecem programas
        de estudo sobre a psicologia e a filosofia budistas, instruções para
        meditar e retiros para todos os níveis de praticantes. Nossa intenção é
        beneficiar a todos os seres vivos, de maneira que possam transformar
        significativamente suas vidas. Para tanto, oferecemos este espaço
        tranquilo e acolhedor, aberto a todas as pessoas – budistas e não
        budistas. Sinta-se à vontade para nos visitar a qualquer momento!
      </div>
      <div class="text-h5 text-center text-bold q-mb-md">NOSSAS ATIVIDADES</div>
      <q-scroll-area
        class="q-mb-md"
        :style="$q.platform.is.mobile ? 'height: 600px' : 'height: 75vh'"
      >
        <div class="row no-wrap">
          <q-card
            class="col-auto wrap q-mx-md q-pa-md"
            v-for="atividade in atividades"
            :key="atividade._id"
            :style="$q.platform.is.mobile ? 'width: 75vw' : 'width: 250px'"
          >
            <q-img
              :src="require(`../assets/${atividade._img}`)"
              ratio="1"
              fit="contain"
              class=""
              style="border-radius: 100%"
            />
            <q-card-section>
              <div class="text-h5 text-bold q-mb-sm">
                {{ atividade.name }}
              </div>
              <div class="text-subtitle2 q-mb-md">
                {{ atividade.description }}
              </div>
              <div
                v-if="atividade.isGratuita"
                class="text-subtitle2 text-italic"
              >
                Atividade Gratuita
              </div>
              <div v-else class="text-subtitle2 text-italic">
                Valor: R$ {{ atividade.valor }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </q-scroll-area>
    </div>
    <q-img
      id="dharmaTag"
      src="../assets/banners/header3.png"
      fit="cover"
      :ratio="$q.platform.is.mobile ? 16 / 9 : 16 / 3"
    >
      <div
        class="absolute-bottom text-bold text-center"
        :class="$q.platform.is.mobile ? 'text-h5' : 'text-h4'"
      >
        A TRADIÇÃO
      </div>
    </q-img>
    <div
      class="justify-center"
      :style="
        $q.platform.is.mobile
          ? 'background-color: #e6e6e6; color: #000000; padding: 2% 10%'
          : 'background-color: #e6e6e6; color: #000000; padding: 2% 25%'
      "
    >
      <div
        class="q-my-md text-center text-subtitle1"
        style="padding: 2% 2% 0% 0%"
      >
        O Budismo Kadampa é uma tradição especial do Budismo Mahayana fundada
        por Atisha (982 – 1054), um mestre budista indiano, responsável em
        grande parte pela reintrodução do budismo no Tibete no século XI. “Ka”
        refere-se a todos os ensinamentos de Sutra e de Tantra transmitidos por
        Buda, e “dam” refere-se às instruções especiais de Atisha conhecidas
        como “Etapas do Caminho”, ou Lamrim, em tibetano. A Nova Tradição
        Kadampa – União Budista Kadampa Internacional (NTK – UBKI) é uma
        associação internacional de Centros de estudos e meditação do budismo
        mahayana, que segue a tradição budista Kadampa fundada pelo Venerável
        Geshe Kelsang Gyatso. A NTK é uma tradição budista legal e inteiramente
        independente – registrada de acordo com a lei inglesa – e não tem
        afiliações políticas. O seu propósito é preservar e promover a essência
        dos ensinamentos de Buda, de uma forma que seja adequada ao estilo de
        vida do mundo moderno.
      </div>
      <div class="text-h6 text-center q-mb-xl">OS PROFESSORES</div>
      <q-scroll-area
        class="q-mb-md"
        :style="$q.platform.is.mobile ? 'height: 600px' : 'height: 75vh'"
      >
        <div class="row no-wrap">
          <q-card
            class="col-auto q-mx-md q-pa-md"
            v-for="prof in professores"
            :key="prof._id"
            :style="$q.platform.is.mobile ? 'width: 75vw' : 'width: 250px'"
          >
            <q-img
              :src="require(`../assets/${prof._img}`)"
              ratio="1"
              class=""
              style="border-radius: 100%"
            />
            <q-card-section>
              <div class="text-h5 text-bold q-mb-sm">
                {{ prof.name }}
              </div>
              <div class="text-subtitle2">
                {{ prof.description }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </q-scroll-area>
    </div>
    <q-img
      id="gesheTag"
      src="../assets/banners/header4.png"
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
        O fundador da Nova Tradição Kadampa – União Budista Kadampa
        Internacional. Venerável Geshe Kelsang Gyatso Rinpoche é um renomado
        mestre de meditação e detentor da Linhagem Oral Ganden do Mahamudra. é
        também um dos pioneiros na introdução do Budismo moderno na sociedade
        contemporânea. Deu milhares de ensinamentos, escreveu mais de vinte
        livros sobre Budismo e Meditação, criou mais de 1.200 centros de
        meditação em todo o mundo, treinou centenas de qualificados professores
        de meditação e desenvolveu programas práticos de estudo e meditação
        concebidos para o mundo moderno. Geshe-la – como é carinhosamente
        chamado por seus discípulos – é um erudito altamente considerado e um
        praticante do Budismo Kadampa plenamente realizado. Seus ensinamentos e
        conselhos transmitem perfeitamente para o nosso mundo moderno a antiga
        sabedoria do Budismo.
      </div>
    </div>
    <q-img
      id="findTag"
      src="../assets/banners/header5.png"
      fit="cover"
      :ratio="$q.platform.is.mobile ? 16 / 9 : 16 / 3"
    />
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
        <div class="text-subtitle2">contato@meditaremfortaleza.org.br</div>
        <div class="text-subtitle2 q-mb-xl">85 99999 9999</div>
        <div class="text-subtitle2">ACOMPANHE NOSSA PROGRAMAÇÃO!</div>
        <q-btn
          dense
          flat
          round
          icon="bi-instagram"
          target="_blank"
          href="https://www.instagram.com/meditaremfortaleza/"
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

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>

<script lang="ts">
import { api } from 'src/boot/axios';
import { Activity, ScheduleEvent, Teacher } from 'src/components/models';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {
      slide: ref('1'),
    };
  },
  data: () => {
    return {
      destaques: [] as ScheduleEvent[],
      eventos: [] as ScheduleEvent[],

      professores: [] as Teacher[],
      atividades: [] as Activity[],

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
          _img: 'https://api-cbkb.vercel.app/assets/act1.png',
        },
        {
          id: 2,
          nome: 'Palestras e Cursos',
          description:
            'Prática é ideal para relaxarmos e aprendermos a controlar a mente, independentemente de ' +
            'origem, fé ou prática religiosa. Não é preciso ter experiência prévia, nem ser budista. ' +
            'Basta nos sentarmos confortavelmente e acompanhar as instruções do livro Novo Manual de Meditação. ' +
            'No final, somos convidados a aplicar os aspectos dos ensinamentos que mais forem úteis para o nosso próprio bem-estar mental.',
          _img: 'https://api-cbkb.vercel.app/assets/act2.png',
        },
        {
          id: 3,
          nome: 'Preces Cantadas',
          description:
            'As preces cantadas, ou pujas, são métodos poderosos para recebermos bênçãos, ' +
            'purificarmos nosso carma negativo e acumularmos virtude. ' +
            'Nesses encontros fazemos oferendas e seguimos uma Sadhana (livreto em português), com as preces, ' +
            'para gerarmos estados mentais positivos e virtuosos.',
          _img: 'https://api-cbkb.vercel.app/assets/act3.png',
        },
      ],
    };
  },
  async mounted() {
    this.$q.dark.set(false);

    await api
      .get('/programacao')
      .then((res) => {
        return res.data;
      })
      .then((json: ScheduleEvent[]) => {
        this.eventos = json
          .filter((se) => Date.now() <= new Date(se.date).valueOf())
          .sort((a: ScheduleEvent, b: ScheduleEvent) => {
            return new Date(a.date).valueOf() - new Date(b.date).valueOf();
          });

        if (this.eventos.length > 0) {
          this.destaques = this.eventos.slice(0, 5).sort((a, b) => {
            if (a.destaque && !b.destaque) return -1;
            if (b.destaque && !a.destaque) return 1;
            return 0;
          });
        }

        if (this.destaques.length > 0)
          this.slide = this.destaques[0].atividade.name
            .toLowerCase()
            .replace(' ', '_');
      })
      .catch((e) => {
        console.log(e);

        this.$q.notify({
          type: 'negative',
          message:
            'O Servidor não concluiu a requisição. Tente novamente mais tarde.',
        });
      });

    await api
      .get('/professor')
      .then((res) => {
        return res.data;
      })
      .then((json: Teacher[]) => {
        this.professores = json;
      })
      .catch((e) => {
        console.log(e);

        this.$q.notify({
          type: 'negative',
          message:
            'O Servidor não concluiu a requisição. Tente novamente mais tarde.',
        });
      });

    await api
      .get('/atividade')
      .then((res) => {
        return res.data;
      })
      .then((json: Activity[]) => {
        this.atividades = json;
      })
      .catch((e) => {
        console.log(e);

        this.$q.notify({
          type: 'negative',
          message:
            'O Servidor não concluiu a requisição. Tente novamente mais tarde.',
        });
      });
  },
  methods: {
    getWeekday(day: number) {
      return isNaN(day)
        ? null
        : [
            'Domingo',
            'Segunda-Feira',
            'Terça-Feira',
            'Quarta-Feira',
            'Quinta-Feira',
            'Sexta-Feira',
            'Sábado',
          ][day];
    },
  },
});
</script>
