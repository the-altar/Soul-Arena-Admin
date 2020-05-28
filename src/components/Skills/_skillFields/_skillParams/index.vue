<template>
  <div class='params'>
    <NamePicCost :index='index' />
    <section class='paramsSection'>
      <div>
        <SelectClass :index='index' />
        <Cooldown :index='index' />
        <input @change='uploadSkillBanner' type='file' ref='file' />
      </div>
      <Description :index='index' />
    </section>
  </div>
</template>

<script>
import NamePicCost from "./_namePicCost";
import SelectClass from "./_select";
import Description from "./_description";
import Cooldown from "./_cooldown";

export default {
  components: {
    NamePicCost,
    SelectClass,
    Description,
    Cooldown
  },
  props: ["index"],
  methods: {
    uploadSkillBanner(event) {
      this.preview = URL.createObjectURL(event.target.files[0]);
      let filename;

      if (this.charSkills[this.index].banner != undefined) {
        filename = this.charSkills[this.index].banner;
      } else {
        filename = Math.random()
          .toString(36)
          .substr(2, 10);
        this.charSkills[this.index].banner = filename;
      }

      this.$store.commit("files/ADD_FILE", {
        filename: filename,
        file: event.target.files[0]
      });
    }
  }
};
</script>

<style lang="scss">
.params {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  &Section {
    display: flex;
    margin: 1rem;
  }
}
</style>