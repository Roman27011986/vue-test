<template>
  <span class="circle-loader">
    <svg
      :width="width"
      :height="height"
      :style="style"
      class="preloader-icon"
      viewBox="0 0 120 120"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="50" stroke-width="4" fill="none" />
    </svg>
  </span>
</template>

<script>
export default {
  name: "CircleLoader",
  props: {
    width: {
      type: [Number, String],
      default: 50,
    },
    height: {
      type: [Number, String],
      default: 50,
    },
    color: {
      type: String,
      default: "#fff",
    },
  },

  computed: {
    style() {
      return `stroke: ${this.color};`;
    },
  },
};
</script>

<style lang="scss" scoped>
.preloader-icon {
  stroke-dasharray: 0 250;
  animation: preloader 4s infinite;
}

@keyframes preloader {
  0% {
    stroke-dasharray: 0 250;
    transform: rotate(0);
  }
  50% {
    stroke-dasharray: 255 250;
    transform: rotate(650deg);
  }
  100% {
    stroke-dasharray: 0 250;
    transform: rotate(0);
  }
}
</style>
