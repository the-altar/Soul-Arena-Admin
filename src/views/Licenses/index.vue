<template>
  <div class="flex flex-col">
    <h1>Assign a license</h1>

    <FormulateForm @submit="submit">
      <div class="flex">
        <div class="flex flex-col">
          <MissionBase :charIds="charIds" :license="license" />
          <Uploader :filename="license.banner" :label="'License picture'" />
        </div>

        <div class="flex">
          <div class="flex flex-col">
            <button @click.prevent="license.goals.push({})">
              Add new goal
            </button>
            <div
              v-for="(goal, key) in license.goals"
              :key="key"
              @click="setGoal(goal)"
            >
              ++ goal #{{ key + 1 }}
            </div>
          </div>

          <div v-if="goal">
            <MissionGoal :goal="goal" :charIds="charIds" />
          </div>
        </div>
      </div>

      <FormulateInput class="btn" type="submit" label="Save" />
    </FormulateForm>
  </div>
</template>

<script>
import Axios from "axios";
import computed from "./script/computed";
import watchers from "./script/watchers";

import MissionBase from "./missionBase";
import MissionGoal from "./missionGoal";
import Uploader from "@/components/common/uploader.module.vue";
export default {
  data() {
    return {
      license: {
        goals: [],
      },
      goal: null,
      charIds: {},
      isNew: true,
    };
  },
  components: {
    MissionGoal,
    MissionBase,
    Uploader,
  },
  computed,
  methods: {
    setGoal(g) {
      this.goal = g;
    },
    async submit() {
      const values = [
        this.license.name,
        this.license.description,
        JSON.stringify(this.license.goals),
        this.license.level_requirement,
        this.license.unlocked_entity,
        this.license.cost,
        this.license.banner,
        this.license.released || false
      ];

      try {
        let res;
        if (this.isNew) res = await this.$axios.post("/mission/create", values);
        else {
          values.push(this.license.id);
          res = await this.$axios.post("/mission/update", values);
        }
        if (res.data.success) alert("Uploaded!");
        else alert("...failed :(");
      } catch (err) {
        console.log(err)
        alert("Something went wrong!");
      }
    },
  },
  watchers,
  async created() {
    const res = await Axios.get("/character/ids");
    const p = {};
    res.data.forEach((e) => {
      p[e.id] = e.name;
    });
    this.charIds = p;
    if (this.$route.params.id === "new")
      this.license.banner = generateRandomString();
    else {
      const r = await this.$axios.get("/mission/" + this.$route.params.id);
      this.license = r.data.mission;
      this.isNew = false;
    }
  },
};

function generateRandomString() {
  return (
    "m__" +
    Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 10)
  );
}
</script>

<style lang="scss">
@import "./style";
</style>