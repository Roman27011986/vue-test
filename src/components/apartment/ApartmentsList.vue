<template>
    <div class="apartments-list">
      <ApartmentsItem 
       v-for="apartment in items"
       :key="apartment.id"
      />
    </div>
</template>

<script>
import ApartmentsItem from './ApartmentsItem.vue'
    export default {
        name:'ApartmentsList',
        components:{
            ApartmentsItem
        },
        props:{
            items:{
                type:Array,
                default:()=>[]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>