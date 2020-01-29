import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.performance = true
Vue.use(CoreuiVue)

Vue.use(VueSweetalert2);

new Vue({
  el: '#app',
  router,
  icons,
  template: '<App/>',
  components: {
    App
  },
})
