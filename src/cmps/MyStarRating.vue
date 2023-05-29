  <template>

      <ul class="stars clean-list flex">
       <li v-for="i in Math.round(gig.owner?.rate)" :key="i">
          <span class="flex justify-center align-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
              <path :class="{ 'active': i <= gig.owner.rate }"
                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
              </path>
            </svg>  
          </span>
        </li>
      </ul>
      <p class="rate-score">{{gig.owner.rate}}</p>
      <p v-if="gig.reviews" class="seller-reviews-count">(347)</p>
  </template>

  <script>
  export default {
    props: ['gig'],
  }
  </script>