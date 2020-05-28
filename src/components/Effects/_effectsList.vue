<template>
  <section v-if='!effectType'>
    <button
      class='effects__list__btn'
      v-for='(effect, key) in effects'
      :key='key'
      @click='setEffectType(effect)'
    >{{effect}}</button>
  </section>

  <EffectParams v-else :eType='effectName' :sIndex='sIndex' :eIndex='eIndex' />
</template>

<script>
import EffectParams from "./_effectParams";
export default {
  props: ["eIndex", "sIndex"],
  data() {
    return {
      selectedEffect: false,
      effects: [
        "Damage",
        "Invulnerability",
        "Counter",
        "Healing",
        "IgnoreEffect",
        "ModSkillParam"
      ]
    };
  },
  components: {
    EffectParams
  },
  computed: {
    effectType() {
      return this.selectedEffect;
    },
    params() {
      return this.$store.state.character.skills[this.sIndex].effects[
        this.eIndex
      ];
    },
    effectName() {
      return Object.keys(this.params.type)[0];
    }
  },
  methods: {
    setEffectType(type) {
      this.params.type[type] = true;

      if (this.params.type.Damage) {
        this.$store.commit("character/START_DAMAGE_TYPE", {
          sIndex: this.sIndex,
          eIndex: this.eIndex
        });
      }

      this.selectedEffect = true;
    }
  },
  watch: {
    eIndex: function(n) {
      if (
        !Object.keys(
          this.$store.state.character.skills[this.sIndex].effects[n].type
        ).length
      )
        this.selectedEffect = false;
      else this.selectedEffect = true;
    }
  },
  created() {
    if (!Object.keys(this.params.type).length) return;
    this.selectedEffect = true;
  }
};
</script>