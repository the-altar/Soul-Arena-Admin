<template>
  <div v-if="asComponent" class="flex flex-col">
    <div class="center mb">
      <div>
        <FormulateInput
          v-if="!asComponent"
          v-model="skill.name"
          type="text"
          label="Skill name"
          placeholder="type it here"
        />
        <FormulateInput
          v-if="!asComponent"
          v-model.number="skill.description"
          type="textarea"
          label="Skill description"
          :options="classes"
        />
        <FormulateInput
          v-if="!asComponent"
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

        <RequiresSkillIdOnTarget :skill="skill" />
        <CannotBeUsedOnTargetOf :skill="skill" />
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

        <div class="skill-pics" v-if="!asComponent">
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
          v-if="!asComponent"
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

        <div>
          <FormulateInput
            v-model="skill.ignoresInvulnerability"
            type="checkbox"
            label="Ignores invulnerability"
            help="Skill will bypass invulnerabily when validating its targets"
          />
        </div>
      </div>

      <div v-if="!asComponent">
        <FormulateInput
          v-model.number="assignedEntity"
          @change="$emit('update-ae', assignedEntity)"
          type="select"
          :options="entities"
          placeholder="Select to assign this skill"
          label="Assigned to"
          help="which character owns this skill"
        />

        <FormulateInput
          @input="$emit('update-prio', priority)"
          v-model.number="priority"
          label="Priority"
          help="Order in which skills should be sorted"
        />
      </div>
    </div>
    <button @click.prevent="$emit('done', skill)">Save it</button>
  </div>

  <div v-else class="center mb">
    <div>
      <FormulateInput
        v-if="!asComponent"
        v-model="skill.name"
        type="text"
        label="Skill name"
        placeholder="type it here"
      />
      <FormulateInput
        v-if="!asComponent"
        v-model.number="skill.description"
        type="textarea"
        label="Skill description"
        :options="classes"
      />
      <FormulateInput
        v-if="!asComponent"
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

      <RequiresSkillIdOnTarget :skill="skill" />
      <CannotBeUsedOnTargetOf :skill="skill" />
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

      <div class="skill-pics" v-if="!asComponent">
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
        v-if="!asComponent"
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

      <div>
        <FormulateInput
          v-model="skill.ignoresInvulnerability"
          type="checkbox"
          label="Ignores invulnerability"
          help="Skill will bypass invulnerabily when validating its targets"
        />
      </div>
    </div>

    <div v-if="!asComponent">
      <FormulateInput
        v-model.number="assignedEntity"
        @change="$emit('update-ae', assignedEntity)"
        type="select"
        :options="entities"
        placeholder="Select to assign this skill"
        label="Assigned to"
        help="which character owns this skill"
      />

      <FormulateInput
        @input="$emit('update-prio', priority)"
        v-model.number="priority"
        label="Priority"
        help="Order in which skills should be sorted"
      />
    </div>
  </div>
</template>

<script>
import Uploader from "@/components/common/uploader.module.vue";
import RequiresSkillIdOnTarget from "@/views/Skill/skill.requireOnTarget.vue";
import CannotBeUsedOnTargetOf from "@/views/Skill/skill.cannotBeUsedOnTargetOf.vue";
export default {
  components: { Uploader, RequiresSkillIdOnTarget, CannotBeUsedOnTargetOf },
  props: ["data", "assignedEntity", "priority", "charIds", "asComponent"],
  computed: {
    skill() {
      return this.data;
    },
    costTypes: function () {
      return this.$store.getters["enums/getEnum"]("costTypings");
    },
    skillCost: function () {
      if (this.char) {
        return this.char.skills[this.skillIndex].cost;
      }
      return false;
    },
    reiatsuCost: function () {
      return this.$store.getters["enums/getEnum"]("reiatsuTypings");
    },

    classes: function () {
      return this.$store.getters["enums/getEnum"]("skillClassTypings");
    },

    controlClasses: function () {
      return this.$store.getters["enums/getEnum"]("controlTypings");
    },

    targetClasses: function () {
      return this.$store.getters["enums/getEnum"]("targetModeTypings");
    },

    pokemonTypes: function () {
      return this.$store.getters["enums/getEnum"]("pokemonTypings");
    },

    effectTypes: function () {
      return this.$store.getters["enums/getEnum"]("effectTypings");
    },

    effectTypesEnums: function () {
      return this.$store.getters["enums/getEnum"]("effectTypings");
    },

    entities: function () {
      if (!this.charIds) return {};
      let b = {};
      for (const obj of this.charIds) {
        b[obj.id] = obj.name;
      }
      return b;
    },

    skillEffects: function () {
      return this.skill.effects;
    },
  },
};
</script>

<style></style>
