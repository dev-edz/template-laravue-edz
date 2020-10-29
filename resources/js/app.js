import Vue from 'vue';
import store from './plugins/store';
import router from './plugins/router';
import vuetify from './plugins/vuetify'
import App from './App.vue';
import Axios from 'axios';


Vue.prototype.$http = Axios;
window.vue = Vue;
Vue.config.productionTip = false;

// Monitor
// Vue.component('transactions-component', require('./components/monitoring/Transactions.vue').default);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
