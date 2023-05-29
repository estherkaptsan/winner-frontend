<template>
    <section class="main-container full gig-nav">

        <section>
            <ul class="nav-info" ref="nav-info">
                <li><a :class="{ selected: selectedLink === 'overview' }"
                        @click.prevent="scrollToElement('overview')">Overview</a></li>
                <li><a :class="{ selected: selectedLink === 'aboutSeller' }"
                        @click.prevent="scrollToElement('aboutSeller')">About the seller</a></li>
                <li><a :class="{ selected: selectedLink === 'reviews' }"
                        @click.prevent="scrollToElement('reviews')">Reviews</a></li>
            </ul>
        </section>

    </section>
    <section class="gig-info flex" ref="overview" v-if="gig">
        <section class="main-gig">
            <div class="gig-overview">
                <h1>{{ gig.title }}</h1>
                <section class="user-preview">
                    <section class="seller-preview-short flex align-center">
                        <div class="img-container"><img :src=gig.owner.imgUrl></div>
                        <div class="text-container">
                            <div class="text">
                                <a aria-current="page" href="#aboutSeller" ref="aboutSeller"
                                    class="router-link-active router-link-exact-active"
                                    @click.prevent="scrollToElement('aboutSeller')">
                                    <p class="seller-username">{{ gig.owner.fullname }}</p>
                                </a>
                                <p class="seller-level"> {{ gig.owner.level }} </p>
                                <div class="line"> |
                                </div>
                            </div>
                            <div class="rate">
                                <my-star-rating :gig="gig"></my-star-rating>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

            <section class="pic">

                <vueper-slides ref="vueperslides1" :touchable="false" fade :autoplay="false" :bullets="false"
                    @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })" fixed-height="400px">
                    <vueper-slide v-for="(img, i) in gig.images" :key="i" :image="img">
                    </vueper-slide>
                </vueper-slides>

                <vueper-slides class="no-shadow thumbnails" ref="vueperslides2"
                    @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
                    :visible-slides="gig.images.length" fixed-height="75px" :bullets="false" :touchable="false" :gap="2.5"
                    :arrows="false">
                    <vueper-slide v-for="(img, i) in gig.images" :key="i" :image="img"
                        @click.native="$refs.vueperslides2.goToSlide(i)">
                    </vueper-slide>
                </vueper-slides>
            </section>



            <header v-if="gig.reviews" class="What-people-loved flex">
                <h2 class="section-title">What people loved about this seller</h2>
                <button @click.prevent="scrollToElement('reviews')"
                    class="sPdE5j4 zUvc8Si co-white text-button reviews-button bg-co-green-700">See all reviews</button>
            </header>
            <section v-if="gig.reviews" class="review-list-container">
                <section class="review-list">
                    <section>
                        <section class="review-preview">
                            <section class="review-preview-snippet">
                                <section class="review-snippet-temporary grid">
                                    <img class="reviewer-img"
                                        src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/58fa74601aeac3efd49c75ee97b5ee89-1562103853978/fcfc21ef-a4dd-41bf-949d-9a3e9383baab.jpg"
                                        alt="user-img">
                                    <section class="reviewer-details flex">
                                        <p class="username">{{ gig.reviews[0].name }}</p>
                                        <section class="country-wrapper flex">
                                            <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png"
                                                alt="reviewer-flag">
                                            <p class="country">{{ gig.reviews[0].country }}</p>
                                            <ul class="stars clean-list flex">
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                            </ul>
                                            <p class="rating-score">5</p>
                                        </section>
                                    </section>
                                    <section class="review-content">
                                        <p class="review-description">{{ gig.reviews[0].review }}</p>
                                        <p class="reviewed-at">{{ gig.reviews[0].reviewedAt }}</p>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>


            <div class="about-the-gig">
                <h2>About the gig</h2>
                <p>{{ gig.description }}</p>
            </div>

            <section ref="aboutSeller" id="aboutSeller" class="seller-preview">
                <h2>About The Seller</h2>
                <section class="user-preview">
                    <section class="seller-preview-long flex">
                        <div class="img-container">
                            <img :src=gig.owner.imgUrl alt="seller-img">
                        </div>
                        <section class="seller-details flex column">
                            <section class="name-line flex">
                                <p class="seller-username">{{ gig.owner.fullname }}</p>
                                <div class="online-indicator">
                                    <span><svg width="4px" height="4px" viewBox="0 0 16 16"
                                            xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                            <path
                                                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z">
                                            </path>
                                        </svg></span>
                                    <p>Online</p>
                                </div>
                            </section>
                            <p class="seller-level">{{ gig.owner.level }} </p>
                            <section class="seller-reviews-stat flex align-center">
                                <my-star-rating :gig="gig"></my-star-rating>
                            </section>

                        </section>
                    </section>
                </section>
                <section class="seller-details-container">
                    <section class="seller-stat">
                        <ul class="grid clean-list user-info">
                            <li class="flex column"><span class="key">From</span>
                                <span class="value">Israel</span>
                            </li>
                            <li class="flex column"><span class="key">Member since</span>
                                <span class="value">Jan 2023</span>
                            </li>
                            <li class="flex column"><span class="key">Avg. response time</span>
                                <span class="value">{{ gig.avgResponceTime }}</span>
                            </li>
                            <li class="flex column"><span class="key">Last delivery</span>
                                <span class="value">about 12 hours</span>
                            </li>
                        </ul>
                    </section>
                    <section class="seller-desc">
                        <p>{{ gig.about }}</p>
                    </section>
                </section>
            </section>

            <section ref="reviews" id="reviews" class="reviews-container">
                <h2 class="title-reviews">Reviews</h2>
                <section v-if="gig.reviews" class="reviews-stat flex column">
                    <section class="stat-header flex align-center">
                        <h2>347 Reviews </h2>
                        <section class="reviews-rate flex">
                            <ul class="stars clean-list flex">
                                <li><span class="svg flex justify-center align-center" v-html="getSvg('goldStar')"></span>
                                </li>
                                <li><span class="svg flex justify-center align-center" v-html="getSvg('goldStar')"></span>
                                </li>
                                <li><span class="svg flex justify-center align-center" v-html="getSvg('goldStar')"></span>
                                </li>
                                <li><span class="svg flex justify-center align-center" v-html="getSvg('goldStar')"></span>
                                </li>
                                <li><span class="svg flex justify-center align-center" v-html="getSvg('goldStar')"></span>
                                </li>
                            </ul>
                            <p class="rating-score">5</p>
                        </section>
                    </section>
                    <section class="stat-main flex">

                        <section class="stars-counters">
                            <ul class="clean-list flex column">
                                <li class="flex align-center"><span class="key">5 Stars</span>
                                    <section class="progress progress-container flex align-center"><progress max="344"
                                            value="310"></progress><span class="star-num">(310)</span></section>
                                </li>
                                <li class="flex align-center"><span class="key">4 Stars</span>
                                    <section class="progress-container flex align-center"><progress max="344"
                                            value="28"></progress><span class="star-num">(28)</span></section>
                                </li>
                                <li class="flex align-center"><span class="key">3 Stars</span>
                                    <section class="progress-container flex align-center"><progress max="344"
                                            value="6"></progress><span class="star-num">(6)</span></section>
                                </li>
                                <li class="flex align-center"><span class="key">2 Stars</span>
                                    <section class="progress-container flex align-center"><progress max="344"
                                            value="2"></progress><span class="star-num">(2)</span></section>
                                </li>
                                <li class="flex align-center last-li"><span class="key">1 Star</span>
                                    <section class="progress-container flex align-center"><progress class="progress"
                                            max="344" value="1"></progress><span class="star-num">(1)</span></section>
                                </li>
                            </ul>
                        </section>
                        <section class="ranking flex column">
                            <h6>Rating Breakdown</h6>
                            <ul class="clean-list flex column">
                                <li class="flex align-center space-between"><span class="key">Seller communication
                                        level</span>
                                    <section class="star-container flex align-center"><span
                                            class="svg flex justify-center align-center"
                                            v-html="getSvg('goldStar')"></span><span class="value">5</span></section>
                                </li>
                                <li class="flex align-center space-between"><span class="key">Recommend to a friend</span>
                                    <section class="star-container flex align-center"><span
                                            class="svg flex justify-center align-center"
                                            v-html="getSvg('goldStar')"></span><span class="value">5</span></section>
                                </li>
                                <li class="flex align-center space-between"><span class="key">Service as described</span>
                                    <section class="star-container flex align-center"><span
                                            class="svg flex justify-center align-center"
                                            v-html="getSvg('goldStar')"></span><span class="value">5</span></section>
                                </li>
                            </ul>
                        </section>
                    </section>
                </section>
                <section class="review-list" v-if="gig.reviews">
                    <section>

                        <ul class="clean-list">


                            <section class="review-preview">
                                <section class="review-preview-long grid"><img class="reviewer-img"
                                        src="https://randomuser.me/api/portraits/men/17.jpg" alt="user-img">
                                    <section class="reviewer-details flex column">
                                        <p class="username">{{ gig.reviews[0].name }}</p>
                                        <section class="country-wrapper flex"><img :src=gig.reviews[0].flag
                                                alt="reviewer-flag">
                                            <p class="country">{{ gig.reviews[0].country }}</p>
                                        </section>
                                    </section>
                                    <section class="review-content">
                                        <section class="review-rate flex align-center">
                                            <ul class="stars clean-list flex">
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                            </ul>
                                            <p class="rating-score">4</p>
                                            <p class="reviewed-at">{{ gig.reviews[0].reviewedAt }}</p>
                                        </section>
                                        <p class="review-description">{{ gig.reviews[0].review }}</p>
                                    </section>
                                </section>
                            </section>

                            <section class="review-preview">
                                <section class="review-preview-long grid"><img class="reviewer-img"
                                        src="https://randomuser.me/api/portraits/men/9.jpg" alt="user-img">
                                    <section class="reviewer-details flex column">
                                        <p class="username">{{ gig.reviews[1].name }}</p>
                                        <section class="country-wrapper flex"><img :src=gig.reviews[1].flag
                                                alt="reviewer-flag">
                                            <p class="country">{{ gig.reviews[1].country }}</p>
                                        </section>
                                    </section>
                                    <section class="review-content">
                                        <section class="review-rate flex align-center">
                                            <ul class="stars clean-list flex">
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                            </ul>
                                            <p class="rating-score">5</p>
                                            <p class="reviewed-at"> {{ gig.reviews[1].reviewedAt }}</p>
                                        </section>
                                        <p class="review-description">{{ gig.reviews[1].review }}</p>
                                    </section>
                                </section>
                            </section>
                            <section class="review-preview">
                                <section class="review-preview-long grid"><img class="reviewer-img"
                                        src="https://randomuser.me/api/portraits/women/10.jpg" alt="user-img">
                                    <section class="reviewer-details flex column">
                                        <p class="username">{{ gig.reviews[2].name }}</p>
                                        <section class="country-wrapper flex"><img :src=gig.reviews[2].flag
                                                alt="reviewer-flag">
                                            <p class="country">{{ gig.reviews[2].country }}</p>
                                        </section>
                                    </section>
                                    <section class="review-content">
                                        <section class="review-rate flex align-center">
                                            <ul class="stars clean-list flex">
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                            </ul>
                                            <p class="rating-score">5</p>
                                            <p class="reviewed-at">{{ gig.reviews[2].reviewedAt }}</p>
                                        </section>
                                        <p class="review-description">{{ gig.reviews[2].review }}</p>
                                    </section>
                                </section>
                            </section>
                            <section class="review-preview">
                                <section class="review-preview-long grid"><img class="reviewer-img"
                                        src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/fad336296217f94a5b5235247939ae74-1562675367707/56dd2f2c-67c3-4024-8632-f5cdeb47f818.jpg"
                                        alt="user-img">
                                    <section class="reviewer-details flex column">
                                        <p class="username">{{ gig.reviews[3].name }}</p>
                                        <section class="country-wrapper flex"><img :src=gig.reviews[3].flag
                                                alt="reviewer-flag">
                                            <p class="country">{{ gig.reviews[3].country }}</p>
                                        </section>
                                    </section>
                                    <section class="review-content">
                                        <section class="review-rate flex align-center">
                                            <ul class="stars clean-list flex">
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                            </ul>
                                            <p class="rating-score">4</p>
                                            <p class="reviewed-at">{{ gig.reviews[3].reviewedAt }}</p>
                                        </section>
                                        <p class="review-description">{{ gig.reviews[3].review }}</p>
                                    </section>
                                </section>
                            </section>
                            <!-- gig.reviews[4].flag -->
                            <section class="review-preview"><!---->
                                <section class="review-preview-long grid"><img class="reviewer-img"
                                        src="https://ca.slack-edge.com/T04CLB0SNC9-U04GY5TMNLW-5b7c4131c0c7-512"
                                        alt="user-img">
                                    <section class="reviewer-details flex column">
                                        <p class="username">Adam_ber</p>
                                        <section class="country-wrapper flex"><img
                                                src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f1.png"
                                                alt="reviewer-flag">
                                            <p class="country">Israel</p>
                                        </section>
                                        <!-- {{ gig.reviews[4].country }} -->
                                    </section>
                                    <section class="review-content">
                                        <section class="review-rate flex align-center">
                                            <ul class="stars clean-list flex">

                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                                <li><span class="svg flex justify-center align-center"
                                                        v-html="getSvg('goldStar')"></span></li>
                                            </ul>
                                            <p class="rating-score">4</p>
                                            <p class="reviewed-at">Published 1 hour ago</p>
                                        </section>
                                        <p class="review-description">Excellent job! I’ve been using Winner for 3 years now
                                            and Omg, This seller was amazing and exactly what i needed. I was kinda in a
                                            funk and need to be saved. It all happend just that with amazing energy, a
                                            wonderful attitude and passion for what she does. The strategy was perfect,
                                            Thanks again for bringing us great value.. Highly Suggested..</p>
                                    </section>
                                </section>
                            </section>
                        </ul>
                    </section>
                </section>
            </section>



        </section>

        <section class="package-container">
            <section class="gig-package">
                <section class="package-content">
                    <section class="header flex space-between">
                        <h3 class="price regular">Order deatils</h3>
                        <h3 class="price regular">US${{ gig.price }}</h3>
                    </section>
                    <p>1 custom logo+high resolution file+3d mockup+logo transparency+ 300dpi</p>
                    <section class="additional-info flex">
                        <div class="delivery-wrapper flex">
                            <span><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                                    fill="#62646a">
                                    <path
                                        d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z">
                                    </path>
                                    <path d="M9 4H7v5h5V7H9V4z"></path>
                                </svg>
                            </span>
                            <p>1 Days Delivery</p>
                        </div>
                        <div class="revisions-wrapper flex"><span><svg width="16" height="16" viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg" fill="#62646a">
                                    <path
                                        d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z">
                                    </path>
                                    <path
                                        d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z">
                                    </path>
                                </svg></span>
                            <p> Unlimited Revisions </p>
                        </div>
                    </section>
                    <ul class="features clean-list">
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> 1 concept included</li>
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> Logo transparency</li>
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> Vector file</li>
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> Printable file</li>
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> Include 3D mockup</li>
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> Include source file</li>
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> Include social media kit</li>
                    </ul>

                    <router-link :to="'/payment/' + gig._id">
                        <button class="continue-btn">
                            Continue
                            <span>
                                <span class="svg flex justify-center align-center" v-html="getSvg('continueBtn')"></span>
                            </span>
                        </button>
                    </router-link>
                </section>

            </section>
        </section>



    </section>
