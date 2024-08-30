import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '../components/AboutPage.vue';
import HomePage from '@/components/HomePage.vue';
import ProjectPage from '@/components/ProjectPage.vue';
import BiDashboards from '@/components/BiDashboards.vue';
import ContactMe from '@/components/ContactMe.vue';

const routes = [
  { path: '/', component: HomePage,},
  {path: '/sobre', component: AboutPage},
  {path: '/projetos', component: ProjectPage},
  {path: '/dashboards', component: BiDashboards},
  {path: '/contato', component: ContactMe}  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
