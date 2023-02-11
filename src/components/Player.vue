<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mt-8 flex flex-col mx-8">
        <div class="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle">
            <div class="shadow-sm ring-1 ring-black ring-opacity-5">
              <!-- debug: sort={{currentSort}}, dir={{currentSortDir}} -->
              <table
                class="min-w-full border-separate rounded-full"
                style="border-spacing: 0;"
              >
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      Player
                    </th>
                    <th
                      @click="sortDesc('obj_armvelo_throw1')"
                      scope="col"
                      class="sticky cursor-pointer top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                    >
                      Arm Velocity (Throw 1)
                    </th>
                    <th
                      @click="sortDesc('obj_armvelo_throw2')"
                      scope="col"
                      class="sticky cursor-pointer top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                    >
                      Arm Velocity (Throw 2)
                    </th>
                    <th
                      @click="sortDesc('obj_armvelo_throw3')"
                      scope="col"
                      class="cursor-pointer sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Arm Velocity (Throw 3)
                    </th>
                    <th
                      @click="sortAsc('obj_poptime_throw1')"
                      scope="col"
                      class="cursor-pointer sticky top-0 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Pop Time (Throw 1)
                    </th>
                    <th
                      @click="sortAsc('obj_poptime_throw2')"
                      scope="col"
                      class="cursor-pointer sticky top-0 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Pop Time (Throw 2)
                    </th>
                    <th
                      @click="sortAsc('obj_poptime_throw3')"
                      scope="col"
                      class="cursor-pointer sticky top-0 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Pop Time (Throw 3)
                    </th>
                    <th
                      @click="sortDesc('obj_exitvelo_swing1')"
                      scope="col"
                      class="cursor-pointer tab-navigation sticky top-0 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                    >
                      Exit Velocity (Throw 1)
                    </th>
                    <th
                      @click="sortDesc('obj_exitvelo_swing2')"
                      scope="col"
                      class="cursor-pointer sticky top-0 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                    >
                      Exit Velocity (Throw 2)
                    </th>
                    <th
                      @click="sortDesc('obj_exitvelo_swing3')"
                      scope="col"
                      class="cursor-pointer sticky top-0 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Exit Velocity (Throw 3)
                    </th>
                    <th
                      scope="col"
                      class="cursor-pointer sticky top-0 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                    >
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr
                    v-for="player in sortedPlayers"
                    :key="player.cse_fastpitch_id"
                  >
                    <td
                      @click="
                        ;(each_player = player.player_profile.playerfirstname),
                          clickPlayer()
                      "
                      class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 border-b border-gray-200 text-justify"
                    >
                      {{ player.player_profile.playerfirstname }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TransitionRoot as="template" :show="open">
      <Dialog
        as="div"
        class="fixed inset-0 overflow-hidden"
        @close="this.open = false"
      >
        <div class="absolute inset-0 overflow-hidden">
          <DialogOverlay class="absolute inset-0" />

          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-700 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <div class="pointer-events-auto w-screen max-w-md">
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                >
                  <div class="px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          class="rounded px-2 py-2 bg-red text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          @click="open = false"
                        >
                          <span class="sr-only">Close panel</span>
                          <span>Close</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="relative mt-6 flex-1 px-4 sm:px-6">
                    <!-- Replace with your content -->
                    <div class="absolute inset-0 px-4 sm:px-6">
                      <div class="h-full" aria-hidden="true">
                        <span class="font-bold">
                          {{
                            sortedPlayers[indexPlayer].player_profile
                              .playerfirstname
                          }}
                          <!-- {{ player.player_profile.playerfirstname }} -->
                        </span>

                        <div class="mt-3 flex justify-center">
                          <button
                            class="bg-white-400 px-6 py-2 rounded border hover:duration-500 hover:bg-1 hover:text-white mr-9"
                          >
                            Add to list
                          </button>
                          <button
                            class="bg-1 px-6 py-2 text-white rounded hover:duration-500 hover:bg-white hover:text-1 hover:border-blue-600"
                          >
                            View Player Profile
                          </button>
                        </div>
                        <div class="pt-3 mx-3 w-80">
                          Create top-down slide animation using `Transition`
                          from ... February 27, 2021 Smooth sidebar toggle
                          animation with vuejs and tailwind January 22, 2021 How
                          to do width transition in Tailwind CSS ? - Stack
                          October 2, 2019
                        </div>
                      </div>
                    </div>
                    <!-- /End replace -->
                  </div>
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script>
import { ref } from 'vue'
import { getplayer } from '../api/userRest.js'
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
// const API_URL = `http://127.0.0.1:8000/products/getweeklyevents`
export default {
  data() {
    return {
      show: false,
      players: [],
      eventId: '',
      currentSort: '',
      currentSortDir: 'desc',
      each_player: '',
      indexPlayer: null,
    }
  },
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  setup() {
    const open = ref(false)

    return {
      open,
    }
  },
  computed: {
    sortedPlayers: function () {
      const currentSort = this.currentSort
      return this.players.sort((a, b) => {
        let modifier = 1
        if (this.currentSortDir === 'desc') modifier = -1
        if (a[currentSort] === null)
          -(b[currentSort] === null) || a[currentSort] < b[currentSort] ? 1 : -1
        else
          return a[currentSort] > b[currentSort] ? 1 * modifier : -1 * modifier
        return 0
      })
    },
  },
  async created() {
    await this.loadCoachReports()
    
    // setInterval(() => {
    //   console.log('each_player>>>', this.each_player)
    // }, 2000)
  },
  methods: {
    clickPlayer() {
      this.open = true
      this.indexPlayer = this.sortedPlayers.findIndex((each) => {
        return each.player_profile.playerfirstname === this.each_player
      })
      console.log('Index>>>', this.indexPlayer)
    },
    closeModal() {
      isOpen = false
    },
    openModal() {
      isOpen = true
    },
    sortDesc: function (s) {
      //if s == current sort, reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      }
      this.currentSort = s
    },
    sortAsc: function (s) {
      //if s == current sort, reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'desc' ? 'asc' : 'desc'
      }
      this.currentSort = s
    },
    async loadCoachReports() {
      this.players = await getplayer()
    },
    sortByAsc(prop) {
      this.players.sort(
        (a, b) =>
          (a[prop] === null) - (b[prop] === null) ||
          +(b[prop] > a[prop] ? -1 : 1),
      )
    },
    sortByDesc() {
      this.players.sort((a, b) => (b.value < a.value ? -1 : 1))
    },

    // capitalize(str) {
    //   return str.charAt(0).toUpperCase() + str.slice(1);
    // },
  },
  props: {
    player: {
      type: Object,
    },
  },
  // mounted() {
  //   this.$store.dispatch("loadEvents");
  // },
}
</script>
<style scoped>
.tab-navigation .active-class {
  background-color: #939393;
}
th.active {
  color: #fff;
}
</style>
