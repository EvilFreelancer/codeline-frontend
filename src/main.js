import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import DateFns from 'date-fns'
import VueResource from 'vue-resource'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'

import Cities from "./components/Cities.vue"
import City from "./components/City.vue"
import Search from "./components/Search.vue"

export const serverBus = new Vue();

Vue
    .use(VueRouter)
    .use(BootstrapVue)
    .use(VueResource);

Vue.prototype.API = '';
Vue.prototype.Query = null;
Vue.prototype.DateFns = DateFns;
Vue.config.productionTip = false;

const routes = [
    {path: '/', component: Cities},
    {path: '/weather/:woeid', component: City, props: true},
    {path: '/search/:keyword', component: Search, props: true},
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

const app = new Vue({
    render: h => h(App), router
}).$mount('#app');
