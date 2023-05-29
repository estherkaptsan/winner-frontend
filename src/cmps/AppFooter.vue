<template>
    <footer class="main-container flex space-between align-center">
        <!-- <div class=""> -->
            <div class="footer-title flex align-center justify-center">
                <h3> <span aria-label="logo" class="logo">Winner</span></h3>
                <h4 class="">© Winner International Ltd. 2023</h4>
            </div>

            <div class="footer-links">
                <a class="" href="https://twitter.com/fiverr">
                    <span class="" v-html="getSvg('twitter')"></span></a>
                <a class="" href="https://www.facebook.com/Fiverr/">
                    <span class="" v-html="getSvg('facebook')"></span></a>
                <a class="" href="https://www.linkedin.com/company/fiverr-com">
                    <span class="" v-html="getSvg('linkedIn')"></span></a>
                <a class="" href="https://www.pinterest.com/fiverr/">
                    <span class="" v-html="getSvg('pinterest')"></span></a>
                <a class="" href="https://www.instagram.com/fiverr/">
                    <span class="" v-html="getSvg('instagram')"></span></a>
            </div>
        <!-- </div> -->
    </footer>
</template>

<script>
import { svgServive } from '../services/svg.service.js'

export default {
    // name: 'footer',
    data() {
        return {}
    },
    computed: {},
    created() {},
    methods: {
        getSvg(iconName) {
            return (this.icon = svgServive.getGigSvg(iconName))
        },
    },
}
</script>

<style>
.icon {
    /* width: 30px;
    height: 30px; */
}
</style>