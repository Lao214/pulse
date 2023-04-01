<template>
  <div id="app">
    <router-view />
    <!-- <Mobile></Mobile> -->
  </div>
</template>

<script>
import Mobile from './components/Mobile.vue';
export default {
  name: 'App',
  components: {
    Mobile
  }
}
</script>

<style>
  body {
    margin: 0;
  }
</style>
