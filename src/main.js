import Vue from 'vue'
import router  from "./router/router"
import store from './store/store'
// import axios from 'axios'
import axios from './axios.js'
Vue.prototype.$axios = axios


Vue.config.productionTip = false

new Vue({
  router,
  store
}).$mount('#app')


// import Vue from 'vue'
// import App from './App.vue'
// import router from "./router/router"
// // import store from './store/store'

// // 导出一个工厂函数，用于创建新的
// // 应用程序、router 和 store 实例
// export function createApp () {
//   // const router = Router();
//   const app = new Vue({
//     router,
//     // 根实例简单的渲染应用程序组件。
//     render: h => h(App)
//   })
//   return { app }
// }


