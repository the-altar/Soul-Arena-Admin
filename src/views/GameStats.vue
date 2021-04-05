<template>
  <div>
    <div v-for="(char, key) in stats" :key="key">
      <li>
        <img :src="`https://game.soul-arena.app/uploads/${char.facepic}.jpg`" />
      </li>
      <li>
        <b>{{ char.name }}</b>
        {{ ((char.games_won / char.games_total) * 100).toFixed(2) }}%
      </li>
      <li>
        Games played: {{ char.games_total }} ({{
          ((char.games_total / parseInt(char.games_played)) * 100).toFixed(2)
        }}%)
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: [],
    };
  },
  async created() {
    const res = await this.$axios.get("/api/game-stats");
    this.stats = res.data;
  },
};
</script>

<style>
</style>