<template>
  <div>
    <CharControlPanel @comp-selection='(comp)=>{selectedComponent = comp}'/>
    <keep-alive>
      <component
        :is="selectedComponent"
        class="container__big"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
import CharControlPanel from "@/components/CharControlPanel"
import CharacterProfile from "@/components/Profile";
import CharacterSkills from "@/components/Skills";

export default {
  components:{
    CharControlPanel,
    CharacterProfile,
    CharacterSkills
  },
  data() {
    return {
      selectedComponent: "CharacterProfile",
    };
  },
};
</script>

<style lang="scss">
</style>