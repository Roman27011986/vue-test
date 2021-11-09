<template>
    <select v-on="listeners" class="custom-select">
        <option 
          v-for="item in formatedItems"
          :key="item.value"
          :value="item.value"
          :selected="item.selected"
          >
            {{item.label}}
        </option>
    </select>
</template>

<script>
    export default {
       name:"CustomSelect",
       props:{
          items:{
              type:Array,
              required:true
          }
       },
        computed:{
            listeners(){
                return{
                    ...this.listeners,
                    input: event => this.$emit('input', console.log(event))
                }
            },
            formatedItems(){
                return this.items.map(item =>{
                    if(typeof item === 'object'){
                        return item
                    } else {
                        return {
                            value:item,
                            label:item
                        }
                    }
                })
            }
        } 
    }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
    .custom-select{
       min-width: 220px;
       height: 40px;
       border: 2px solid $main-color;
       font-size: 18px;
       outline: none;
       line-height: inherit;
       padding: 8px 15px;
       
    }
</style>