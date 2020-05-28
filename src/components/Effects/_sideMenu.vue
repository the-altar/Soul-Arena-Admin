<template>
  <div class="container__side">
    <button class="btn" @click="addSkillEffect(skillIndex)">New Effect</button>
    <div
      class="menu__effect__list"
      v-for="(e, key) in charSkillEffect(skillIndex)"
      :key="key"
      @click.self="showEffect(key)"
    >
      Effect #{{key}} 
      <button @click.self="deleteEffect(key)" class="delete">x</button>
    </div>
  </div>
</template>

<script>
export default {
    props:['skillIndex'],
    methods:{
      showEffect(effectIndex){
        this.$emit('update_skill_index', effectIndex)
      },
      deleteEffect(effectIndex){
        this.$store.commit('character/DELETE_EFFECT', {
          effectIndex: effectIndex,
          skillIndex: this.skillIndex
        })
      }
    }
}
</script>

<style lang="scss">
  .menu {
    &__effect{
      &__list {
        width: 100px;
        height: 40px;
        background-color: #2b2b2b;
        text-align: center;
        line-height: 40px;
        margin: 5px;
        border-radius: 10px;
        color: #fafafa;
        font-size: 13px;
      }
    }
  }
</style>