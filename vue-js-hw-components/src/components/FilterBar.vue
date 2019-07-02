<template>
  <div class="filter-bar">
    <div class="filter-bar__wrapper">
      <div class="filter-bar__search-results">6 movies found</div>
      <div class="filter-bar__sorting">
        Sort by
        <div class="filter-bar__toggle-buttons" >
          <input type="radio" name="options" id="filterByDate" checked>
          <label class="filter-bar__btn" for="filterByDate">Release date</label>
          <input type="radio" name="options" id="filterByRating" >
          <label class="filter-bar__btn" for="filterByRating">Rating</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "FilterBar"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.filter-bar {
  font-family: sans-serif;
  color: #fff;
  background-color: #424242;
}
.filter-bar__wrapper {
  display: flex;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 15px 0;
}
.filter-bar__sorting {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.filter-bar__toggle-buttons {
  display: flex;
  margin-left: 15px;
  border-radius: 5px;
  overflow: hidden;

  input[type="radio"] {
    width: 0;
    height: 0;
    position: absolute;
    visibility:hidden;
  }

  input[type="radio"]:checked + label{
    background-color: #d81b60;
    cursor: default;
  }

  label {
    display:block;
    padding: 10px 20px;
    text-transform: uppercase;
    line-height: 1;
    background-color: #263238;
    cursor: pointer;
  }
}
</style>
