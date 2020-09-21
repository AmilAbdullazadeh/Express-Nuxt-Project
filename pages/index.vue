<template>
  <div class="container">
    <div v-for="product in loadedData"> {{ product.title }}</div>
    <button class="button--green" @click.prevent="getData">Get Datas</button>
    <br>
    <hr>
    <input type="text" v-model="title">
    <button class="button--green" @click.prevent="sendData">Post Datas</button>
    <p>{{ response }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loadedData: null,
      response: null,
      title: null
    }
  },
  methods: {
    getData() {
      axios.get("http://localhost:3000/api/get-all-datas")
          .then(response => {
            this.loadedData = response.data.products
          })
    },
    sendData() {
      axios.post("http://localhost:3000/api/save", {title: this.title})
          .then(response => {
            this.response = response.data.title
          })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand',
  'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