</template>
  
<script>

import MyStarRating from '../cmps/MyStarRating.vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { getActionRemoveGig, getActionUpdateGig, getActionAddGigMsg } from '../store/gig.store'
// import { gigService } from '../services/gig.service.local'
import { gigService } from '../services/gig.service'
import { svgServive } from '../services/svg.service.js'
import { socketService, SOCKET_EMIT_USER_WATCH } from '../services/socket.service'


export default {
    props: ['gig'],
    data() {
        return {
            // isIntersected: false,
            gig: null,
            selectedLink: 'overview',
        }
    },

    mounted() {

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const ref = entry.target.getAttribute('ref');
                const link = this.$refs['nav-info'].querySelector(`a[href="#${ref}"]`);
                if (entry.isIntersecting) {
                    link.classList.add('selected-link');
                    this.selectedLink = ref;
                } else {
                    link.classList.remove('selected-link');
                }
            });
        }, 
        { rootMargin: '-100% 0% -25% 0%' });

        // observe each section
        const sections = Object.values(this.$refs).filter(ref => ref.getAttribute('ref') && ref.getAttribute('ref').startsWith('section-'));
        sections.forEach(section => observer.observe(section));
    },

    watch: {
        '$route.params': {
            async handler() {
                this.loadGig()
            },
            immediate: true,
        },
    },
    computed: {
        // green() {
        //     return {
        //         'green': this.green,
        //         'no-green': !this.green
        //     }
        // },
        loggedInUser() {
            return this.$store.getters.loggedinUser
        },
        gigs() {
            return this.$store.getters.gigs
        }
    },

    methods: {
        scrollToElement(element) {
            this.selectedLink = element;
            this.$refs[element].scrollIntoView({ behavior: 'smooth' });
        },
        getSvg(iconName) {
            return (this.icon = svgServive.getGigSvg(iconName))
        },

        async loadGig() {
            try {
                const { gigId } = this.$route.params
                const gig = await gigService.getById(gigId)
                this.gig = gig
                // socketService.emit(SOCKET_EMIT_USER_WATCH, this.gig.owner)
            } catch {
                console.log('Could Not load gig')
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
        },
    },



    components: {
        MyStarRating,
        VueperSlides,
        VueperSlide,
    },
}

