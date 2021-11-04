<template>
<div id='app'>
  <ApartmentItem/>
</div>
</template>

<script>
  import ApartmentItem from './components/apartment/ApartmentItem.vue'
  export default {
    name:'App',
    components:{
      ApartmentItem
    }
  }
</script>

<style lang="scss" scoped>
   #app {
     font-family: Rubik;
   }
</style>
