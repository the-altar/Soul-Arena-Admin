<template>
  <div v-if="skill" class="skill-container">
    <h1>{{ skill.name }}, {{ $route.params.id }}</h1>

    <FormulateForm @submit="submitHandler" class="skill">
      <div class="center mb">
        <div>
          <FormulateInput
            v-model="skill.name"
            type="text"
            label="Skill name"
            placeholder="type it here"
          />
          <FormulateInput
            v-model.number="skill.description"
            type="textarea"
            label="Skill description"
            :options="classes"
          />
          <FormulateInput
            v-model.number="skill.class"
            type="select"
            label="Select a class for this skill"
            :options="classes"
          />
          <FormulateInput
            v-model.number="skill.persistence"
            type="select"
            label="Select a persistence class for this skill"
            :options="controlClasses"
          />
          <FormulateInput
            v-model.number="skill.targetMode"
            type="select"
            label="Select a targeting mode"
            :options="targetClasses"
          />
        </div>

        <div class="center center-col">
          <div class="skill-cost">
            <FormulateInput
              class="skill-cost-item"
              v-model.number="skill.cost[x - 1]"
              v-for="x in 5"
              :key="x"
              type="number"
              validation="required|number|between:-1,20"
              :help="`${reiatsuCost[x - 1]}`"
            />
          </div>

          <div class="skill-cooldown">
            <FormulateInput
              v-model.number="skill.baseCooldown"
              name="baseCooldown"
              type="number"
              label="Base Cooldown"
            />
            <FormulateInput
              v-model.number="skill.startCooldown"
              name="startCooldown"
              type="number"
              label="Starting Cooldown"
            />
          </div>

          <div class="skill-pics">
            <Uploader
              v-show="!effectDisplay"
              :filename="skill.skillpic"
              :label="'Select a picture (75x75)'"
            />
            <Uploader
              v-show="!effectDisplay"
              :filename="skill.banner"
              :label="'Select a banner (200x200)'"
            />
          </div>
        </div>

        <div class="skill-type">
          <FormulateInput
            v-model="skill.disabled"
            type="checkbox"
            label="Is disabled"
            placeholder="type it here"
          />
          <FormulateInput
            v-model="skill.harmful"
            type="checkbox"
            label="Is Harmful"
          />
          <div>
            <FormulateInput
              v-model="skill.uncounterable"
              type="checkbox"
              label="Is uncounterable"
              help="whether this skill can be countered or not. False by default"
            />
          </div>
        </div>

        <div>
          <FormulateInput
            v-model.number="assignedEntity"
            type="select"
            :options="entities"
            placeholder="Select to assign this skill"
            label="Assigned to"
            help="which character owns this skill"
          />

          <FormulateInput
            v-model.number="priority"
            label="Priority"
            help="Order in which skills should be sorted"
          />
        </div>
      </div>
      <button @click="displayEffects" class="btn">Effects</button>
      <FormulateInput class="btn" type="submit" label="Save changes" />
    </FormulateForm>

    <Effect
      v-if="effectDisplay"
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
    if (this.$route.params.id !== "new") {
      try {
        const id = this.$route.params.id;
        const skill = await this.$axios.get(`/skill/${id}`);
        const ids = await this.$axios.get("/character/ids");
        this.charIds = ids.data;
        this.skill = skill.data.data;
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
          type: [],
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

<style lang="scss" scoped>
@import "./style";
</style>