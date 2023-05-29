<template>
  <section class="main-container">
    <AppHeader />
    <RouterView />
    <UserMsg />
    <appFooter />
  </section>
</template>

<script>


import { userService } from './services/user.service'
import { store } from './store/store'
import AppFooter from './cmps/AppFooter.vue'
import AppHeader from './cmps/AppHeader.vue'
import UserMsg from './cmps/UserMsg.vue'
import { socketService } from './services/socket.service'
import { showSuccessMsg } from './services/event-bus.service'


export default {


  data() {
    return {
      isActiveOrders: false,
      isActiveDashboard: false,
    }
  },
  created() {
    console.log('Vue App created')
    const user = userService.getLoggedinUser()
    if (user) store.commit({ type: 'setLoggedinUser', user })



    // socketService.on('user-is-watching', (msg) => {
    //   showSuccessMsg(msg)
    // })
    socketService.on('user-ordered-gig', (msg) => {
      showSuccessMsg(msg)
      this.isActiveDashboard = true
    })
    socketService.on('order-approved', (msg) => {
      showSuccessMsg(msg)
      this.isActiveOrders = true
    })
    socketService.on('order-status-update', (msg) => {
      showSuccessMsg(msg)
      this.isActiveOrders = true
    })

  },


  methods: {
    closeOrderNotification() {
      this.isActiveOrders = false
    },
    closeDashboardNotification() {
      this.isActiveDashboard = false
    }
  },
  components: {
    AppHeader,
    AppFooter,
    UserMsg
  },
}
</script>

