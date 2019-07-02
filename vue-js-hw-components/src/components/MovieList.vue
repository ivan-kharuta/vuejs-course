<template>
  <div class="movies-list" v-if="movies.length">
    <div class="movie-item" v-for="movie in movies">
      <div class="movie-item__poster"></div>
      <div class="movie-item__year">{{ movie.movieYear }}</div>
      <div class="movie-item__title">{{ movie.movieTitle }}</div>
      <div class="movie-item__genre">{{ movie.movieGenre }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "MainContainer",
      movies: [
        {
          movieTitle: "Four rooms",
          movieYear: "2004",
          movieGenre: "Action & Adventure",
          moviePoster: ""
        },
        {
          movieTitle: "Jackie Brown",
          movieYear: "2003",
          movieGenre: "Action & Adventure",
          moviePoster: ""
        },
        {
          movieTitle: "Bill:Vol 2",
          movieYear: "1994",
          movieGenre: "Oscar winning Movie",
          moviePoster: ""
        },
        {
          movieTitle: "Pulp Fiction",
          movieYear: "2004",
          movieGenre: "Action & Adventure",
          moviePoster: ""
        },
        {
          movieTitle: "Bill:Vol 1",
          movieYear: "2003",
          movieGenre: "Action & Adventure",
          moviePoster: ""
        },
        {
          movieTitle: "Reservoir dogs",
          movieYear: "1994",
          movieGenre: "Oscar winning Movie",
          moviePoster: ""
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.movies-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  font-family: sans-serif;
  background-color: #212121;
}

.movie-item {
  width: 30%;
  margin-bottom: 40px;
  color: #9e9e9e;
  text-align: left;
}

.movie-item__poster {
  padding-top: 130%;
  margin-bottom: 20px;
  background-color: #455a64;

  &:after {
    content: "";
    clear: both;
  }
}

.movie-item__year {
  display: inline-block;
  float: right;
  padding: 3px 10px;
  border: 1px solid #9e9e9e;
  border-radius: 5px;
}

.movie-item__title {
  margin-bottom: 15px;
}
</style>
