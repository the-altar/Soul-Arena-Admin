<template>
  <div>
    <h1>Licenses!</h1>
    <div>
      <div v-for="mission in missions" :key="mission.id">
        <p>
          {{ mission.name }}, ({{ mission.id }})
          <br />
          <button @click="$router.push({ path: `/license/${mission.id}` })">
            Edit
          </button>
          <button @click="deleteMission(mission.id, mission.banner)">
            Delete
          </button>
        </p>
      </div>
    </div>
    <button @click="$router.push({ path: `/license/new` })">
      Create new one!
    </button>
  </div>
</template>

<script>
import components from "./script/components";
import computed from "./script/computed";
import watchers from "./script/watchers";

export default {
  data() {
    return {
      missions: [],
    };
  },
  components,
  computed,
  watchers,
  methods: {
    async deleteMission(id, banner) {
      try {
        await this.$axios.delete(`/mission/${id}/${banner}`);
        const r = await this.$axios.get("/mission");
        if (!r.data.success) alert("FAILED TO RETRIEVE MISSIONS");
        this.missions = r.data.missions;
      } catch (e) {
        alert(e);
      }
    },
  },
  async created() {
    try {
      const r = await this.$axios.get("/mission");
      if (!r.data.success) alert("FAILED TO RETRIEVE");
      this.missions = r.data.missions;
    } catch (err) {
      alert(err);
    }
  },
};
</script>

<style lang="scss">
@import "./style";
</style>