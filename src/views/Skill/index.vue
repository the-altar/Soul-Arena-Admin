<template>
  <div v-if="skill" class="skill-container">
    <h1>{{ skill.name }}, {{ $route.params.id }}</h1>

    <FormulateForm @submit="submitHandler" class="skill">
      <Body
        :data="skill"
        :assignedEntity="assignedEntity"
        :priority="priority"
        :charIds="charIds"
        :asComponent="asComponent"
        @update-ae="setAssignedEntity"
        @update-prio="setPriority"
      ></Body>
      <button @click="displayEffects" class="btn">Effects</button>
      <FormulateInput class="btn" type="submit" label="Save changes" />
    </FormulateForm>

    <Effect
      v-if="effectDisplay && !asComponent"
      :skillId="skillId"
      @close="effectDisplay = false"
    />
  </div>
</template>

<script>
import components from "./script/components";
import computed from "./script/computed";
import methods from "./script/methods";
import watchers from "./script/watchers";

export default {
  props: ["asComponent"],
  data() {
    return {
      skill: false,
      skillId: false,
      assignedEntity: 0,
      charIds: null,
      effectDisplay: false,
      newEffect: null,
      priority: 0,
    };
  },
  components,
  computed,
  methods,
  watchers,
  async created() {
    if (this.asComponent) {
      this.skill = {
        cost: [0, 0, 0, 0, 0],
        requiresSkillOnTarget: [],
        cannotBeUsedOnTargetOf: [],
      };
    } else if (this.$route.params.id !== "new") {
      try {
        const id = this.$route.params.id;
        const skill = await this.$axios.get(`/skill/${id}`);
        const ids = await this.$axios.get("/character/ids");
        this.charIds = ids.data;
        this.skill = skill.data.data;
        if (!this.skill.requiresSkillOnTarget) {
          this.$set(this.skill, "cannotBeUsedOnTargetOf", []);
        }

        if (!this.skill.cannotBeUsedOnTargetOf) {
          this.$set(this.skill, "cannotBeUsedOnTargetOf", []);
        }
        this.skillId = skill.data.id;
        this.priority = skill.data.priority;
        this.assignedEntity = skill.data.entity_id;
      } catch (err) {
        alert(err);
      }
    } else {
      try {
        const ids = await this.$axios.get("/character/ids");
        this.charIds = ids.data;
        this.skillId = null;
        this.assignedEntity = null;
        this.skill = {
          cost: [0, 0, 0, 0, 0],
          effects: [],
          requiresSkillOnTarget: [],
          cannotBeUsedOnTargetOf: [],
          skillpic: generateRandomString(),
          banner: generateRandomString(),
        };
      } catch (err) {
        alert(err);
      }
    }
  },
};

function generateRandomString() {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);
}
</script>

<style lang="scss">
@import "./style";
</style>