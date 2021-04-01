<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  mounted() {
    this.$router.push({ name: "project" });
  },
});
</script>

<style lang="scss" scoped>
#app {
  img {
    display: block;
    margin: 0 auto;
  }
}
</style>
