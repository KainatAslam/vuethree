<template>
  <div >
    <AppHeader />
    <b-container>
      <b-row class="justify-content-center">
        <router-view/>
      </b-row>
    </b-container>
  </div>
</template>


<script  lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/AppHeader.vue"
// import { Options, Vue } from 'vue-class-component';
export default defineComponent ({

  components:{
      AppHeader
    }
});
</script>
<style>
a{
  text-decoration: none !important;
  color: white !important;
  font-weight: 500; opacity: ;
}
</style>
