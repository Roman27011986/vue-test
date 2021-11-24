<template>
  <div id="app">
    <!-- <notifications /> -->
    <div class="content">
      <AppHeader />
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>
<script>
import AppHeader from "./components/header/index.vue";
import AppFooter from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  // mounted() {
  //   console.log(this.$store.state.userName);
  // },
  mounted() {
    // this.$notify({
    //   group: "foo",
    //   title: "Important message",
    //   text: "Hello user! This is a notification!",
    // });
    console.log(this.$store.getters["auth/isLoggedIn"]);
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
}

.title {
  margin-bottom: 20px;
}
</style>
