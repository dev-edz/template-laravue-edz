import Vue from 'vue';
import store from './plugins/store';
import router from './plugins/router';
import vuetify from './plugins/vuetify'
import App from './App.vue';
import Axios from 'axios';

import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo ({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    forceTLS: false,
    wsHost: window.location.hostname,
    wsPort: 6001
});

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
