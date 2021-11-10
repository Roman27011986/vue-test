<template>
    <form  @submit.prevent="handleSubmit">
     <CustomSelect 
     :items="cities"
      v-model="city"
     />
     <CustomInput
     placeholder="Цена, от"
     v-model="price"
     />
     <SubmitBtn type="submit">SubmitBtn</SubmitBtn>
    </form>
</template>

<script>
    import CustomSelect from '../../components/shared/CustomSelect.vue'
    import CustomInput from '../../components/shared/CustomInput.vue'
    import SubmitBtn from '../../components/shared/Button.vue'
    export default {
        components:{
            CustomSelect,
            CustomInput,
            SubmitBtn
        },
        data(){
            return{
                price:0,
                city:''
            }
        },
        computed:{
            cities(){
                return [{value:'',label:"Город", selected:true},'Mariupol', 'Kiev', 'Kharkiv','Вonetsk','Odessa']
            }
        },
        methods:{
            handleSubmit(){
                this.$emit('submit', {
                    city:this.city,
                    price:this.price
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
 
</style>