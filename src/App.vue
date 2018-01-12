<template>
  <div>
    <h1>Hello<span v-if="name">, {{name}}</span><span v-else> world</span>!</h1>
    <home-status></home-status>
  </div>
</template>

<script>
  // this part of code is kind of a new Vue instance
export default {
  data:function () {
    return{
      name: 'Vasya'
    }
  }
}
</script>

<style lang="scss">
</style>
