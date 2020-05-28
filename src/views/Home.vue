
<template>
  <div class="character">
    <div>
      <img
        v-for="(char, key) in characters"
        :key="key"
        :src="'/img/game/'+char.facepic+'.jpg'"
        @click="editCharacter(char)"
      >
    </div>
    <div>
      <button @click="toCharacterPage">Create new character</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      characters: []
    };
  },
  methods: {
    editCharacter(char) {
        this.setChar(char)
        this.$router.push({name: 'NewCharacter'})
    },
    toCharacterPage(){
      this.setChar({skills:[], energyGain:[]})
      this.$router.push({name: 'NewCharacter'})
    }
  },
  created() {
    axios
      .get("/character")
      .then(res => {
        this.characters = res.data.docs;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>