<template>
  <section class="auth-section">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "AuthSection",
};
</script>

<style lang="scss" scoped>
.auth-section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("../../assets/img/auth-bg.jpg") no-repeat;
  min-height: calc(100vh - 30px);
  background-size: cover;
  background-position: center;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(42, 42, 42, 0.561);
    z-index: -1;
  }
}
</style>
