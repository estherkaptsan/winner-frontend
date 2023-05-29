<template>
  <section class="filter">
    <VDropdown>
      <button class="filter-btn">Budget <span class="icon" v-html="getSvg('filterArrow')"></span></button>
      <template #popper>
        <section class="filter-mode" style="left: 0px;">
          <form id="filters" class="budget-modal" name="budget" @submit.prevent="setFilterBy(null)">
            <div class="min">
              <p>MIN.</p>
              <div class="minmax-input"><input v-model="filterBy.bugdet.min" placeholder="Any $" type="number" name="min"
                  class="min-price">
              </div>
            </div>
            <div class="max">
              <p>MAX.</p>
              <div class="minmax-input"><input v-model="filterBy.bugdet.max" placeholder="Any $" type="number" name="max"
                  class="max-price">
              </div>
            </div>
          </form>
          <div class="filters-footer"><button @click="clearMinMaxFilter" class="clear" type="button">Clear All</button>
            <button class="apply" form="filters" type="submit">Apply </button>
          </div>
        </section>
      </template>
    </VDropdown>
    <VDropdown>
      <button class="filter-btn">Delivery Time <span class="icon arrow" v-html="getSvg('filterArrow')"></span></button>
      <template #popper>
        <section class="filter-mode " style="left: 301px;">
          <form id="filters" name="daysToMake" class="delivery" @submit.prevent="setFilterBy(null)">
            <div class="delivery-option"><input class="delivery-input" type="radio" id="24h" name="delivery-time"
                v-model="filterBy.DeliveryTime" value="1"><span></span><label for="24h">Express 24H</label></div>
            <div class="delivery-option"><input class="delivery-input" type="radio" id="3d" name="delivery-time"
                v-model="filterBy.DeliveryTime" value="3"><label for="3d">Up to 3 days</label></div>
            <div class="delivery-option"><input class="delivery-input" type="radio" id="7d" name="delivery-time"
                v-model="filterBy.DeliveryTime" value="7"><label for="7d">Up to 7 days</label></div>
            <div class="delivery-option"><input  class="delivery-input" type="radio" id="anytime" name="delivery-time"
                value="" checked=""><label for="anytime">Anytime</label></div>
          </form>
          <div class="filters-footer">
            <button @click="clearDeliveryTimeFilter" class="clear" type="button">Clear All</button>
            <button class="apply" form="filters" type="submit">Apply</button>
          </div>
        </section>
      </template>
    </VDropdown>
  </section>




  <section class="sorting">
    <div class="count"><span>{{ availableGigs }}</span> services available</div>
    <VDropdown>
      <button class="sort-btn">Sort by <span class="sorting-txt">{{ changeSortTxt }} </span><span class="icon arrow"
          v-html="getSvg('filterArrow')"></span></button>
      <template #popper>
        <div class="sort-modal">
          <button @click="setFilterBy('Delivery Time')" class="sort-btn">Delivery Time</button>
          <button @click="setFilterBy('Best price')" class="sort-btn">Best price</button>
          <button @click="setFilterBy('Highest Rating')" class="sort-btn">Highest Rating</button>

        </div>
      </template>
    </VDropdown>
  </section>
</template>
<script>
import { svgServive } from '../services/svg.service.js'
export default {
  props: ['gigs'],
  data() {
    return {
      filterBy: {
        title: '',
        bugdet: { min: '', max: '' },
        DeliveryTime: 0,
        category: '',
        sortBy: '',

      }
    }
  },
  methods: {
    clearMinMaxFilter() {
      this.$router.push({
        query: {
          category: this.filterBy.category || '',
          title: this.filterBy.title || '',
          min: '',
          max: '',
          DeliveryTime: this.filterBy.DeliveryTime || '',
          sortBy: this.filterBy.sortBy || '',
        }
      })
    },
    clearDeliveryTimeFilter() {
      this.$router.push({
        query: {
          category: this.filterBy.category || '',
          title: this.filterBy.title || '',
          min: this.filterBy.bugdet?.min || '',
          max: this.filterBy.bugdet?.max || '',
          DeliveryTime: '',
          sortBy: this.filterBy.sortBy || '',
        }
      })
    },

    setFilterBy(sortBy) {
      if (sortBy) this.filterBy.sortBy = sortBy
      this.$router.push({
        query: {
          category: this.filterBy.category || '',
          title: this.filterBy.title || '',
          min: this.filterBy.bugdet?.min || '',
          max: this.filterBy.bugdet?.max || '',
          DeliveryTime: this.filterBy.DeliveryTime || '',
          sortBy: this.filterBy.sortBy || '',
        }
      })

    },
    getSvg(iconName) {
      return (this.icon = svgServive.getGigSvg(iconName))
    },
  },
  computed: {

    changeSortTxt() {
      return this.filterBy.sortBy
    },
    availableGigs() {


      return this.gigs.length
    },
  },


  watch: {
    "$route.query.": {
      handler() {
        const filterBy = this.$route.query
        if (filterBy.category) this.filterBy.category = filterBy.category
        if (filterBy.title) this.filterBy.title = filterBy.title

        this.$emit('setFilterBy', { filterBy })
      },
      deep: true,
      immediate: true
    },
  },
}
</script>
