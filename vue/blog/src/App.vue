<template>
<div id="app">
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
   <Header />
  <!-- <HelloWorld :msg="test" /></HelloWorld> -->
  <!-- <HelloWorld :msg="test" /> -->
  <router-view/>
</div>
</template>
<stylesheet lang="scss">
  #app { font-family: Avenir, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-align: center; color: #2c3e50; } #nav { padding: 30px; a { font-weight: bold; color: #2c3e50; &.router-link-exact-active { color: #42b983; } } }
</stylesheet>

</template>

<script>
  // import HelloWorld from '@/components/HelloWorld';
  // import Test from '@/components/Test';
  import Header from '@/components/Header';
  import axios from 'axios';

  export default {
    mounted () {
      this.$store.dispatch('fetchArticles')
    },
    components: {
      Header,
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
