<template>
    <router-view class="container"></router-view>
</template>

<script>
export default {
  data() {
    return {
      tabs: ["Characters", "Skills", "Missions"]
    };
  }
};
</script>


<style lang="postcss">
  @mixin center($direction:row){
    display: flex;
    flex-direcion: $direction;
    justify-content: center;
    align-items: center;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header {
    width: 100%;
    height: 20px;
    color: #fafafa;
    text-align: center;
    margin: 0;
  }

  html, body {
    background-color: #2b2b2b;
  }

  p {
    margin: 0;
    color: #fafafa;
    font-size: .8rem;
  }

  .align-horizontal {
    display: flex;
    flex-direction: row !important;
  }

  .delete {
    border: none;
    border-radius: 30%;
    background-color: #960014;
    color: #fafafa;
    text-align: center;
    width: 25px;
    height: 25px;
  }
</style>