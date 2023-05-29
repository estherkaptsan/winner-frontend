<template>
    <div class="gigs-tabs">
        <section v-if="userGigs">
            <ul class="flex">
                <li class="gigs-user">
                    <router-link to="/gig/edit">
                        <div class="card-new-gig">
                            <span class="btn-add-gig">+</span>
                            <p>Create a new Gig</p>
                        </div>
                    </router-link>
                </li>
                <li class="gigs-user" v-for="gig in userGigs" :key="gig._id">
                    <GigPreview :gig="gig" @removeGig="removeGig(gig._id)" @updateGig="updateGig(gig)" />
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
import { svgServive } from '../services/svg.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { getActionRemoveGig, getActionUpdateGig, getActionAddGigMsg } from '../store/gig.store'
import GigList from './GigList.vue'
import GigPreview from './GigPreview.vue'

export default {
    name: 'UserGigs',
    data() {
        return {
            userGigs: '',
            selected: 'My Gigs',
            tabs: ['My Gigs', 'My Orders', 'Received Orders'],
        }
    },
    computed: {
        gigs() { return this.$store.getters.gigs },
        orders() { return this.$store.getters.orders },
        loggedInUser() { return this.$store.getters.loggedinUser },
    },
    methods: {
        getSvg(iconName) {
            return (this.icon = svgServive.getGigSvg(iconName))
        },
        selectedTab(selected) {
            this.selected = selected
            console.log(this.selected)
        },
        async removeGig(gigId) {
            try {
                await this.$store.dispatch(getActionRemoveGig(gigId))
                showSuccessMsg('Gig removed')
                this.getUserGigs()
                
            } catch (err) {
                console.log(err)
                showErrorMsg('Cannot remove gig')
            }
        },
        async updateGig(gig) {
            console.log(gig)
            try {
                gig = { ...gig }
                this.$router.push(`gig/edit/${gig._id}`)
                await this.$store.dispatch(getActionUpdateGig(gig))
                showSuccessMsg('Gig updated')

            } catch (err) {
                console.log(err)
                showErrorMsg('Cannot update gig')
            }
        },
        getUserGigs() {
            this.userGigs = this.gigs.filter(gig => gig.owner._id === this.loggedInUser._id)
            console.log(this.userGigs)
        }
    },
    created() {
        this.getUserGigs()
        this.$store.dispatch({ type: 'loadGigs' })
    },
    components: {
        GigList,
        GigPreview
    }
}
</script>
