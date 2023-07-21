import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue3 } from "bootstrap-vue-3";

import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import {validate,defineRule, configure} from 'vee-validate'
// import {veevalidate} from 'vee-validate'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


const app  = createApp(App);
app.provide("$store", store);
app.use(store).use(router).use(validate,defineRule as any,configure as any).use(BootstrapVue3)
app.mount('#app')
