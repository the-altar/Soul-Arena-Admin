<template>
  <div v-if="effects" class="effect" @click.self="close">
    <div class="effect-container">
      <div class="effect-container-top">
        <div class="flex" v-for="(e, key) in effects" :key="key">
          <button
            class="effect-btn"
            @click="
              $router.push(
                `/skills/${effectTypesEnums[e.type].toLowerCase()}/${e.id}`
              )
            "
          >
            <p>{{ effectTypesEnums[e.type] }}</p>
            <p>id: {{ e.id }}, priority: {{e.priority}}</p>
          </button>
          <button @click="deleteEffect(e.id, key)" class="remove">x</button>
        </div>
      </div>

      <div class="effect-container-bottom">
        <select v-model.number="newEffect">
          <option
            v-for="(effectType, k) in effectTypesEnums"
            :key="k"
            :value="k"
          >
            {{ effectType }}
          </option>
        </select>
        <button @click="createNewEffect()">Create new effect</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return { effects: null, newEffect: null };
  },
  props: ["skillId"],
  methods: {
    close() {
      this.$emit("close");
    },
    async createNewEffect() {
      try {
        await axios.post("/effect/new", [
          { type: this.newEffect },
          this.skillId,
        ]);
        this.getEffects();
      } catch (e) {
        alert(e);
      }
    },
    async deleteEffect(id, index) {
      try {
        await axios.delete(`/effect/${id}`);
        this.effects.splice(index, 1);
      } catch (err) {
        alert(err);
      }
    },
    getEffects() {
      axios
        .post("/effect", [Number(this.skillId)])
        .then((res) => {
          let ef = [];
          for (const e of res.data) {
            ef.push({ ...e.data, id: e.id, priority: e.priority });
          }
          this.effects = ef;
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
  computed: {
    effectTypesEnums() {
      return this.$store.getters["enums/getEnum"]("effectTypings");
    },
  },
  created() {
    this.getEffects();
  },
};
</script>

<style lang="scss" scoped>
.effect {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: #000000, $alpha: 0.5);

  &-btn {
    width: 200px;
    height: 50px;
    p {
      margin: 0;
    }
  }
  &-container {
    width: 600px;
    padding: 15px;
    background-color: gainsboro;
    border-radius:5px;
    &-top {
      width: 100%;
      height: 75%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
    }

    &-bottom {
      width: 100%;
      height: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.remove {
  background-color: firebrick;
  color: whitesmoke;
  width: 70px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid rgb(197, 197, 197);
  text-align: center;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
</style>