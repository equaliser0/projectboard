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
  const renderer = new marked.Renderer();

  // INSERTS target="_blank" INTO HREF TAGS
  renderer.link = (href, title, text) => {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
  }

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
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
