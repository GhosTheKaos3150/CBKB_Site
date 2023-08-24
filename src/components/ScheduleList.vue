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
          v-if="schd.imgSpc"
          fit="cover"
          :ratio="$q.platform.is.mobile ? 16 / 9 : 1"
          :width="$q.platform.is.mobile ? '100%' : '20%'"
          class="col-5"
          :src="`http://meditaremfortaleza.org.br/assets/${schd.imgSpc}`"
        />
        <q-img
          v-else
          fit="cover"
          :ratio="$q.platform.is.mobile ? 16 / 9 : 1"
          :width="$q.platform.is.mobile ? '100%' : '20%'"
          class="col-5"
          :src="`http://meditaremfortaleza.org.br/assets/${schd!.atividade!._img}`"
        />
        <q-card-section>
          <div class="text-h6">
            {{ schd.optionalTitle ? schd.optionalTitle : schd.atividade.name }}
          </div>
          <div class="text-italic">Com {{ schd.professor.name }}</div>
          <div class="text-italic">
            Dia
            {{ new Date(schd.date).toLocaleString('pt-BR').slice(0, 10) }} ás
            {{ new Date(schd.date).toLocaleString('pt-BR').slice(12, 17) }}
          </div>
          <q-separator class="q-my-md" />
          <div
            style="
              white-space: pre-line;
              overflow: hidden;
              text-overflow: ellipsis;
              max-height: 100px;
            "
            class="text-p"
          >
            {{
              schd.descricaoSpc
                ? schd.descricaoSpc.slice(0, 200) + '...'
                : schd.atividade.description.slice(0, 200) + '...'
            }}
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
              Valor da Atividade: R$
              {{ schd.customPrice ? schd.customPrice : schd.atividade.valor }}
            </div>
          </div>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
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
  <div class="text-h5 q-ma-sm">PROGRAMAÇÕES ANTIGAS</div>
  <div v-if="oldSchedules?.length === 0" class="text-italic q-ma-sm">
    Não Há Programações Antigas
  </div>
  <div class="d-flex row" v-else>
    <q-card
      v-for="schd in oldSchedules"
      :key="schd._id"
      class="my-card q-mb-md q-mx-sm"
      :class="$q.platform.is.mobile ? 'col-grow' : ''"
      style="width: 49%"
      :flat="$q.dark.isActive"
    >
      <q-card-section :horizontal="!$q.platform.is.mobile">
        <q-img
          v-if="schd.imgSpc"
          fit="cover"
          :ratio="$q.platform.is.mobile ? 16 / 9 : 1"
          :width="$q.platform.is.mobile ? '100%' : '20%'"
          class="col-5"
          :src="`http://meditaremfortaleza.org.br/assets/${schd.imgSpc}`"
        />
        <q-img
          v-else
          fit="cover"
          :ratio="$q.platform.is.mobile ? 16 / 9 : 1"
          :width="$q.platform.is.mobile ? '100%' : '20%'"
          class="col-5"
          :src="`http://meditaremfortaleza.org.br/assets/${schd!.atividade!._img}`"
        />
        <q-card-section>
          <div class="text-h6">
            {{ schd.optionalTitle ? schd.optionalTitle : schd.atividade.name }}
          </div>
          <div class="text-italic">Com {{ schd.professor.name }}</div>
          <div class="text-italic">
            Dia
            {{ new Date(schd.date).toLocaleString('pt-BR').slice(0, 10) }} ás
            {{ new Date(schd.date).toLocaleString('pt-BR').slice(12, 17) }}
          </div>
          <q-separator class="q-my-md" />
          <div
            style="
              white-space: pre-line;
              overflow: hidden;
              text-overflow: ellipsis;
              max-height: 100px;
            "
            class="text-p"
          >
            {{
              schd.descricaoSpc
                ? schd.descricaoSpc.slice(0, 200) + '...'
                : schd.atividade.description.slice(0, 200) + '...'
            }}
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
          <div v-else-if="schd.atividade.isVoluntaryPayment" class="q-my-sm">
            <div class="text-p text-italic">Contribuição Voluntária</div>
          </div>
          <div v-else class="q-my-sm">
            <div class="text-p text-italic">
              Valor da Atividade: R$
              {{ schd.customPrice ? schd.customPrice : schd.atividade.valor }}
            </div>
          </div>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
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
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-fab
      color="primary"
      icon="add"
      :direction="$q.platform.is.mobile ? 'up' : 'left'"
      :vertical-actions-align="$q.platform.is.mobile ? 'right' : 'center'"
    >
      <q-fab-action
        color="primary"
        icon="add"
        label="Adicionar Programa"
        @click="$emit('selectedSchd', {} as ScheduleEvent)"
      />
      <q-fab-action
        color="primary"
        @click="
          oldSchedules!.length > 0
            ? (dialogDeleteOld = true)
            : (dialogNoObject = true)
        "
        icon="bi-x"
        label="Deletar Antigos"
      />
    </q-fab>
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

  <q-dialog v-model="dialogDeleteOld">
    <q-card>
      <q-card-section>
        <div class="text-h4">Atenção!</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="text-p">
          Você está prestes a deletar todas as Atividades Antigas do Banco de
          Dados!
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
        <q-btn flat label="Sim" color="primary" @click="deleteOld()" />
        <q-btn
          flat
          label="Não"
          color="secondary"
          @click="dialogDeleteOld = false"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-model="dialogNoObject">
    <q-card>
      <q-card-section>
        <div class="text-p">Não há atividades antigas para deletar.</div>
      </q-card-section>
      <q-card-actions>
        <q-space />
        <q-btn
          flat
          label="OK"
          color="primary"
          @click="dialogNoObject = false"
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
    oldSchedules: {
      type: Object as PropType<ScheduleEvent[]>,
    },
    schdSelected: {
      type: Object as PropType<ScheduleEvent>,
    },
  },
  data: () => {
    return {
      dialogDelete: false,
      dialogDeleteOld: false,
      dialogNoObject: false,
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

    async deleteOld() {
      const headers = {
        Authorization: 'Bearer ' + localStorage.token,
      };
      this.$q.loading.show();

      await api
        .delete('/programacao/delete-old', { headers: headers })
        .then((res) => {
          console.log(res);
          this.$router.go(0);
        });
      this.$q.loading.hide();
    },
  },
});
</script>
