<template>
    <section class="gig-payment">
        <section class="payment-container flex">
            <section class="payment-details-container">
                <h2>Payment Option</h2>
                <section class="credit-selection flex">
                    <div class="credit-txt">
                        <p>Credit &amp; Debit Cards</p>
                    </div>
                    <div class="visa"><span>
                            <svg class="svg-visa" height="512px" style="enable-background:new 0 0 512 512;" version="1.1"
                                viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="形状_1_3_" style="enable-background:new    ;">
                                    <g id="形状_1">
                                        <g>
                                            <path
                                                d="M211.328,184.445l-23.465,144.208h37.542l23.468-144.208     H211.328z M156.276,184.445l-35.794,99.185l-4.234-21.358l0.003,0.007l-0.933-4.787c-4.332-9.336-14.365-27.08-33.31-42.223     c-5.601-4.476-11.247-8.296-16.705-11.559l32.531,124.943h39.116l59.733-144.208H156.276z M302.797,224.48     c0-16.304,36.563-14.209,52.629-5.356l5.357-30.972c0,0-16.534-6.288-33.768-6.288c-18.632,0-62.875,8.148-62.875,47.739     c0,37.26,51.928,37.723,51.928,57.285c0,19.562-46.574,16.066-61.944,3.726l-5.586,32.373c0,0,16.763,8.148,42.382,8.148     c25.616,0,64.272-13.271,64.272-49.37C355.192,244.272,302.797,240.78,302.797,224.48z M455.997,184.445h-30.185     c-13.938,0-17.332,10.747-17.332,10.747l-55.988,133.461h39.131l7.828-21.419h47.728l4.403,21.419h34.472L455.997,184.445z      M410.27,277.641l19.728-53.966l11.098,53.966H410.27z"
                                                style="fill-rule:evenodd;clip-rule:evenodd;fill:#005BAC;"></path>
                                        </g>
                                    </g>
                                </g>
                                <g id="形状_1_2_" style="enable-background:new    ;">
                                    <g id="形状_1_1_">
                                        <g>
                                            <path
                                                d="M104.132,198.022c0,0-1.554-13.015-18.144-13.015H25.715     l-0.706,2.446c0,0,28.972,5.906,56.767,28.033c26.562,21.148,35.227,47.51,35.227,47.51L104.132,198.022z"
                                                style="fill-rule:evenodd;clip-rule:evenodd;fill:#F6AC1D;"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg></span>
                    </div>
                </section>
                <section class="payment-option">
                    <div class="card-info flex">
                        <div class="card-num-container">
                            <p>Card Number</p>
                            <input class="card-num" type="text" value="" placeholder="XXXX XXXX XXXX XXXX">
                        </div>
                        <div class="shorts-input">
                            <div>
                                <p>Expiration Date</p><input class="short" type="text" value="4 / 4">
                            </div>
                            <div>
                                <p>Security Code</p><input class="short" type="text" value="911">
                            </div>
                        </div>
                    </div>
                    <div class="name-inputs flex">
                        <div>
                            <p>First Name</p><input class="name-input" type="text" placeholder="eli">
                        </div>
                        <div>
                            <p>Last Name</p><input class="name-input" type="text" placeholder="gal">
                        </div>
                    </div>
                </section>
            </section>
            <section class="package-container">
                <section class="gig-package-payment">
                    <section class="package-content">
                        <section class="header flex space-between">
                            <div class="img-container">
                                <img :src=gig.images[1]>
                            </div>
                            <p class="title">{{ gig.title }}</p>
                        </section>
                        <h3 class="price">US${{ gig.price }}</h3>
                        <p>
                            <span v-for="(tag) in list"> {{ tag }} +</span>
                        </p>

                        <ul class="features clean-list">
                            <li class="regular" v-for="(tag) in list" :key="index">
                                <div class="v-svg-container">
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg"
                                            fill="#1dbf73">
                                            <path
                                                d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                                {{ tag }}
                            </li>
                        </ul>
                        <div class="pricing">
                            <p>Service Fee</p>
                            <p>US$7.50</p>
                        </div>
                        <div class="pricing">
                            <p>VAT</p>
                            <p>US$7.26</p>
                        </div>
                        <div class="pricing total">
                            <p class="bold-price">Total</p>
                            <p class="bold-price">{{ lastPrice }}</p>
                        </div>
                        <div class="pricing">
                            <p class="bold-price">Delivery Time</p>
                            <p class="bold-price">1 Days</p>
                        </div>
                        <button @click="addOrder" class="continue-btn">Confirm And Pay</button>
                    </section>
                </section>
            </section>
        </section>
    </section>
</template>


<script>


import { svgServive } from '../services/svg.service.js'
// import { gigService } from '../services/gig.service.local'
import { gigService } from '../services/gig.service'
// import { orderService } from '../services/order.service.local'
import { orderService } from '../services/order.service'
// import { socketService } from '../services/socket.service'


export default {

    data() {
        return {
            list: ['Include 3D mockup', 'Printable file', 'Logo transparency', '1 concept included'],
            gig: null,
        }
    },

    // watch: {
    //     '$route.params': {
    //         async handler() {
    //             // this.loadGig()
    //         },
    //         immediate: true,
    //     },
    // },
    async created() {
        const { gigId } = this.$route.params
        const gig = await gigService.getById(gigId)
        this.gig = gig
    },

    computed: {
        lastPrice() {
            return this.gig.price + 7.26 + 7.5
        },
        loggedInUser() {
            return this.$store.getters.loggedinUser
        },
    },

    methods: {
        addOrder() {
            console.log(this.loggedInUser);    
            if ( !this.loggedInUser) this.$router.push('/')
            const gig = this.gig
            console.log(gig);
            // if (!this.loggedInUser) {
            //     return
            // }
            const order =
            {
                "buyer": {
                    "_id": this.loggedInUser._id,
                    "name": this.loggedInUser.fullname,
                    "username": this.loggedInUser.username
                },

                "seller": {
                    "_id": gig.owner._id,
                    "fullname": gig.owner.fullname,
                    "username": gig.owner.username,
                },

                "gig": {
                    "_id": this.gig._id,
                    "name": this.gig.title,
                    "price": this.gig.price,
                    "img": this.gig.images[0]
                },
                "createdAt": new Date(),
                "status": "Pending",
            }
            
            this.$store.dispatch({ type: 'saveOrder', order: { ...order } })
            socketService.emit('gig-ordered', order)
            setTimeout(() => {
                this.$router.push('/user-profile/user-order')
            }, 500)
        },

        getSvg(iconName) {
            return (this.icon = svgServive.getGigSvg(iconName))
        },

        printGigToConsole(gig) {
            console.log('Gig msgs:', gig.msgs)
        },
    },




}

</script>