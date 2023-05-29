<template>
    <section class="gig-edit full">
        <form @submit.prevent="addGig">
            <div class="top-form flex column space-between"><label class="title"><span class="flex-column">Gig Title
                        <p> your gig title should be cool sipmle and funny for more engagement</p>
                    </span>
                    <input type="text" placeholder="I will..." v-model="gigToEdit.title">
                </label>
                <label class="description"><span class="flex-column">Description <p>
                            Briefly Describe Your Gig</p></span><textarea
                        placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry...."
                        v-model="gigToEdit.description"> </textarea></label>
            </div>
            <div class="bottom-form flex space-between"><label class="category flex column">
                    <span class="flex-column">Category <p>Choose the category most suitable for your Gig.</p></span>
                    <select name="Graphics and Design" id="" v-model="gigToEdit.category">
                        <option value="Graphics &amp; Design">Graphics &amp; Design</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Writing &amp; Translation">Writing &amp; Translation</option>
                        <option value="Video &amp; Animation">Video &amp; Animation</option>
                        <option value="Music &amp; Audio">Music &amp; Audio</option>
                        <option value="Programming &amp; Tech">Programming &amp; Tech</option>
                        <option value="Busines">Busines</option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Data">Data</option>
                    </select>

                </label>
                <label class="days-to-make flex column">
                    <span>Days to Make <p>Days it will take you on average to finish this gig</p></span>
                    <select name="" id="" v-model="gigToEdit.daysToMake">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </label>
                <label class="price flex column">
                    <span>Price <p>Price you're offering for this gig</p></span>
                    <input class="price-input" type="number" name="" id="" v-model="this.gigToEdit.price">
                </label>
            </div>
            <div class="images flex-column">
                <ImgUploader class="img-uploader" @uploaded="onUploaded" />
                <div class="upload-preview flex"></div>
            </div>

            <section class="confirm-add btns">

                <button class="save-btn ">Save</button>
                <router-link to="/user-profile">
                    <button class="cancel-btn">Cancel</button>
                </router-link>
            </section>
        </form>

    </section>
</template>
   
<script>

import ImgUploader from '../cmps/ImgUploader.vue'

// import { gigService } from '../services/gig.service.local'
import { gigService } from '../services/gig.service'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
export default {
    title: 'GigEdit',
    data() {
        return {
            gigToEdit: '',
        }
    },
    created() {
        console.log(this.$route.params)
        const { gigId } = this.$route.params
        if (gigId) {
            gigService.getById(gigId).then((gig) => {
                this.gigToEdit = gig
            })
        }
        else this.gigToEdit = gigService.getEmptyGig()
    },
    methods: {
        async addGig() {
            console.log('saving gig')
            try {
                const save = await this.$store.dispatch({ type: 'addGig', gig: this.gigToEdit })
                showSuccessMsg('gig Added')
                // this.gigToEdit = gigService.getEmptyGig()
                this.$router.push('/user-profile')
            }
            catch {
                showErrorMsg('Cannot add gig')
                this.$router.push('/explore')
            }
        },
        onUploaded(imgUrl) {
            this.gigToEdit.images.push(imgUrl)
        },
    },
    computed: {
        gigs() {
            return this.$store.getters.gigs
        }
    },
    components: {
        ImgUploader
    }
}
</script>
   
