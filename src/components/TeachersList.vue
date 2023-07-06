<template>
  <div class="d-flex row">
    <q-card
      v-for="prof in profes"
      :key="prof._id"
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
          :src="`http://0.0.0.0:5000/assets/${prof._img}`"
        />
        <q-card-section style="width: 100%">
          <div class="text-h6">{{ prof.name }}</div>
          <q-separator class="q-my-md" />
          <div class="text-p">{{ prof.description }}</div>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-space v-if="!$q.platform.is.mobile" />
        <q-btn
          flat
          round
          icon="edit"
          color="primary"
          @click="$emit('selectedProf', prof)"
        />
        <q-btn
          flat
          round
          icon="delete"
          color="primary"
          @click="
            dialogDelete = true;
            deleteId = prof._id!;
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
    @click="$emit('selectedProf', {} as Teacher)"
  />
  <q-page-sticky v-else position="bottom-right" :offset="[18, 18]">
    <q-btn
      fab
      icon="add"
      color="primary"
      @click="$emit('selectedProf', {} as Teacher)"
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
          Você está prestes a deletar este professor do banco de dados!
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
        <q-btn flat label="Sim" color="primary" @click="deleteTeacher()" />
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
import { Teacher } from './models';
import { api } from 'src/boot/axios';

export default defineComponent({
  name: 'TeachersList',
  emits: ['selectedProf'],
  props: {
    profes: {
      type: Object as PropType<Teacher[]>,
    },
    profSelected: {
      type: Object as PropType<Teacher>,
    },
  },
  data: () => {
    return {
      dialogDelete: false,
      deleteId: '',
    };
  },
  methods: {
    async deleteTeacher() {
      const headers = {
        Authorization: 'Bearer ' + localStorage.token,
      };
      this.$q.loading.show();

      await api
        .delete(`/professor/${this.deleteId}`, { headers: headers })
        .then((res) => {
          console.log(res);
          this.$router.go(0);
        });
      this.$q.loading.hide();
    },
  },
});
</script>
