<template>
  <div class='align-horizontal'>
    <section class='profile'>
      <div class='profile__title'>
        <label for='profile__title__name'>Codename:</label>
        <input
          id='profile__title__name'
          class='profile__title__name'
          v-model='$store.state.character.name'
          type='text'
          placeholder="Character's name"
        />
      </div>

      <input type='file' ref='file' @change='fileUpload' />
      <div class='profile__title'>
        Release status:
        <select v-model.number='$store.state.character.releaseStatus'>
          <option value='0'>Staging</option>
          <option value='1'>Released</option>
        </select>
      </div>

      <textarea
        class='profile__description__textarea'
        v-model='$store.state.character.description'
        cols='30'
        rows='10'
        placeholder="Character's profile description"
      ></textarea>

      <input
        v-model.number='$store.state.character.hitPoints'
        type='number'
        placeholder='initial hit points'
      />
      <div>
        <div class='profile__energy' v-for='(energy, key) in energies' :key='key'>
          <img :src='"@/assets/img/" + energy + ".png"' />
          <input type='checkbox' :value='key' v-model='$store.state.character.energyGain' />
        </div>
      </div>
    </section>

    <section>
      <p v-for="(type, key) in types" :key="key" :class="type+'--text'">
        {{type}}
        <input type="checkbox" v-model="params.type[type]">  
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      energies: ["speed", "strength", "mental", "spirit", "wild"],
      types: [
        "bug",
        "dark",
        "dragon",
        "electric",
        "fairy",
        "fighting",
        "fire",
        "flying",
        "ghost",
        "grass",
        "ground",
        "ice",
        "normal",
        "poison",
        "psychic",
        "rock",
        "steel",
        "water"
      ]
    };
  },
  methods: {
    fileUpload(event) {
      this.preview = URL.createObjectURL(event.target.files[0]);
      let filename;

      if (this.charBanner) {
        filename = this.charBanner;
      } else {
        filename = Math.random()
          .toString(36)
          .substr(2, 5);
        this.setCharBanner(filename);
      }

      this.$store.commit("files/ADD_FILE", {
        filename: filename,
        file: event.target.files[0]
      });
    }
  },
  computed:{
    params(){
      return this.$store.state.character
    }
  },
  created(){
    if(this.$store.state.character.type === undefined){
      this.$store.state.character.type = {}
    }
  }
};
</script>

<style lang="scss">
.profile {
  &__energy {
    display: inline-block;
  }

  &__title {
    height: 50px;
    width: 300px;
    color: #d6d6d6;
    margin: 5px;
    display: flex;
    justify-content: left;
    align-items: center;
    font-weight: bold;
    font-size: 14px;

    &__name {
      background-color: #2b2b2b;
      border: none;
      border-radius: 10px;
      margin-left: 1rem;
      width: 200px;
      height: 40px;
      font-size: 15px;
      text-align: center;
      color: #d6d6d6;
    }

    select {
      margin: 5px;
      background-color: #2b2b2b;
      border: none;
      color: #d6d6d6;
      width: 150px;
      height: 30px;
      border-radius: 10px;
      text-align: center;
    }
  }

  &__description {
    &__textarea {
      width: 50%;
      height: 180px;
      background-color: #2b2b2b;
      border: none;
      color: #d6d6d6;
      margin: 1rem;
    }
  }
}
</style>
