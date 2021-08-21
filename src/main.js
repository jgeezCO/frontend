import Vue from 'vue'
import PerfectScrollbar from 'vue2-perfect-scrollbar';
import UUID from "vue-uuid";
import App from './App.vue'
import router from "./router";
import "animate.css";
import VueCoreVideoPlayer from 'vue-core-video-player';

Vue.config.productionTip = false

Vue.use(PerfectScrollbar);
Vue.use(UUID);
Vue.use(VueCoreVideoPlayer);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

