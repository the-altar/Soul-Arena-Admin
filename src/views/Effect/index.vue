<template>
  <component class="effect" :is="component"></component>
</template>

<script>
import components from "./script/components"
import computed from "./script/computed"
import methods from "./script/methods"
import watchers from "./script/watchers"

export default {
  data() {
    return {};
  },
  components,
  computed,
  methods,
  watchers
};
</script>

<style lang="scss" scoped>
    @import "./style";
</style>