<template>
  <div v-if='char && skillIdList'>
    <h1>Reset Cooldown</h1>
    <FormulateForm @submit='eventHandler'>
      <div class='flex'>
        <Base :data='effect' />
        <div>
          <FormulateInput
            label='target specific skill'
            help='If selected only the specified skill will be affected'
            type='checkbox'
            v-model='effect.specificSkill'
          />
          <FormulateInput
            v-if='effect.specificSkill'
            label='targeted skill id'
            type='select'
            :options='skillIdList'
            v-model.number="effect.skillId"
          />
        </div>
      </div>

      <FormulateInput class='btn' type='submit' label='Save changes' />
    </FormulateForm>
  </div>
</template>

<script>
import axios from "axios";
import Base from "./base";
import mixin from "./mixin";
export default {
  mixins: [mixin],
  components: { Base },
  async created() {
    try {
      const a = await axios.get("/skill/ids");
      const mapped = {};
      a.data.forEach((e) => {
        mapped[e.id] = e.name;
      });
      this.skillIdList = mapped;
    } catch (err) {
      alert(err);
    }
  },
};
</script>

<style>
</style>