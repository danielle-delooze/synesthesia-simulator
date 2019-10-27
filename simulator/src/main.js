import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueCodemirror from 'vue-codemirror'
import locale from 'element-ui/lib/locale/lang/en'

import 'element-ui/lib/theme-chalk/index.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/vue/vue.js'

Vue.config.productionTip = false
Vue.use(ElementUI, {locale})
Vue.use(VueCodemirror, {
  options: {
    mode: 'javascript',
    lineNumbers: true
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
