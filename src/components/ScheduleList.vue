<template>
  <div class="d-flex row">
    <q-card
      v-for="schd in schedules"
      :key="schd._id"
      class="my-card q-mb-md q-mx-sm"
      :class="$q.platform.is.mobile ? 'col-grow' : ''"
      style="width: 49%"
      :flat="$q.dark.isActive"
    >
      <q-card-section :horizontal="!$q.platform.is.mobile">
        <q-img
          fit="cover"
          :ratio="$q.platform.is.mobile ? 16 / 9 : 1"
          :width="$q.platform.is.mobile ? '100%' : '20%'"
          class="col-5"
          :src="`https://api-cbkb.vercel.app/assets/${schd.atividade._img}`"
        />
        <q-card-section>
          <div class="text-h6">{{ schd.atividade.name }}</div>
          <div class="text-italic">Com {{ schd.professor.name }}</div>
          <div class="text-italic">
            Dia
            {{ new Date(schd.date).toLocaleString('pt-BR').slice(0, 10) }} ás
            {{ new Date(schd.date).toLocaleString('pt-BR').slice(12, 17) }}
          </div>
          <q-separator class="q-my-md" />
          <div class="text-p">
            {{ schd.atividade.description }}
          </div>
          <q-separator class="q-my-md" />
          <div class="text-p text-bold q-mb-sm">Outras Informações:</div>
          <div v-if="schd.atividade.obsv" class="text-p">
            Observação:
            <span class="text-italic">{{ schd.atividade.obsv }}</span>
          </div>
          <div v-if="schd.atividade.isGratuita" class="q-my-sm">
            <div class="text-p text-italic">Atividade Gratuita</div>
          </div>
          <div v-else class="q-my-sm">
            <div class="text-p text-italic">
              Valor da Atividade: R$ {{ schd.atividade.valor }}
            </div>
          </div>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-space v-if="!$q.platform.is.mobile" />
        <q-btn
          flat
          round
          icon="visibility"
          color="primary"
          @click="$router.push(`/programacao/${schd._id}`)"
        />
        <q-btn
          flat
          round
          icon="edit"
          color="primary"
          @click="$emit('selectedSchd', schd)"
        />
        <q-btn
          flat
          round
          icon="delete"
          color="primary"
          @click="
            dialogDelete = true;
            deleteId = schd._id!;
          "
        />
      </q-card-actions>
    </q-card>
  </div>
  <q-btn
    v-if="!$q.platform.is.mobile"
    class="q-mb-sm'"
    align="center"
    size="lg"
    color="primary"
    icon="add"
    style="width: 100%"
    @click="$emit('selectedSchd', {} as ScheduleEvent)"
  />
  <q-page-sticky v-else position="bottom-right" :offset="[18, 18]">
    <q-btn
      fab
      icon="add"
      color="primary"
      @click="$emit('selectedSchd', {} as ScheduleEvent)"
    />
  </q-page-sticky>

  <q-dialog v-model="dialogDelete">
    <q-card>
      <q-card-section>
        <div class="text-h4">Atenção!</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="text-p">
          Você está prestes a deletar esta Atividade do banco de dados!
        </div>
        <div class="text-p">
          Após confirmar, essa ação não poderá ser revertida.
        </div>
        <br />
        <br />
        <div class="text-p">Tem certeza que deseja continuar?</div>
      </q-card-section>
      <q-card-actions>
        <q-space />
        <q-btn flat label="Sim" color="primary" @click="deleteActivity()" />
        <q-btn
          flat
          label="Não"
          color="secondary"
          @click="dialogDelete = false"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { ScheduleEvent } from './models';
import { api } from 'src/boot/axios';
export default defineComponent({
  name: 'ScheduleList',
  emits: ['selectedSchd'],
  props: {
    schedules: {
      type: Object as PropType<ScheduleEvent[]>,
    },
    schdSelected: {
      type: Object as PropType<ScheduleEvent>,
    },
  },
  data: () => {
    return {
      dialogDelete: false,
      deleteId: '',
    };
  },
  methods: {
    async deleteActivity() {
      const headers = {
        Authorization: 'Bearer ' + localStorage.token,
      };
      this.$q.loading.show();

      await api
        .delete(`/programacao/${this.deleteId}`, { headers: headers })
        .then((res) => {
          console.log(res);
          this.$router.go(0);
        });
      this.$q.loading.hide();
    },
  },
});
</script>
