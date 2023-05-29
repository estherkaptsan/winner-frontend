<template>
  <section class="up-filter">
    <h1 class="explore-title">{{ explore }}</h1>
  </section>
  <FloatingFilter :gigs="gigs" @setFilterBy="setFilterBy" />
</template>
<script>

import FloatingFilter from './FloatingFilter.vue'
export default {
  props: ['gigs'],

  data() {
    return {
      category: 'ALL'
    }
  },

  methods: {

    setFilterBy(filterBy) {

      console.log('check the filter', { ...filterBy })

      if (filterBy.filterBy.category) this.category = filterBy.filterBy.category
      else this.category = 'ALL'

      this.$emit('setFilterBy', { ...filterBy })
    },
  },

  computed: {

    explore() {

      return this.category
    },

  },
  components: {
    FloatingFilter
  }
}
</script>
