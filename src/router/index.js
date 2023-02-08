import Router from 'vue-router';
import Register from './Register.svelte';
import Sas from './Sas.svelte';
import locations from './locations.svelte';
import { SvelteElement } from 'svelte/internal';

SvelteElement.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register,
    },
    {
      path: '/Sas.svelte',
      name: 'Sas.svelte',
      component: Sas,
      
    },
    {
        path: '/locations.svelte',
        name: 'locations',
        component: locations,
      }
  ],
  mode: 'history',
});