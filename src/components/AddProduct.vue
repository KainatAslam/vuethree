
<template>
    <b-col md="6" class="m-3">
        <b-card
    header="Add Product">
    <b-card-body>

        <Form autocomplete="off" :validation-schema="schema">
           
                    <label>Item Name</label>
                    <!-- This has to be in field :rules="passwordRules" -->
                    <Field  id="name" name="name" type="text" v-model="Form.name"  />
                    <ErrorMessage name="name" />


                    <label>Price ($)</label>
                    <Field  id="price" name="price" type="number"  v-model="Form.price"  />
                    <ErrorMessage name="price" />

                   <label>Brand</label>
                    <Field  id="brand" name="brand" type="text" v-model="Form.brand"  />
                    <ErrorMessage name="brand" />


                    <label>Inventory</label>
                    <Field  id="InventoryStatus" name="InventoryStatus" type="radio"  value="true" v-model='Form.InventoryStatus' >In Stock</Field>
                    <Field  id="InventoryStatus" name="InventoryStatus" type="radio"  value="false" v-model='Form.InventoryStatus'  >Out Of Stock</Field>
                    <ErrorMessage name="InventoryStatus" />
           
        </Form>
    </b-card-body>
   
    <b-button block variant="primary" @click="addProduct">Add Product</b-button>
  </b-card>
    </b-col>
    
</template>

<script lang="ts" setup >

// @ts-check
import { defineComponent } from "vue";

import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { configure, validate  } from 'vee-validate';

const schema = yup.object({
    name: yup.string().required().min(3),
  price: yup.number().required(),
  InventoryStatus: yup.boolean().required(),
  brand: yup.string().required().min(2)
});
    defineComponent({


data() {
    return{
      Form:{
            name: '',
            price: '',
            brand:'',
            InventoryStatus:'',
        },
        
        submitted:false
    }
},
   methods:{
    
    
async addProduct() {
  
  this.submitted = true;
  
  let result = await validate(this.Form, { mode: 'all' });
  if (result.valid) {
    this.$store.dispatch('addProduct',{
      name: this.Form.name,
      price: '$' + this.Form.price,
      brand: this.Form.brand,
      InventoryStatus: this.Form.InventoryStatus === 'true'
    });
    this.Form = {
      name: '',
      price: '',
      brand: '',
      InventoryStatus: '',
    };
    this.submitted = false;
  }
  console.log(this.Form);
}

    
   },
   
})
</script>

<style>
.error-message{
    color:red;
}
</style> 




