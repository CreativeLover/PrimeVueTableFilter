import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faRightLong)

// createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
createApp(App)
  .use(store)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
