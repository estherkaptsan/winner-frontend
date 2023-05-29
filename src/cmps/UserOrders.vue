<template>
    <div class=" main-container full">
        <!-- <div class=""> -->
            <section class="tabs-orders">
                <!--  v-if="selected === 'My Orders' && gigs" -->
                <div v-if="orders" v-for="(order, i) in orders" class="card-orders" >
                    <!-- {{ order }} -->
                    <div class="order">
                        <div class="user-gig">
                            <img :src="order.gig.img" />
                        </div>
                        <p> <span :class="statusStyle(order)">{{ order.status }}</span></p>
                        <p><span>{{ order.gig.name }} </span></p>
                        <p><span>${{ order.gig.price }}</span></p>
                        <p><span>{{ order.seller.fullname }} </span></p>
                    </div>
                </div>
            </section>
        </div>
    <!-- </div> -->
</template>

<script>
import { svgServive } from '../services/svg.service.js'

export default {
    name: 'user-order',
    data() {
        return {
            status: 'Progress'
        }
    },
    computed: {
        gigs() {
            return this.$store.getters.gigs
        },
        loggedInUser() {
            return this.$store.getters.loggedinUser
        },
        orders() {
            return this.$store.getters.buyerOrders
        },
       
    },
    methods: {
        getSvg(iconName) {
            return (this.icon = svgServive.getGigSvg(iconName))
        },
        statusStyle(order) {
            return {
                 'gray': order.status === 'Pending',
                 'progress': order.status === 'Progress',
                 'completed': order.status === 'Completed',
                 'rejected': order.status === 'Rejected'
            }
        }
    },
    created() {
        this.$store.dispatch({ type: 'loadOrders' })
        this.buyerOrders = this.orders

        socketService.on('order-approved', (msg) => {
            this.$store.dispatch({ type: 'loadOrders' })
        })
        socketService.on('order-status-update', (msg) => {
            this.$store.dispatch({ type: 'loadOrders' })
        })
        window.scroll(0, 0)
    },
    components: {

    }
}
</script>
