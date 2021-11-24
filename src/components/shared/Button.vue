<template>
  <button
    v-bind:type="typeBtn"
    :class="{ btn: true, 'btn--outlined': outlined }"
    :disabled="loading"
  >
    <CircleLoader v-if="loading" :width="40" :height="40" class="btn__loader" />
    <span class="btn__content" :class="contentStyle">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import CircleLoader from "../loaders/CircleLoader.vue";
export default {
  name: "Btn",
  components: {
    CircleLoader,
  },
  props: {
    typeBtn: {
      type: String,
      default: "button",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    contentStyle() {
      return {
        "btn__content--hiden": this.loading,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  display: inline-block;
  border: none;
  background-color: #ff662d;
  color: #fff;
  cursor: pointer;
  font-family: Rubik;
  transition: background-color 0.4s, color 0.4s;

  &:hover {
    background: #fff;
    color: #ff662d;
    border: 1px solid #ff662d;
  }

  &--outlined {
    background: none;
    border: 1px solid #ff662d;
    color: black;
  }

  &__content {
    &--hidden {
      opacity: 0;
    }
  }
  &__loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
