<template>
    <GigFilter class="filter" @setFilterBy="setFilterBy" :gigs="gigs" />
    <GigList :gigs="gigs" @removeGig="removeGig" />
</template>
  
<script>
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
// import { gigService } from '../services/gig.service.local'
import { gigService } from '../services/gig.service'
import { getActionRemoveGig, getActionUpdateGig, getActionAddGigMsg } from '../store/gig.store'
import GigFilter from '../cmps/GIgFilter.vue'

import GigList from '../cmps/GigList.vue'


export default {
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

        window.scroll(0, 0)


    },
    methods: {


        async setFilterBy(filterBy) {

            console.log('filter by from explore', { ...filterBy })
            try {
                this.$store.dispatch({ type: 'filterGigs', ...filterBy })
            }
            catch {
                console.log(err)
                showErrorMsg('Cannot filter Gigs')
            }

        },

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
                // showSuccessMsg('Gig updated')

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
        GigFilter,
        GigList,
    }
}
</script>
