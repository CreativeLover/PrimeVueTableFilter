<template>
  <div>
    <h1 class="w-96 mt-24 ml-9">Search Coach</h1>
    <!-- Search Btn-->
    <div class="flex justify-between w-96 mt-3 ml-9">
      <input
        type="text"
        class="border-2 border-1 pl-3"
        v-model="search_coach"
      />
    </div>
    <!-- End Search Btn -->
    <!-- Search Results -->
    <div
      class="pl-12 pt-3 coach_list"
      v-for="(coach, id) in search_coaches"
      :key="id"
    >
      <input type="checkbox" />
      <span class="pl-2">{{ coach }}</span>
    </div>
    <div class="ml-9 mt-3">
      {{ search_result }}
    </div>
    <!-- End Show Search Results -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      allCoaches: [],
      search_coach: '',
      search_coaches: [],
      search_query: '',
      search_result: '',
    }
  },
  methods: {},
  watch: {
    search_coach(val) {
      this.search_coach = val
      this.search_query = this.search_coach.toUpperCase()
      this.search_coaches = []
      this.search_result = ''
      this.allCoaches = this.$store.getters['getCoaches']

      this.allCoaches.map((coach) => {
        if (this.search_coach == '') {
          this.search_coaches = ''
          this.search_result = 'search keywords is  empty.'
        }
        if (
          coach.listname.toUpperCase().indexOf(this.search_query) > -1 &&
          this.search_coach !== ''
        ) {
          this.search_coaches.push(coach.listname)
        }
      })
    },
  },
  //   props: {
  //     search_query,
  //   },
}
</script>

<style></style>
