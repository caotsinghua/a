import Vue from 'vue';
import App from './App';

import Row from 'components/Row';
Vue.use(Row);

new Vue({
    render: h => h(App),
}).$mount('#app');
