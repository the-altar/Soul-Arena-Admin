<template>
  <main class='home'>
    <div class='home-chars'>
      <div v-for='(char, k) in chars' :key='k' class='home-char'>
        <img :src="`http://game.lvh.me:8080/uploads/${char.data.facepic}.jpg`"  :alt='char.data.name' />
        <p class="home-char-order">
          Order: {{char.data.dexNumber}}, id:{{char.id}}
        </p>
        <router-link :to='`/character/${char.id}`'>Edit</router-link>
        <button @click='deleteChar(char.id)'>Delete</button>
      </div>
    </div>

    <div>
      <button @click='$router.push("/character/new")'>Create new character</button>
    </div>
  </main>
</template>

<script>
import components from "./script/components";
import computed from "./script/computed";
import methods from "./script/methods";
import watchers from "./script/watchers";
import axios from "axios";

export default {
  data() {
    return {
      chars: [],
    };
  },
  components,
  computed,
  methods,
  watchers,
  async created() {
    try {
      const res = await axios.get("/character");
      this.chars = res.data;
    } catch (err) {
      alert(err);
    }
  },
};
</script>

<style lang="scss">
@import "./style";
</style>