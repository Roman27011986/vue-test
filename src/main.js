import { createApp } from 'vue';
import Vue from 'vue'
import App from './App.vue';
import './assets/scss/index.scss';
import VueRouter from 'vue-router';
import router from './router'

const app = createApp(App)
app.use(router)
    .mount('#app');
// Vue.config.productionTip = false
// Vue.use(VueRouter)

// new Vue({
//     render: h => h(App),
//     router
// }).$mount('#app')
// import router from './router'
// import store from './store'

// createApp(App).mount('#app')
