 <template>
    <div>
        <b-button  @click="modalShow = !modalShow"><i  class="fa-thin fa-pen-to-square">Edit</i></b-button>
      <b-modal 
      v-model="modalShow"
      title="Update Product"
      @show="showModal"
      @hidden="resetModal"
      @ok="handleSubmit"
    >
    <Form autocomplete="off" :validation-schema="schema">
           
           <label>Item Name</label>
           <!-- This has to be in field :rules="passwordRules" -->
           <Field  id="name" name="name" type="text"  v-model="Form.name"   />
           <ErrorMessage name="name" />

           <label>Price ($)</label>
           <Field  id="price" name="price" type="number"  v-model="Form.price"    />
           <ErrorMessage name="price" />
   
          <label>Brand</label>
           <Field  id="brand" name="brand" type="text"  v-model="Form.brand"  />
           <ErrorMessage name="brand" />

           <label>Inventory</label>
           <Field  id="InventoryStatus" name="InventoryStatus" type="radio" v-model='Form.InventoryStatus'  value="true"  >In Stock</Field>
           <Field  id="InventoryStatus" name="InventoryStatus" type="radio" v-model='Form.InventoryStatus'  value="false"  >Out Of Stock</Field>
           <ErrorMessage name="InventoryStatus" />
   
</Form>
    </b-modal>
    </div>  
</template>

<script lang="ts" >
import {  defineComponent } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { configure, validate   } from 'vee-validate';
configure({
  // add validation rules and messages here
});
const schema = yup.object({
    name: yup.string().required().min(3),
  price: yup.number().required(),
  InventoryStatus: yup.boolean().required(),
  brand: yup.string().required().min(2)
});
export default defineComponent({
 
    name:"UpdateProduct",
    props:['product'],
   
    data() {
        return{
        
            modalShow: false ,   
            Form:{
            name: '',
            price:'',
            brand:'',
            InventoryStatus:'',
        },
        submitted:false
    }
        
    },
    methods:{
        showModal(){
            console.log('model opened');
            this.Form={
                name: this.$props.product.name,
                price: this.$props.product.price.split('$')[1],
                brand: this.$props.product.brand,
                InventoryStatus: this.$props.product.InventoryStatus.toString(),
            }
        },
        resetModal(){
            console.log('model closed');
            this.Form = {
                name:'',
            price:'',
            brand:'',
            InventoryStatus:'',
            };
        },
     

async handleSubmit(bvModalEvt: any) {
  bvModalEvt.preventDefault();
  console.log('submitted');
  
  
  this.submitted = true;
  
  let result = await validate(this.Form, { mode: 'all' });
  console.log('Result', result);
  if (result.valid) {
    // this.$emit('updateProduct', {
    //   name: this.form.name,
    //   price: '$' + this.form.price,
    //   brand: this.form.brand,
    //   InventoryStatus: this.form.InventoryStatus === 'true',
    //   id: this.$props.product.id
    // });
    this.$store.dispatch('updateProduct', {
      name: this.Form.name,
      price: '$' + this.Form.price,
      brand: this.Form.brand,
      InventoryStatus: this.Form.InventoryStatus === 'true',
      id: this.$props.product.id
    });
    
    this.modalShow = false;
    this.submitted = false;
  }
}

    },

 })
</script>
<style></style> 


  