import { createApp } from 'vue'
import App from './App.vue'

import UI from "@scode/ui-vue";
import "@scode/ui-vue/components/style.less";

createApp(App).use(UI).mount('#app')