</script>



<style  lang="scss">
.thumbnails {
    margin: auto;
    max-width: 300px;
    padding: 5px 0 5px 5px;
}

.gig-info .thumbnails .vueperslide {
    box-sizing: border-box;
    border: 1px solid #fff;
    transition: 0.3s ease-in-out;
    opacity: 0.7;
    cursor: pointer;
}


.gig-info {
    .vueperslides__arrow.vueperslides__arrow--next {
        background: white;
        z-index: 4;
        border-radius: 50%;
        right: -2.1em;
        box-shadow: 0px 1px #b5b6ba;
        opacity: 1;
        width: 3.75rem;
        height: 3.75rem;

        svg {

            color: rgb(54, 51, 51);
            display: block;
            height: 50px;
            width: 50px;
            opacity: 1;
            stroke-width: 2.5px;
        }

    }

    .vueperslides__arrow.vueperslides__arrow--prev {
        background: white;
        z-index: 4;
        border-radius: 50%;
        box-shadow: 0px 1px #b5b6ba;
        left: -2.1em;
        opacity: 1;
        width: 3.75rem;
        height: 3.75rem;
        padding-left: 0.112em;

        svg {
            color:rgb(54, 51, 51);
            display: block;
            height: 50px;
            width: 50px;
            opacity: 1;
            stroke-width: 2.5px;
        }

    }
}

.thumbnails .vueperslide--active {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    opacity: 1;
    border-color: #000;
}

// progress {
//     margin-inline-end: 10px;
// }

// progress::-webkit-progress-value {
//     background: rgb(186, 26, 26);
// }

.vueperslides__parallax-wrapper {
    height: 50vh;
}
</style>



