<template>
  <div v-if='char && skillIdList !== null'>
    <h1>Skill Target Modification</h1>
    <FormulateForm @submit='eventHandler'>
      <div class='formulate'>
        <General :data='effect'></General>
        <div>
          <FormulateInput
            v-model.number='effect.newTarget'
            type='select'
            :options='targetModeTypes'
            label='Select a new target'
            help='This new value will replace the old one'
          />
          <FormulateInput
            v-model='effect.targetSpecificSkill'
            type='checkbox'
            label='Target an specific skill?'
          />
          <FormulateInput
            v-model.number='effect.specificSkillIndex'
            v-if='effect.targetSpecificSkill'
            type='select'
            :options='skillIdList'
            label='Target skill'
            help='Which skill should be modified'
          />
        </div>
      </div>
      <FormulateInput class='btn' type='submit' label='Save changes' />
    </FormulateForm>
  </div>
</template>

<script>
import Axios from "axios";
import General from "./base";
import mixin from "./mixin";
export default {
  data() {
    return {
      skillIdList: null,
    };
  },
  components: { General },
  mixins: [mixin],
  async created() {
    try {
      const a = await Axios.get("/skill/ids");
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

<style lang="scss" scoped>
.formulate {
  display: flex;
}
</style>