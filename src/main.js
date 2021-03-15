import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/plugins/fontawesome'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import './config/axios'


Vue.use(router)
Vue.use(VueAxios, Axios);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
