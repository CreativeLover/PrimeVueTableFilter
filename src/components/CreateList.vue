<template>
  <div class="flex">
    <div action="">
      <div class="ml-40 mt-6 mb-6 text-2xl text-1 font-bold pr-6">
        Create List
      </div>
      <div class="text-3xl px-6 py-6">{{ errorTitle }}</div>
      <input
        v-model="newlist.listname"
        class="h-10 w-96 ml-9 pl-3 border-2 border-1 rounded text-1"
        type="text"
        placeholder="Name"
        required="true"
      />
      <div>
        <input
          v-model="newlist.description"
          class="h-10 w-96 mt-6 pl-3 ml-9 border-2 border-1 rounded text-1"
          type="text"
          placeholder="Description"
          required="true"
        />
      </div>
      <div
        class="pl-12 pt-3 coach_list"
        v-for="(coach, id) in coaches"
        :key="id"
      >
        <input type="checkbox" />
        <span class="pl-2">{{ coach.listname }}</span>
      </div>
      <div>
        <button class="button mt-6 ml-12 px-6 py-2 border" @click="clickLearn">
          Learn more
        </button>
        <button
          class="button mt-6 ml-12 px-6 py-2 border"
          v-if="learnMore == false"
          @click="clickless"
        >
          Show less
        </button>
      </div>
      <div class="flex justify-between w-96 mt-6 ml-9">
        <button
          class="bg-white-400 border-2 border-1 px-12 py-2 rounded border hover:duration-500 hover:bg-1 hover:text-white mr-9"
        >
          Cancel
        </button>
        <button
          class="bg-1 border-2 border-1 px-12 py-2 rounded border hover:duration-500 hover:bg-white-400 hover:text-white mr-9"
          :class="{ block: emptyFlag }"
          @click="create"
        >
          Create
        </button>
      </div>
    </div>
    <!-- Start Search -->
    <div>
      <SearchCoach />
    </div>
    <!-- End Search -->
    <!-- <div class="flex justify-end items-start -mt-96">
      <Favorite />
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
import SearchCoach from './SearchCoach.vue'
// import Favorite from './Favourite.vue'
import {
  getlist,
  addplayer,
  getlesslist,
  getNewlist,
  getAgain,
} from '../api/userRest'

export default {
  name: 'CreateList',
  components: {
    // Favorite,
    SearchCoach,
  },
  data() {
    return {
      learnMore: false,
      increaseNumber: 0,
      againClick: false,
      emptyFlag: true,
      newlist: {
        cse_coachid: '1',
        listname: '',
        description: '',
        favorite: '3',
      },
      coaches: [],
      allCoaches: [],
      coach: {},
      errorTitle: '',
      search_coach: '',
      search_coaches: [],
      search_query: '',
      search_result: '',
    }
  },

  async created() {
    this.coaches = await getNewlist()
    this.allCoaches = this.$store.getters['getCoaches']
    console.log('Coaches', this.allCoaches)
  },
  mounted() {},
  watch: {},
  methods: {
    async clickLearn() {
      setTimeout(() => {
        this.learnMore = false
      }, 100)
      const increaseNumber = (this.increaseNumber += 3)
      this.coaches = await getlist(this.increaseNumber)
    },
    async clickless() {
      if (this.increaseNumber < 5) {
        setTimeout(() => {
          this.learnMore = true
        }, 300)
      }
      const increaseNumber = (this.increaseNumber -= 3)
      this.coaches = await getlesslist(this.increaseNumber)
    },
    async reRender() {
      this.coaches = await getlist(this.increaseNumber)
    },
    async create() {
      if (this.newlist.listname !== '' && this.newlist.description !== '') {
        this.allCoaches = this.$store.getters['getCoaches']
        const all = this.allCoaches
        const check = all.find(
          (coach_one, index) => coach_one.listname == this.newlist.listname,
        )
        if (!check) {
          this.errorTitle = ''
          addplayer(this.newlist)
          this.$store.dispatch('addCoach', this.newlist)
          setTimeout(async () => {
            this.coaches = await getAgain(this.increaseNumber)
          }, 100)
          setTimeout(() => {
            this.newlist.listname = ''
            this.newlist.description = ''
          }, 500)
        } else {
          this.errorTitle =
            'List name is Error, Listname must be different from other listname'
          setTimeout(() => {
            this.newlist.listname = ''
            this.newlist.description = ''
          }, 500)
        }
      }
    },
  },
  computed: {
    latest() {
      return [...this.coaches].reverse()
    },
    getCoaches() {
      return this.$store.getters['getCoaches']
    },
  },
}
</script>
<style></style>
