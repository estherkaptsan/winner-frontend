<template>
    <section v-if="gigs">

        <ul class="listing-container">
            <li class="grid-view" v-for="gig in gigs" :key="gig._id">
                <GigPreview :user="user" :gig="gig" @removeGig="removeGig" />
            </li>
        </ul>
    </section>
</template>

<script>
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
// import { gigService } from '../services/gig.service.local'
import { gigService } from '../services/gig.service'
import { getActionRemoveGig, getActionUpdateGig, getActionAddGigMsg } from '../store/gig.store'
import GigPreview from '../cmps/GigPreview.vue'

export default {
    props: ['gigs', 'user'],
    data() {
        return {
            gigToAdd: gigService.getEmptyGig()
        }
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedinUser
        },
        gigs() {
            return this.$store.getters.gigs
        }
    },
    created() {
        // this.$store.dispatch({ type: 'loadGigs' })
    },
    methods: {
        async addGig() {
            try {
                await this.$store.dispatch({ type: 'addGig', gig: this.gigToAdd })
                showSuccessMsg('Gig added')
                this.gigToAdd = gigService.getEmptyGig()
            } catch (err) {
                console.log(err)
                showErrorMsg('Cannot add gig')
            }
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
            try {
                gig = { ...gig }
                gig.price = +prompt('New price?', gig.price)
                await this.$store.dispatch(getActionUpdateGig(gig))
                showSuccessMsg('Gig updated')

            } catch (err) {
                console.log(err)
                showErrorMsg('Cannot update gig')
            }
        },
        async addGigMsg(gigId) {
            try {
                await this.$store.dispatch(getActionAddGigMsg(gigId))
                showSuccessMsg('Gig msg added')
            } catch (err) {
                console.log(err)
                showErrorMsg('Cannot add gig msg')
            }
        },
        printGigToConsole(gig) {
            console.log('Gig msgs:', gig.msgs)
        }
    },

    components: {
        GigPreview
    }
}
</script>
