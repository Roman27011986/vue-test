<template>
<div id='app'>
  <Btn>Roma</Btn>
  <StarRating :rating="2.5"/>
</div>
</template>

<script>
import StarRating from './components/StarRating.vue'
import Btn from './components/Button.vue'
  export default {
    name:'App',
    components:{
      Btn,
      StarRating
    }
  }
</script>

<style lang="scss" scoped>

</style>
