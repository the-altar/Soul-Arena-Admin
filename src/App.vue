<template>
  <router-view v-if="loaded" class="app"></router-view>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
    };
  },
  async created() {
    try {
      const enums = await this.$axios.get("/game-enums");
      this.$store.commit("enums/setEnums", enums.data);
      this.loaded = true;
    } catch (err) {
      alert(err);
    }
  },
};
</script>


<style lang="scss">
@import "./main.scss";
</style>