<template>
  <div id="app" class="bg-gray-800">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="">
      <Milestones msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import Milestones from './components/Milestones'

export default {
  name: 'App',
  components: {
    Milestones
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
