<template>
  <div v-if='char && skillIdList'>
    <h1>Alter Effect Value</h1>
    <FormulateForm @submit='eventHandler'>
      <div>
        <div class="flex">
          <Base :data='effect' />
          <div>
            <FormulateInput
              type='select'
              v-model.number="effect.targetSkillId"
              :options='skillIdList'
              label='Targeted Skill'
              help='Which Skill should be targeted by this'
            />
            <FormulateInput
              type='select'
              v-model.number="effect.effectType"
              :options='effectTypes'
              label='Targeted Effect'
              help='Which effect should be targeted by this'
            />

            <FormulateInput
              type='number'
              v-model.number="effect.value"
              :options='effectTypes'
              label='Alternate value'
            />

            <FormulateInput
              type='number'
              v-model.number="effect.incrementVal"
              label='Alternate increment'
            />
            
          </div>
        </div>
      </div>

      <FormulateInput class='btn' type='submit' label='Save changes' />
    </FormulateForm>
  </div>
</template>

<script>
import Axios from "axios";
import mixin from "./mixin";
import Base from "./base";
export default {
  mixins: [mixin],
  components: { Base },
  data() {
    return {
      skillIdList: null,
    };
  },
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
