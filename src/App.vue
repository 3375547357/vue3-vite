<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/about">about</router-link> 
    <router-link to="/ceshi">测试</router-link> 
	<router-link to="/ceshi2">测试2</router-link> 
  </nav>
  <router-view/>
</template>
<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
</script>
<style lang="less">
nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
