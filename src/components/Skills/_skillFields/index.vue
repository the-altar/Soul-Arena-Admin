<template>
  <section class='skillFields'>
    <div class='center'>
      <keep-alive>
        <SkillParams :index='index'></SkillParams>
      </keep-alive>

      <section class='skillType'>
        <p v-for='(type, key) in types' :key='key' :class="type+'--text'">
          {{type}}
          <input type='checkbox' v-model='params.type[type]' />
        </p>
      </section>
    </div>

    <button class='btn btn--large' @click='effectModal=true'>Edit effects</button>

    <Modal v-if='effectModal' v-on:closeModal='effectModal=false'>
      <EffectField :eIndex='effectIndex' :sIndex='index' />
    </Modal>
  </section>
</template>


<script>
import Modal from "@/components/Modal";
import EffectField from "@/components/Effects";
import SkillParams from "./_skillParams";

export default {
  props: ["index"],
  components: {
    Modal,
    EffectField,
    SkillParams
  },
  data() {
    return {
      selectedComponent: "SkillParams",
      effectModal: false,
      effectIndex: 0,
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
  computed: {
    params() {
      return this.$store.state.character.skills[this.index];
    }
  },
  watch: {
    index(n) {
      if (this.$store.state.character.skills[n].type === undefined) {
        this.$store.state.character.skills[n].type = {};
      }
    }
  },
  created() {
    if (this.$store.state.character.skills[this.index].type === undefined) {
      this.$store.state.character.skills[this.index].type = {};
    }
  }
};
</script>

<style lang="scss">
.skillFields {
  background-color: #212121;
}
</style>