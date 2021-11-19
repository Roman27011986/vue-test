<template>
  <div class="wrapper-input">
    <input
      v-bind="$attrs"
      v-model="price"
      type="number"
      class="custom-input"
      :class="!isValid && 'custom-input--error'"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "CustomInput",

  data() {
    return {
      price: "",
      isValid: true,
      error: "",
    };
  },
  inject: ["form"],

  props: {
    // value: {
    //   type: String,
    //   default: "",
    // },

    errorMessage: {
      type: String,
      default: "",
    },

    rules: {
      type: Array,
      default: () => [],
    },
  },

  mounted() {
    if (!this.form) return;
    this.form.registerInput(this);
  },
  beforeDestroy() {
    if (!this.form) return;
    this.form.unRegisterInput(this);
  },
  methods: {
    validete(value) {
      this.isValid = this.rules.every((rule) => {
        const { hasPassed, message } = rule(value);
        if (!hasPassed) {
          this.error = message || this.errorMessage;
        }
        return hasPassed;
      });
    },
  },

  watch: {
    price() {
      this.validete();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.wrapper-input {
  position: relative;
}

.custom-input {
  min-height: 40px;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;
  &::placeholder {
    color: inherit;
  }

  &--error {
    border-color: red;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: red;
    line-height: 1.3;
  }
}
</style>
