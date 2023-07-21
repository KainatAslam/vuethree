<template>
    <div>
        <h1>Products</h1>
        <ListProduct/>
    </div>
</template>

<script lang="ts">  
import ListProduct from '@/components/ListProduct.vue'
import { defineComponent } from "vue";

 export default defineComponent({ 
    components:{
        ListProduct
    }
})
</script>

<style >

</style>