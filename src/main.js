import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'


Vue.component('home-status', Home)

new Vue({
  el: '#app',
  render: h => h(App) // this function will automatically render a certain compiled template in the place of #app element
})

