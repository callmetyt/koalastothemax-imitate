<template>
  <div id="home">home页面:{{ count }}</div>
  <div class="warp">
    <button @click="start">开始</button>
    <button @click="close">停止</button>
    <button @click="restart">归零</button>
    <button @click="toProject">跳转</button>
  </div>
  <three-component
    :children="[
      1,
      2,
      [3, 3, [3.1, 3.2, 3.3], 3, 3],
      ['haha', 'c', 'a', 'l', 'l', 'm', 'e', 't', 'y', 't'],
    ]"
  ></three-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ThreeComponent from "../components/ThreeComponent.vue";
import useHomeCount from "../composables/homeCount";

export default defineComponent({
  setup() {
    const { count, start, close, restart } = useHomeCount();

    return {
      count,
      start,
      close,
      restart,
    };
  },
  methods: {
    toProject() {
      this.$router.push({ name: "project" });
    },
  },
  components: {
    ThreeComponent,
  },
});
</script>

<style scoped lang="scss">
#home {
  text-align: center;
}
.warp {
  width: max-content;
  margin: 0 auto 20px auto;
}
</style>
