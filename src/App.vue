<template>
  <div id="app">
    <router-view/>
<!--    测试代码-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
</style>
