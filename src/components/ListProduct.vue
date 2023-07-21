<template>
       <b-col class="m-3">
        <b-card
    header="List Product"
  >
  
      <b-card-group deck >
      <b-card 
    style="min-width: 30%; max-width: 30%"
        :border-variant="product.InventoryStatus ? 'success': 'danger' "
        align="center"
        class="m-3"
        v-for="product in productList" :key="product.id"
      >
    
      <b-badge  class="danger" :variant="product.InventoryStatus ? 'success': 'danger'"> {{   product.InventoryStatus?'Available':'Not Available'}}</b-badge>
        <b-card-text> <strong>Name: </strong> {{ product.name }}</b-card-text>
        <b-card-text> <strong>Brand: </strong>{{ product.brand }}</b-card-text>
        <b-card-text> <strong>Price: </strong>{{ product.price }}</b-card-text>
            <hr/>
            <b-row>
              <b-col>
                 <b-button variant="danger" @click="deleteProduct(product.id)">
                <i class="fa-regular fa-trash">Delete</i>
              </b-button> </b-col>

              <b-col> 
              <UpdateProduct :product="product" />
             </b-col>
            </b-row>
      </b-card>
    </b-card-group >
      <h2 v-if="productList<1">No Products Found!</h2>

  </b-card>
    </b-col>
</template>

<script lang="ts">
import UpdateProduct from './UpdateProduct.vue'

// @ts-check
import { defineComponent } from "vue";
// import { Options } from 'vue-class-component';

 export default defineComponent({
 
    components:{
  UpdateProduct
},
methods:{
  deleteProduct(productId:any){
   this.$store.dispatch('deleteProduct',productId);
  }
},
computed: {
  // ...mapState(['productList'])
  productList(): any  {
   return this.$store.getters.productList;
  }
},
mounted(){
  this.$store.dispatch('setProducts')
}
})
</script>

<style>
</style>