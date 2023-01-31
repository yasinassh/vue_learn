
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import komponent agar bisa dipanggil secara global
import TagsInput from "@/components/TagsInput.vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const app = createApp(App)
app.component('tags-input', TagsInput)
app.use(router)
// app.use(BootstrapVue)
// app.use(IconsPlugin)
app.mount('#app')
