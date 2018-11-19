<template>
  <div id="app">
    <router-view/>
    <!-- <tab-bar-bottom></tab-bar-bottom> -->
  </div>
</template>

<script>
// import TabBarBottom from '@/base/tabBarBottom/tabBarBottom'
export default {
  name: 'App'
  // components: {
  //   TabBarBottom
  // }
}
</script>

<style lang="stylus" scoped>
#app
  padding-bottom 1.33rem
</style>
