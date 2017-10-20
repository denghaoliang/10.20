<template>
  <div id="app">
<router-link to="/" class="one"><p class="iconfont">&#xe72a;</p><p>微信</p> </router-link>
<router-link to="/two" class="two"><p class="iconfont">&#xe70a;</p><p>通信录</p></router-link>
<router-link to="/tree" class="tree"><p class="iconfont">&#xe663;</p><p>发现</p></router-link>
<router-link to="/hello" class="hello"><p class="iconfont">&#xe600;</p><p>我</p></router-link>
   
   <router-view>
   	
   </router-view>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}

</script>

<style scoped>
  @import '../static/css/App.css';
 @import "/static/infon/iconfont.css";  
</style>


