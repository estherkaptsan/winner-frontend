<template>
   
    <section class="review-preview">
        <section class="review-preview-long grid"><img class="reviewer-img"
                src="https://randomuser.me/api/portraits/men/17.jpg" alt="user-img">
            <section class="reviewer-details flex column">
                <p class="username">{{ gig.reviews[0].name }}</p>
                <section class="country-wrapper flex"><img :src=gig.reviews[0].flag alt="reviewer-flag">
                    <p class="country">{{ gig.reviews[0].country }}</p>
                </section>
            </section>
            <section class="review-content">
                <section class="review-rate flex align-center">
                    <ul class="stars clean-list flex">
                        <li><span v-for="n in 4"
                                  class="svg flex justify-center align-center"
                                  v-html="getSvg('goldStar')"></span></li>
                        <!-- <li><span class="svg flex justify-center align-center" v-html="getSvg('goldStar')"></span></li>
                        <li><span class="svg flex justify-center align-center" v-html="getSvg('goldStar')"></span></li>
                        <li><span class="svg flex justify-center align-center" v-html="getSvg('goldStar')"></span></li> -->
                    </ul>
                    <p class="rating-score">4</p>
                    <p class="reviewed-at">{{ gig.reviews[0].reviewedAt }}</p>
                </section>
                <p class="review-description">{{ gig.reviews[0].review }}</p>
            </section>
        </section>
    </section>
</template>

<script>
import { svgServive } from '../services/svg.service.js'

export default {
    props: ['reviews'],
    name: 'Reviews',
    data() {
        return {
        }
    },
    computed: {
        // gigs() {
        //     return this.$store.getters.gigs
        // },
    },
    methods: {
        getSvg(iconName) {
            return (this.icon = svgServive.getGigSvg(iconName))
        },
       
    },
    created() { },
    components: {
      
    }
}
</script>