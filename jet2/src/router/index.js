import Vue from 'vue';
import Router from 'vue-router';
import MapComponent from '@/components/MapComponent/MapComponent';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'MapComponent',
    component: MapComponent
  }]
});
