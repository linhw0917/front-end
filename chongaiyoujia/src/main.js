import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import router from './router'
import store from './stores'
import crypto from 'crypto'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(ViewUI);
Vue.use(Vuex);


/* eslint-disable no-new */
new Vue({
  router,
  store,
	render: h => h(App)
}).$mount('#app')
