<template>
    <header class="step-header">
        <h2 class="step-h">Personal Info</h2>
        <p>Tell us a bit about yourself. This information will appear on your public profile, so that potential buyers can
            get to know you better.</p>
        <small>* Mandatory fields</small>
        <button>Back</button>
    </header>

    <section class="seller-register main-layout full">
        <form class="becomseller-form" v-on:submit.prevent="submitForm">
            <label><span class="flex-column">Username <p>this name will be shown to other users</p></span>
                <input v-model="this.editUser.fullname">
            </label>
            <div><span class="flex-column">Profile Picture <p>Add a profile picture of yourself so customers will know
                        exactly who they’ll be working with. </p></span>
                <!-- <label>
                    <section class="img-profile-uploader">
                        <div class="img-container">
                            <img
                                src="loggedInUser.imgUrl || https://images-wixmp-.wixmp.com/f/b0b4c759-ad9c-4425-a9f4-ab89e2fd9837/de8cefl-35c0bc59-59b9-42ab-b19f-5c73828bb78e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwYjRjNzU5LWFkOWMtNDQyNS1hOWY0LWFiODllMmZkOTgzN1wvZGU4Y2VmbC0zNWMwYmM1OS01OWI5LTQyYWItYjE5Zi01YzczODI4YmI3OGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.81ixeN9b4cfDmfBlskK9CUyAMDtRhYNU7lfwTI8WI5Q">
                        </div>
                        <label for="imgUpload"></label>
                        <input type="file" accept="img/*" id="imgUpload">
                    </section>
                </label> -->
            </div>
            <label>
                <span class="flex-column">Description <p>Share a bit about your work experience, cool projects you’ve
                        completed, and your area of expertise.</p></span>
                <textarea v-model="this.editUser.description"></textarea>
            </label>
            <label>
                <span>Country <p>Where are you from?</p>
                </span>
                <input v-model="this.editUser.country">
            </label>
        </form>

        <div class="btns flex space-between">
            <button class="cancel-btn" @click="home">Cancel</button>
            <button class="save-btn" v-on:click="submitForm">Sign up</button>
        </div>
    </section>
</template>


<script>
export default {
    name: 'become- seller',
    data() {
        return {
            editUser:'',
            gig: null,
        }
    },

    created() {
        const loggedinUser = this.$store.getters.loggedinUser
        // if (loggedinUser) {
            this.editUser = loggedinUser
        // }
        // else {
        //     this.editUser = userService.createEmptyUser()
        // }
    },

    computed: {
        loggedInUser() {
            return this.$store.getters.loggedinUser
        },
    },

    methods: {
        home() {
            this.$router.push('/')
            indow.scrollTo(0, 0)
        },
        submitForm() {
            console.log('editUser', this.editUser);
            
            // const formData = {
            //     username: loggedInUser.country,
            //     description: loggedInUser.description,
            //     country: loggedInUser.country
            // }

            // this.user.isSeller = true
            console.log(formData);

        }
    }

}
</script>
<style></style>

