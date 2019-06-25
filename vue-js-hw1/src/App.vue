<template>
  <div id="app">
    <MainHeader />
    <MainContainer />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import MainContainer from "./components/MainContainer.vue";

export default {
  name: "app",
  components: {
    MainHeader,
    MainContainer
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
