import Vue from 'vue'
import App from './App.vue'

// TailwindCSS
import VueTailwind from 'vue-tailwind'
import '@/assets/style/main.css'

// Utils
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'

import VueClipboard from 'vue-clipboard2'
import marked from 'marked'

// Global Prototypes
Vue.prototype.$marked = (text) => {
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  });

  return marked(text);
}

// Injection
Vue.use(VueTailwind)
Vue.use(VueClipboard)
Vue.use(VueToast)

// Config
Vue.config.productionTip = false

// Render
new Vue({
  render: h => h(App),
}).$mount('#app')
