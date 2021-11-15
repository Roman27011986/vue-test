<template>
  <input v-model="price" type="number" class="custom-input">
</template>

<script>
    export default {
        name:"CustomInput",
        data(){
            return {
                price:0
            }
        },
    }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
   .custom-input{
       min-height: 40px;
       border: 2px solid $main-color;
       font-size: 18px;
       outline: none;
       line-height: inherit;
       padding: 8px 15px;
       &::placeholder{
           color: inherit;
       }
   }
</style>