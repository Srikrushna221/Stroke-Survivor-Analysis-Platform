import Vue from 'vue';
import Router from 'vue-router';
import StrokeDashboard from '@/components/StrokeDashboard.vue'; // Ensure the path is correct

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StrokeDashboard',
      component: StrokeDashboard,
    },
    // Add other routes here
  ],
});
