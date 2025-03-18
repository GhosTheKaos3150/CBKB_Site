import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  {
    path: '/login',
    component: () => import('layouts/AdminLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoginPage.vue') }],
  },

  {
    path: '/donation',
    component: () => import('layouts/AdminLayout.vue'),
    children: [{ path: '', component: () => import('pages/DonationPage.vue') }],
  },

  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminPage.vue') },
      {
        path: 'programacao',
        component: () => import('pages/AdminSchedulePage.vue'),
      },
      {
        path: 'atividades',
        component: () => import('pages/AdminActivitiesPage.vue'),
      },
      {
        path: 'professores',
        component: () => import('pages/AdminTeachersPage.vue'),
      },
      {
        path: 'user',
        component: () => import('pages/ProfilePage.vue'),
      },
      {
        path: 'apearence',
        component: () => import('pages/ApearencePage.vue'),
      },
    ],
  },

  {
    path: '/programacao/:id',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ScheduleViewPage.vue') },
    ],
  },

  {
    path: '/divulgacao/programa-fundamental',
    component: () => import('layouts/AdminLayout.vue'),
    children: [{ path: '', component: () => import('pages/DivulgacaoPF.vue') }],
  },

  {
    path: '/divulgacao/retiro',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DivulgacaoRetiro.vue') },
    ],
  },

  {
    path: '/divulgacao/iniciacao',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DivulgacaoIniciacao.vue') },
    ],
  },

  // {
  //   path: '/divulgacao/voluntariado',
  //   component: () => import('layouts/AdminLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/DivulgacaoVoluntario.vue') },
  //   ],
  // },

  {
    path: '/divulgacao/programacao',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ProgramacaoResumida.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
