<template>
  <div class="circle" :style="size">
    <div
      class="init"
      v-if="!isSplited"
      @click="tmp"
      @mousemove="split"
      :style="size"
    ></div>

    <transition name="leftTop">
      <split-cricle
        v-if="isSplited"
        :height="childHeight"
        :width="childWidth"
        :x="childLeftTop.x"
        :y="childLeftTop.y"
        :layer="childLayer"
      ></split-cricle>
    </transition>

    <transition name="rightTop">
      <split-cricle
        v-if="isSplited"
        :height="childHeight"
        :width="childWidth"
        :x="childRightTop.x"
        :y="childRightTop.y"
        :layer="childLayer"
      ></split-cricle
    ></transition>

    <transition name="leftBottom">
      <split-cricle
        v-if="isSplited"
        :height="childHeight"
        :width="childWidth"
        :x="childLeftBottom.x"
        :y="childLeftBottom.y"
        :layer="childLayer"
      ></split-cricle>
    </transition>

    <transition name="rightBottom">
      <split-cricle
        v-if="isSplited"
        :height="childHeight"
        :width="childWidth"
        :x="childRightBottom.x"
        :y="childRightBottom.y"
        :layer="childLayer"
      ></split-cricle>
    </transition>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import throttle from "../utils/throttle";
import colorFun from "../color/colorArr";
import childProps from "../composables/childProps";

export default defineComponent({
  name: "splitCricle",
  props: {
    height: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
    layer: {
      type: Number,
      require: true,
    },
  },
  setup(props) {
    let {
      childHeight,
      childWidth,
      childLeftBottom,
      childLeftTop,
      childRightTop,
      childRightBottom,
      childLayer,
    } = childProps(props);

    let { x, y } = props;

    let size = {
      "--height": props.height + "px",
      "--width": props.width + "px",
      "--bkgColor": colorFun(x, y),
    };

    let split = throttle(function () {
      if (props.height > 8 && isSplited.value === false) {
        isSplited.value = true;
      }
      // console.log("split!");
    }, 150);

    let isSplited = ref(false);

    return {
      childHeight,
      childWidth,
      size,
      split,
      isSplited,
      childLeftTop,
      childLeftBottom,
      childRightTop,
      childRightBottom,
      childLayer,
      x,
      y,
    };
  },
  methods: {
    tmp() {
      console.log(this.x, this.y);
    },
  },
});
</script>

<style scoped lang="scss">
.circle {
  width: var(--width);
  height: var(--height);
  display: flex;
  flex-wrap: wrap;
  .init {
    width: var(--width);
    height: var(--height);
    // background-color: #eeb76b;
    background-color: var(--bkgColor);
    border-radius: 50%;
  }
  .leftTop-enter-from {
    transform: translate(45%, 45%);
  }
  .rightTop-enter-from {
    transform: translate(-45%, 45%);
  }
  .leftBottom-enter-from {
    transform: translate(45%, -45%);
  }
  .rightBottom-enter-from {
    transform: translate(-45%, -45%);
  }
  .rightTop-enter-active,
  .leftTop-enter-active,
  .leftTop-enter-active,
  .rightBottom-enter-active {
    transition: all 0.3s ease-out;
  }
}
</style>
