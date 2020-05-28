<template>
  <section class="effects">

    <Menu
      @update_skill_index='updateSkillIndex'
      :skillIndex='sIndex'
    />
    <EffectList
      :eIndex='eIndex'
      :sIndex='sIndex'
      v-if="$store.state.character.skills[sIndex].effects.length"
      class="effects__main"
    >
    </EffectList>

  </section>
</template>

<script>
import Menu from "./_sideMenu";
import EffectList from "./_effectsList";

export default {
  props: ["sIndex"],
  data() {
    return {
      eIndex: 0,
      currentComponent: ["EffectList"]
    };
  },
  methods: {
    updateSkillIndex(e) {
      this.eIndex = e;
    }
  },
  components: {
    Menu,
    EffectList,
  }
};
</script>
