import { createApp } from 'vue'
import App from './app/App.vue'
import './app/assets/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
