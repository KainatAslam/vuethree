<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="success">
    <b-navbar-brand href="#">Manager</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
<b-collapse id="nav-collapse"  is-nav>
    <b-navbar-nav>
      <b-nav-item>
        <router-link to="/">
              Home
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/product-list">
              Products List
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/about">
              About
        </router-link>
      </b-nav-item>
    </b-navbar-nav>
</b-collapse>
   
  </b-navbar>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
 export default defineComponent ({
  
 })

</script>

<style>

</style>