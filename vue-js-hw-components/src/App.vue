<template>
  <div id="app">
    <MainHeader />
    <main class="main-container">
      <FilterBar />
      <MovieList />
    </main>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import FilterBar from "./components/FilterBar.vue";
import MovieList from "./components/MovieList.vue";

export default {
  data() {
    return {
      name: "app"
    };
  },
  components: {
    MainHeader,
    FilterBar,
    MovieList
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: sans-serif;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
