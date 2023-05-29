<template>
    <pre>
               </pre>
    <h2 class="headline">{{ loggedUser.fullname }}'s - Dashboard profile</h2>
    <div class="row g-6 mb-6 flex">

        <div class="col-xl-3 col-sm-6 col-12">
            <div class="card shadow border-0">
                <div class="card-body">
                    <div class="row flex">
                        <div class="col">
                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">Monthly revenue: ${{ monthIncome }} </span>
                           
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-currency-dollar" viewBox="0 0 16 16">
                                    <path
                                        d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="col-xl-3 col-sm-6 col-12">
            <div class="card shadow border-0">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">Pending orders: {{ pendingOrders }} </span>
                       
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-question-lg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z" />
                                </svg>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>

        <div class="col-xl-3 col-sm-6 col-12">
            <div class="card shadow border-0">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <span class="h6 font-semibold text-muted text-sm d-block mb-2 Progress">In progress orders: {{ InprogresOrders }}
                            </span>
                         
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-hourglass-split" viewBox="0 0 16 16">
                                    <path
                                        d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 mb-0 text-sm">
                        <span class="badge badge-pill bg-soft-danger text-danger me-2">
                            <i class="bi bi-arrow-down me-1"></i>
                        </span>

                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-3 col-sm-6 col-12">
            <div class="card shadow border-0">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <span class="h6 font-semibold text-muted text-sm d-block mb-2 rejected">Rejected orders: {{ rejectedOrders }}
                            </span>
                     
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-cart-x-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 mb-0 text-sm">
                        <span class="badge badge-pill bg-soft-danger text-danger me-2">
                            <i class="bi bi-arrow-down me-1"></i>
                        </span>

                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-3 col-sm-6 col-12">
            <div class="card shadow border-0">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <span class="h6 font-semibold text-muted text-sm d-block mb-2 completed">Completed orders: {{ annualOrdersComplete }}
                            </span>
                        
                        </div>

                        <div class="col-auto">
                            <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-cart-check-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 mb-0 text-sm">
                        <span class="badge badge-pill bg-soft-danger text-danger me-2">
                            <i class="bi bi-arrow-down me-1"></i>
                        </span>

                    </div>
                </div>
            </div>
        </div>


    </div>






    <div class="card shadow border-0 mb-7">
        <div class="card-header">
            <h5 class="mb-0">Orders data</h5>
        </div>
        <div class="table-responsive">
            <table class="table table-hover table-nowrap">
                <thead class="thead-light">
                    <tr>

                        <th scope="col">
                            <p class="p-in-th">Buyer</p>
                        </th>
                        <th scope="col">
                            <p class="p-in-th">Gig name</p>
                        </th>
                        <th scope="col">
                            <p class="p-in-th">Order Date</p>
                        </th>
                        <th scope="col">
                            <p class="p-in-th">Total</p>
                        </th>
                        <th scope="col">
                            <p class="p-in-th">Status</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in orders" :key="order._id">
                        <td class="revert">
                            <img :src="order.buyer.imgUrl" class="avatar avatar-sm rounded-circle me-2">
                            <a class="text-heading font-semibold" href="#">
                                {{ order.buyer.fullname }}
                            </a>
                        </td>
                        <td class="revert">
                            <p class="p-in-th"> {{ order.gig.name }}</p>
                        </td>
                        <td>
                            <p class="p-in-th"> {{ new Date(order.createdAt).toLocaleDateString("en-US") }}</p>
                        </td>
                        <td>
                            <p class="p-in-th"> US${{ order.gig.price }}</p>
                        </td>
                        <td>
                            <p class="p-in-th">
                                <dashboard @change="change" :order="order" />
                            </p>
                        </td>
                        <td class="text-end">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
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
        socketService.on('user-ordered-gig', (msg) => {
            //   showSuccessMsg(msg)
            this.loadOrders()
            //   console.log(msg)
        })

    },
    methods: {
        loadOrders() {
            this.$store.dispatch({ type: 'loadOrders' })
            console.log('hi from loader')
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
            console.log('hello');
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
        rejectedOrders() {
            var rejected = 0
            this.orders.forEach(order => {
                if (order.status === "Rejected") { rejected++ }
            })
            return rejected
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

<style>

</style>