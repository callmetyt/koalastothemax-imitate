<template>
  <div class="warp">
    <span class="text">{{ children[0] }} </span>
    <button v-if="hasChildren" @click="showChildren = !showChildren">
      展开
    </button>
    <ul v-if="showChildren">
      <li v-for="item in childrenData" :key="item">
        <three-component
          :children="Array.isArray(item) ? item : [item]"
        ></three-component>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from "vue";

export default defineComponent({
  name: "ThreeComponent",
  props: {
    children: {
      type: Array,
      default: [],
    },
  },
  setup(props) {
    const hasChildren = computed(() => props.children.length !== 1);
    const childrenData = computed(() => {
      let tmp = [...props.children];
      tmp.shift();
      return tmp;
    });
    let showChildren = ref(false);

    return {
      hasChildren,
      showChildren,
      childrenData,
    };
  },
});
</script>

<style scoped lang="scss">
.warp {
  span {
    margin-right: 10px;
  }
}
</style>
