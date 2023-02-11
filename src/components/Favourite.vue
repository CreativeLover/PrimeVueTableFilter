<template>
  <div>
    <h1 class="pl-6 py-3 text-xl text-1 font-bold">{{ title }}</h1>
    <div
      class="px-6 py-3 cursor-pointer"
    >
      <Player :player="player" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Player from "./Player.vue";
import { getplayer } from "../api/userRest";

export default {
  name: "Favourite",
  components: {
    Player,
  },
  data() {
    return {
      title: "Favourite list",
      players: [],
    };
  },
  computed: {
    sortedPlayers: function () {
      const currentSort = this.currentSort;
      return this.players.sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === "desc") modifier = -1;
        if (a[currentSort] === null)
          -(b[currentSort] === null) || a[currentSort] < b[currentSort]
            ? 1
            : -1;
        else
          return a[currentSort] > b[currentSort] ? 1 * modifier : -1 * modifier;
        return 0;
      });
    },
  },
  methods: {
    async loadCoachReports() {
      this.players = await getplayer();
    },
  },
  async created() {
    await this.loadCoachReports();
  },
};
</script>

<style></style>
