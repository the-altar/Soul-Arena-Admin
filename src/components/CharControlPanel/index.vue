<template>
  <div class="container__side">
    
    <img :src="preview || '/img/game/'+charFacepic+'.jpg'">
    
    <div>
      <input
        type="file"
        ref="file"
        style="display: none"
        @change="fileUpload"
      >
      <button class="btn" @click="$refs.file.click()">Add Avatar</button>
    </div>

    <button class="btn" @click="emitCompSelection('CharacterProfile')">Profile</button>
    <button class="btn" @click="emitCompSelection('CharacterSkills')">Skills</button>
    <button class="btn" @click="showProgress()">Save</button>
    <button class="btn" @click='deleteChar()'>delete</button>
    <button class="btn" @click="checkUploads()">upload files</button>
 
  </div>
</template>

<script>
import components from "./script/components";
import computed from "./script/computed";
import methods from "./script/methods";
import watchers from "./script/watchers";

export default {
  data() {
    return {
      preview:false
    }
  },
  components,
  computed,
  methods,
  watchers
};
</script>

<style lang="scss">
@import "./style";
</style>