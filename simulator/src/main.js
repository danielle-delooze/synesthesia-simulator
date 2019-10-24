import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueCodemirror from 'vue-codemirror'
import locale from 'element-ui/lib/locale/lang/en'

import 'element-ui/lib/theme-chalk/index.css'
import 'codemirror/lib/codemirror.css'

Vue.config.productionTip = false
Vue.use(ElementUI, {locale})
Vue.use(VueCodemirror, {
  options: { 
    mode: 'text/javascript',
    theme: 'base16-dark',
    lineNumbers: true
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
