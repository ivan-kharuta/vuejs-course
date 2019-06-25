<template>
  <main class="main-container">
    <div class="filter-bar"></div>

    <div class="movies-list">
      <div class="movie-item">
        <div class="movie-item__poster"></div>
        <div class="movie-item__year">2004</div>
        <div class="movie-item__title">Four rooms</div>
        <div class="movie-item__genre">Action & Adventure</div>
      </div>

      <div class="movie-item">
        <div class="movie-item__poster"></div>
        <div class="movie-item__year">2003</div>
        <div class="movie-item__title">Jackie Brown</div>
        <div class="movie-item__genre">Action & Adventure</div>
      </div>

      <div class="movie-item">
        <div class="movie-item__poster"></div>
        <div class="movie-item__year">1994</div>
        <div class="movie-item__title">Bill:Vol 2</div>
        <div class="movie-item__genre">Oscar winning Movie</div>
      </div>

      <div class="movie-item">
        <div class="movie-item__poster"></div>
        <div class="movie-item__year">2004</div>
        <div class="movie-item__title">Pulp Fiction</div>
        <div class="movie-item__genre">Action & Adventure</div>
      </div>

      <div class="movie-item">
        <div class="movie-item__poster"></div>
        <div class="movie-item__year">2003</div>
        <div class="movie-item__title">Bill:Vol 1</div>
        <div class="movie-item__genre">Action & Adventure</div>
      </div>

      <div class="movie-item">
        <div class="movie-item__poster"></div>
        <div class="movie-item__year">1994</div>
        <div class="movie-item__title">Reservoir dogs</div>
        <div class="movie-item__genre">Oscar winning Movie</div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "MainContainer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.main-container {
  background-color: #212121;
}
.filter-bar {
  height: 100px;
  background-color: #424242;
}

.movies-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
}

.movie-item {
  width: 30%;
  margin-bottom: 40px;
  color: #9E9E9E;
  text-align: left;
}

.movie-item__poster {
  padding-top: 130%;
  margin-bottom: 20px;
  background-color: #455A64;

  &:after {
    content: '';
    clear: both;
  }
}

.movie-item__year {
  display: inline-block;
  float: right;
  padding: 3px 10px;
  border: 1px solid #9E9E9E;
  border-radius: 5px;
}

.movie-item__title {
  margin-bottom: 15px;
}
</style>
