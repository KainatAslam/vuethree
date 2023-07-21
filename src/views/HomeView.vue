<template>
 <div>
  <AddProduct/>
  </div>
</template>

<script lang="ts">

 // @ is an alias to /src
import { defineComponent } from "vue";
import AddProduct from '@/components/AddProduct.vue'; // @ is an alias to /src


export default defineComponent({

  components: {
    AddProduct
  }

})
</script>
