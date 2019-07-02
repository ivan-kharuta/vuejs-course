<template>
  <header class="main-header">
    <h1 class="main-header__title">Find your movie</h1>
    <div class="search-bar">
      <input
        type="text"
        class="search-bar__input"
        @keyup.enter="findTheMovie"
      />
      <button class="search-bar__btn" @click.prevent="findTheMovie">
        Search
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      name: "MainHeader"
    };
  },
  methods: {
    findTheMovie() {
      alert("Success!");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 400px;
  background-color: #000;
  background-image: url("https://images.amediateka.ru/image_d12378e2-8678-4b9d-8f32-07f7d74b81b8.jpg");
  background-size: cover;
  background-position: center;
  font-family: sans-serif;
}

.main-header__title {
  width: 80%;
  max-width: 900px;
  text-transform: uppercase;
  text-align: left;
  font-weight: 100;
  color: #fff;
}

.search-bar {
  display: flex;
  width: 80%;
  max-width: 900px;
}

.search-bar__input {
  flex-grow: 1;
  height: 50px;
  margin-right: 10px;
  padding: 0 15px;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background-color: rgba(66, 66, 66, 0.8);
}

.search-bar__btn {
  height: 50px;
  padding: 10px 50px;
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
  background-color: #d81b60;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
