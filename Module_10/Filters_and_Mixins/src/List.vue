<template>
   <div>
       <h1>Filters & Mixins</h1>
                <input type="text" v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{fruit}}</li>
                </ul>
   </div>
</template>

<script>
    export default {
        data(){
            return{
                fruits: ['Apple', 'Orange', 'Banana', 'Melon'],
                filterText: ''
            }
        },
        filters:{
            toUppercase(value){
                return value.toUpperCase();
            }
        },
        computed:{
            filteredFruits(){
                return this.fruits.filter((element) => {
                    return element.match(this.filterText);
                });
            }
        }
    }
</script>

<style>

</style>
