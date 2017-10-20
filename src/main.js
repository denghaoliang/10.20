// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import One from "@/components/one"
import hello from "@/components/HelloWorld"
import Two from "@/components/two"
import Tree from "@/components/tree"
Vue.use(VueRouter);
Vue.config.productionTip = false
const router=new VueRouter({
	routes:[
	    {
	    	path:"/",
	    	component:One
	    },{
	    	path:"/hello",
	    	component:hello
	    },{
	    	path:"/two",
	    	component:Two
	    },{
	    	path:"/tree",
	    	component:Tree
	    }
	]
})
/* eslint-disable no-new */
new Vue({
	router:router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
