<template>
    <div class=" main-container full bgc-user-profile">
        <div class=" user-profile">
            <section class="user-side">
                <div class="user-card">
                    <div class="form-user-profile">

                        <form>
                            <label for="imgupload">
                                <input type="file" id="imgupload" style="display: none;">
                                <div class="user-img">
                                    <!-- <ImgUploader class="img-uploader" @uploaded="onUploaded" /> -->
                                    <img :src="loggedInUser.imgUrl"
                                         v-if="loggedInUser.imgUrl" @uploaded="onUploaded" />
                                    <span v-else v-html="getSvg('userProfile')"></span>
                                </div>
                            </label>
                        </form>
                        <h2>{{ loggedInUser.fullname }}</h2>
                    </div>
                    <section class="user-details">
                        <div class="flex">
                            <span class="svg-user-card" v-html="getSvg('location')"></span>
                            <p> From: Israel</p>
                        </div>
                        <div class="flex">
                            <span class="svg-user-card" v-html="getSvg('userProfile')"></span>
                            <p> Member since: April 2023</p>
                        </div>
                    </section>
                </div>

                <div class="description-card">
                    <h1>Description</h1>
                    <div class="user-description-text">
                        Your website is the actual face of your business,
                        and if it is not perfect, then it's alarming because with each passing day,
                        clients will not convert, and here we will come up to play the vital role.
                        We are a team of Professional website designer experts
                        and have been in this ecosystem for more than 2 years.
                    </div>
                </div>
            </section>

            <section class="tabs-side">
                <div>
                    <div class="tab-btns">
                        <button @click="selectedTab('My gigs')" :class="{ 'selected-tab': selected === 'My gigs' }">
                            <RouterLink to="/user-profile">My gigs</RouterLink>
                        </button>
                        <button @click="selectedTab('My orders')" :class="{ 'selected-tab': selected === 'My orders' }">
                            <RouterLink to="/user-profile/user-order">My orders</RouterLink>
                        </button>
                    </div>
                </div>

                <RouterView />
                <!-- <pre>{{ loggedInUser }}</pre> -->
            </section>
        </div>
    </div>
</template>

<script>
import { svgServive } from '../services/svg.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { getActionRemoveGig, getActionUpdateGig, getActionAddGigMsg } from '../store/gig.store'
import GigList from '../cmps/GigList.vue'
import GigPreview from '../cmps/GigPreview.vue'
import ImgUploader from '../cmps/ImgUploader.vue'

export default {
    name: 'UserProfile',
    data() {
        return {
            userGigs: [],
            selected: 'My gigs',
            tabs: ['My gigs', 'My orders'], // 'Received Orders', 'Reviews'
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
            return this.$store.getters.orders
        }
    },
    methods: {
        getSvg(iconName) {
            return (this.icon = svgServive.getGigSvg(iconName))
        },
        selectedTab(selected) {
            this.selected = selected
            if(this.selected  === 'My gigs') this.$router.push('/user-profile')
            if(this.selected  === 'My orders') this.$router.push('/user-profile/user-order')
            console.log(this.selected)
        },
        async removeGig(gigId) {
            try {
                await this.$store.dispatch(getActionRemoveGig(gigId))
                showSuccessMsg('Gig removed')

            } catch (err) {
                console.log(err)
                showErrorMsg('Cannot remove gig')
            }
        },
        async updateGig(gig) {
            console.log(gig)
            try {
                gig = { ...gig }
                // gig.price = +prompt('New price?', gig.price)
                this.$router.push(`/edit/${gig._id}`)
                await this.$store.dispatch(getActionUpdateGig(gig))
                showSuccessMsg('Gig updated')

            } catch (err) {
                console.log(err)
                showErrorMsg('Cannot update gig')
            }
        },
        getUserGigs() {
            this.userGigs = this.gigs.filter(gig => gig.owner._id === this.loggedInUser._id)
        },
        onUploaded(imgUrl) {
            this.loggedInUser.imgUrl = imgUrl
        },
    },
    created() {
        this.getUserGigs()
        this.$store.dispatch({ type: 'loadGigs' })
        this.selected =  (this.$route.path === '/user-profile') ? 'My gigs' : 'My orders'
    },
    components: {
        GigList,
        GigPreview,
        ImgUploader

    }
}
</script>
<style>

</style>