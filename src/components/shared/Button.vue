<template>
    <button v-bind:type="typeBtn" :class="{ btn:true, 'btn--outlined':outlined }">
        <slot></slot>
    </button>
</template>

<script>
    export default {
      name:'Btn',
      props:{
          typeBtn:{
              type:String,
              default:'button'
          },
          outlined:{
              type:Boolean,
              default:false
          }
      }  
    }
</script>

<style lang="scss" scoped>
   .btn{
       display: inline-block;
       border: none;
       background-color: #FF662D;
       color: #fff;
       cursor: pointer;
       font-family: Rubik;

       &--outlined{
           background: none;
           border: 1px solid #FF662D;
           color: black;
       }
   }
</style>
