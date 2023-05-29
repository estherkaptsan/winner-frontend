import { createApp } from 'vue'
import { useRoute } from 'vue-router';
import { router } from './router.js'
import { store } from './store/store.js'
// import FloatingVue from 'floating-vue'
import {
    // Directives
    VTooltip,
    VClosePopper,
    // Components
    Dropdown,
    Tooltip,
    Menu
} from 'floating-vue'
import 'floating-vue/dist/style.css'


import './assets/styles/main.scss'
import './assets/styles/setup/_typography.scss'
import App from './App.vue'

const route = useRoute();

const app = createApp(App)
app.use(router)
app.use(store)
// app.use(FloatingVue)

app.directive('tooltip', VTooltip)
app.directive('close-popper', VClosePopper)
app.component('VDropdown', Dropdown)
app.component('VTooltip', Tooltip)
app.component('VMenu', Menu)
app.mount('#app')
