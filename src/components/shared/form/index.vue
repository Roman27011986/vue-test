<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "Form",

  provide() {
    return {
      form: this,
    };
  },
  data() {
    return {
      inputs: [],
    };
  },
  methods: {
    regiserInput(input) {
      this.inputs.push(input);
    },

    unRgisterInput(input) {
      this.inputs.filter((item) => item !== input);
    },
  },
};
</script>

<style lang="scss" scoped></style>
