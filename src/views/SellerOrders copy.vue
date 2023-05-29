<template>
    <h2 class="headline">{{ loggedUser.fullname }}'s - Dashboard profile</h2>
    <section class="dashboard flex">
        <section class="profile-progress">
            <div class="profile flex">
                <div v-if="loggedUser" class="img-container">
                    <img :src="loggedUser.imgUrl">
                </div>
            
            </div>
            <div class="progress">
                <article class="progress-item">
                    <div class="progress-txt flex">
                        <p class="bold">Response Rate</p>
                        <p v-if="(orders.length > 0)">{{ responseRate }}%</p>
                    </div>
                    <div class="el-progress el-progress--line" role="progressbar" aria-valuenow="95" aria-valuemin="0"
                        aria-valuemax="100">
                        <div class="el-progress-bar">
                            <div class="el-progress-bar__outer" style="height: 6px;">
                                <div class="el-progress-bar__inner"
                                    style="width: 95%; animation-duration: 3s; background-color: rgb(29, 191, 115);">
                                    <!--v-if-->
                                </div>
                            </div>
                        </div>
                        <div class="el-progress__text" style="font-size: 14.4px;"><span>95%</span></div>
                    </div>
                    <el-progress v-if="(orders.length > 0)" :percentage="responseRate" color="#1dbf73" />
                </article>

                <article class="progress-item">
                    <div class="progress-txt flex">
                        <p class="bold">Orders Completed</p>
                        <p v-if="(orders.length > 0)">{{ completedOrderPercent }}%</p>
                    </div>
                    <div class="el-progress el-progress--line" role="progressbar" aria-valuenow="95" aria-valuemin="0"
                        aria-valuemax="100">
                        <div class="el-progress-bar">
                            <div class="el-progress-bar__outer" style="height: 6px;">
                                <div class="el-progress-bar__inner"
                                    style="width: 95%; animation-duration: 3s; background-color: rgb(29, 191, 115);">
                                    <!--v-if-->
                                </div>
                            </div>
                        </div>
                        <div class="el-progress__text" style="font-size: 14.4px;"><span>95%</span></div>
                    </div>
                    <el-progress v-if="(orders.length > 0)" :percentage="completedOrderPercent" color="#1dbf73" />
                </article>

                <article class="progress-item">
                    <div class="progress-txt flex">
                        <p class="bold">Delivered on Time</p>
                        <p v-if="(orders.length > 0)">{{ deliveredOnTime }}%</p>
                    </div>
                    <div class="el-progress el-progress--line" role="progressbar" aria-valuenow="95" aria-valuemin="0"
                        aria-valuemax="100">
                        <div class="el-progress-bar">
                            <div class="el-progress-bar__outer" style="height: 6px;">
                                <div class="el-progress-bar__inner"
                                    style="width: 95%; animation-duration: 3s; background-color: rgb(29, 191, 115);">
                                    <!--v-if-->
                                </div>
                            </div>
                        </div>
                        <div class="el-progress__text" style="font-size: 14.4px;"><span>95%</span></div>
                    </div>
                    <el-progress v-if="(orders.length > 0)" :percentage="deliveredOnTime" color="#1dbf73" />
                </article>

            </div>
        </section>
        <section class="seller-orders flex">
            <div class="income-order-dashboard flex">
                <div class="dashboard-item">
                    <span class="light">Annual Revenue</span>
                    <h3 v-if="(orders.length > 0)">${{ annualIncome }}</h3>
                </div>
                <div class="dashboard-item">
                    <span class="light">Monthly Revenue</span>
                    <h3 v-if="(orders.length > 0)">${{ monthIncome }}</h3>
                </div>
                <div class="dashboard-item ">
                    <span class="light Completed">Completed Orders </span>
                    <h3 class="Completed" v-if="(orders.length > 0)">{{ annualOrdersComplete }}</h3>
                </div>
                <div class="dashboard-item">
                    <span class="light Progres">In-Progres Orders</span>
                    <h3 class="Progres" v-if="(orders.length > 0)">{{ InprogresOrders }}</h3>
                </div>
                <div class="dashboard-item">
                    <span class="light">Pending Orders </span>
                    <h3 v-if="(orders.length > 0)">{{ pendingOrders }}</h3>
                </div>
            </div>
            <div class="order-table">
                <div class="table-head flex">
                    <div class="buyer-col">
                        <h4>Buyer</h4>
                    </div>
                    <div class="gig-col">
                        <h4>Gig</h4>
                    </div>
                    <div class="due-on-col">
                        <h4>Order Date</h4>
                    </div>
                    <div class="total-col">
                        <h4>Total</h4>
                    </div>
                    <div class="status-col">
                        <h4>Status</h4>
                    </div>
                </div>
                <div v-for="order in orders" :key="order._id">
                    <dashboard @change="change" :order="order" />
                </div>
            </div>

            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Total hours</span>
                        <span class="h3 font-bold mb-0">1.400</span>
                    </div>
                    <div class="col-auto">
                        <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                            <i class="bi bi-clock-history"></i>
                        </div>
                    </div>
                </div>
                <div class="mt-2 mb-0 text-sm">
                    <span class="badge badge-pill bg-soft-danger text-danger me-2">
                        <i class="bi bi-arrow-down me-1"></i>-5%
                    </span>
                    <span class="text-nowrap text-xs text-muted">Since last month</span>
                </div>
            </div>

        </section>
    </section>
</template>

<script>
import { socketService } from '../services/socket.service'

import dashboard from '../cmps/Dashboard.vue'
export default {
    name: 'SellerOrders',
    components: {
        dashboard,
    },
    data() {
        return {
            selectedOrder: null,
            deliveredOnTime: 95,
            responseRate: 98,
            loggedUser: null,

        }
    },
    created() {
        this.loadOrders()
        this.loggedUser = this.$store.getters.loggedinUser
        window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    methods: {
        loadOrders() {
            this.$store.dispatch({ type: 'loadOrders' })
        },
        selectOrder(status, order) {
            this.selectedOrder = { ...order }
            this.selectedOrder.status = status
            console.log('this.selectedOrder', this.selectedOrder);
        },

        change(status, order) {
            this.selectOrder(status, order)
            this.$store.dispatch({ type: 'saveOrder', order: this.selectedOrder })
            socketService.emit('order-change-status', this.selectedOrder.buyer)

        },
    },
    computed: {
        orders() {
            return this.$store.getters.sellerOrders
        },

        annualIncome() {
            var income = 0
            this.orders.forEach(order => {
                if (order.status === "Completed") { income += order.gig.price }
            })
            return income
        },
        monthIncome() {
            var income = 0
            this.orders.forEach(order => {
                if (order.status === "Completed") { income += order.gig.price }
            })
            return income
        },
        pendingOrders() {
            var pending = 0
            this.orders.forEach(order => {
                if (order.status === "Pending") { pending++ }
            })
            return pending
        },
        annualOrdersComplete() {
            var complete = 0
            this.orders.forEach(order => {
                if (order.status === "Completed") { complete++ }
            })
            return complete
        },
        monthOrdersComplete() {
            var complete = 0
            this.orders.forEach(order => {
                if (order.status === "Complete") { complete++ }
            })
            return complete
        },
        completedOrderPercent() {
            return Math.round(((this.annualOrdersComplete / this.orders.length) * 100))
        },

        InprogresOrders() {
            var Inprogres = 0
            this.orders.forEach(order => {
                if (order.status === "Progress") { Inprogres++ }
            })
            return Inprogres
        },

    },
}
</script>
<style></style>
   