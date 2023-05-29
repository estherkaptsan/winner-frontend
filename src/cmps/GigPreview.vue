<template>
    <article className="gig-preview">

        <vueper-slides class="main-img" fade :touchable="false">
            <vueper-slide v-for="img in gig.images" :key="img" :image="img" />
        </vueper-slides>

        <div class="inner-seller">
            <img :src="gig.owner.imgUrl" class="owner-img" alt="">
            <div class="owner-previwe">
                <div class="full-name">{{ gig.owner?.fullname }}</div>
                <div>{{ gig.owner?.level }}</div>
            </div>
        </div>
        <RouterLink class="link" :to="'/gig/' + gig._id">
            <h1 class="preview-title">{{ gig.title }}</h1>
        </RouterLink>
        <div class="content-info">
            <div class="rating-wrapper"><span class="gig-rating ">
                    <span class="svg" v-html="getSvg('goldStar')"></span>
                </span>
                <span class="owner-rate">{{ ownerRate }}</span>
                <span class="review-count">({{ this.numOfreviews }})</span>
            </div>
        </div>

        <div class="preview-footer" v-if="isExplorePage">
            <span class="heart" :class="heartColor" @click="heartClick" v-html="getSvg('heart')"></span>
            <div><span class="starting-at">starting at </span><span class="gig-price">US${{ gig.price }}</span></div>
        </div>

        <div class="preview-footer" v-if="isUserPage">
            <span class="btn-remove-gig" @click="removeGig(gig._id)">
                <i class="fa-regular fa-trash-can"></i>
            </span>
            <span class="btn-remove-gig" @click="updateGig(gig)">
                <i class="fa-solid fa-pencil"></i>
            </span>
        </div>

    </article>
</template>
  
  
<script>

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { svgServive } from '../services/svg.service.js'
import { utilService } from '../services/util.service'
export default {

    props: ['gig', 'user'],

    data() {
        return {
            like: false,
            numOfreviews: utilService.getRandomIntInclusive(100, 400),
        }
    },

    methods: {
        heartClick() {
            this.like = !this.like
        },

        removeGig(gigId) {
            console.log(gigId)
            this.$emit('removeGig', gigId)
        },
        getSvg(iconName) {
            return (this.icon = svgServive.getGigSvg(iconName))
        },
        updateGig(gig) {
            console.log(gig)
            this.$emit('updateGig', gig)
        },


    },

    computed: {
        isExplorePage() {
            return this.$route.path === '/explore'
        },
        isUserPage() {
            return this.$route.path === '/user-profile'
        },
        sumOfReviews() {
            return this.gig.reviews?.length
        },
        ownerRate() {
            return this.gig.owner?.rate
        },

        heartColor() {

            return {
                'like': this.like,
                'unlike': !this.like
            }

        },
    },

    components: {
        VueperSlides,
        VueperSlide
    },
    emits: ['removeGig']
}
</script>

 
