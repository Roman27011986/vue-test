<template>
  <div id="app">
    <div class="content">
      <AppHeader />
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>
<script>
import AppHeader from "./components/Header.vue";
import AppFooter from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: Rubik;
}

.content {
  flex-grow: 1;
  padding-top: 120px;
}

.title {
  margin-bottom: 20px;
}
</style>
