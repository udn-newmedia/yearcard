// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
// import * as $ from 'jquery'
// import 'fullpage.js'

Vue.config.productionTip = false

Vue.prototype.$eventHub = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  template: '<App/>',
  components: { App }
})

// $(document).ready(function () {
//   $('#fullpage').fullpage({
//     // Navigation
//     lockAnchors: false,
//     anchors: [''],
//     navigation: false,
//     navigationPosition: 'right',
//     showActiveTooltip: false,
//     slidesNavigation: false,
//     slidesNavPosition: 'bottom',
//     loopHorizontal: false
//   })
// })
