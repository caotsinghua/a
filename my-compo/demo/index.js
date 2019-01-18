import Vue from 'vue';
import App from './App';

import Row from 'components/Row';
import Col from 'components/Col';

Vue.use(Row);
Vue.use(Col);

new Vue({
    render: h => h(App),
}).$mount('#app');
