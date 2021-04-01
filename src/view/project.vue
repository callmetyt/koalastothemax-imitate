<template>
  <div id="project">
    <button class="back" @click="back">返回</button>
    <div class="warp">
      <split-cricle
        :height="height"
        :width="width"
        :x="1"
        :y="1"
        :layer="6"
      ></split-cricle>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import splitCricle from "../components/splitCricle.vue";

export default defineComponent({
  name: "project",
  setup() {
    let height = 516,
      width = 512;

    return {
      height,
      width,
    };
  },
  methods: {
    back() {
      this.$router.push({ name: "home" });
    },
  },
  components: {
    "split-cricle": splitCricle,
  },
});
</script>

<style scoped lang="scss">
#project {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgb(202, 199, 199);
  .back {
    margin-bottom: 10px;
  }
  .warp {
    height: 516px;
    width: 512px;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
