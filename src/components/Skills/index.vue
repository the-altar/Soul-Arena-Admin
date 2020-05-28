<script>
import SkillFields from "./_skillFields";
export default {
  data() {
    return {
      selectedSkill: 0,
      preview: {}
    };
  },
  components: {
    SkillFields
  },
  methods: {
    fileUpload(event) {
      this.preview[this.selectedSkill] = URL.createObjectURL(
        event.target.files[0]
      );
      let filename;

      if (this.charSkills[this.selectedSkill].skillpic) {
        filename = this.charSkills[this.selectedSkill].skillpic;
      } else {
        filename = Math.random()
          .toString(36)
          .substr(2, 10);
        this.charSkills[this.selectedSkill].skillpic = filename;
      }

      this.$store.commit("files/ADD_FILE", {
        filename: filename,
        file: event.target.files[0]
      });
    }
  },
  computed: {
    previewSkillPic() {
      return (
        this.preview[this.selectedSkill] ||
        "/img/game/" + this.charSkills[this.selectedSkill].skillpic + ".jpg"
      );
    }
  }
};
</script>

<template>
  <div class="character--side">
    <div class="container__side">
      <div class="skill__profile" v-if="charSkills.length">
        <img :src="previewSkillPic" />
        <div>
          <input type="file" ref="file" style="display: none" @change="fileUpload" />
          <button class="btn" @click="$refs.file.click()">upload img</button>
        </div>
      </div>

      <div class="skill__container" v-if="charSkills.length">
        <button
          class="skill"
          v-for="(skill, key) in charSkills"
          :key="key"
          @click="selectedSkill = key"
        >
          Skill {{key}}
        </button>
      </div>
      <button class="btn" @click="addCharSkill()">New Skill</button>
    </div>

    <SkillFields v-if="charSkills[selectedSkill]" class="container__big" :index="selectedSkill" />
  </div>
</template>

<style lang="scss">
.skill {
  color: #2b2b2b;
  cursor: pointer;
  width: 80px;
  height: 25px;
  margin: 1px;
  background-color: #c2c2c2;
  border-radius: 10px;
  border: none;
  margin: 2.5px;

  &__profile {
    text-align: center;
  }

  &__container {
    margin: 5px;
    text-align: center;
  }
}
</style>