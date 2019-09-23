<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <div class="footer">
      <ul>
        <li :class="{selectColor:selectColor === type}" @click="getColor(type)" v-for="type of types" :key="type.id">{{ type.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'app',
  data(){
    return {
      selectColor:undefined,
      types:[
        {id:'111',text:'首页',path:'/',name:'/'},
        {id:'222',text:'分类',path:'/category',name:'category'},
        {id:'333',text:'购物车',path:'/cart',name:'cart'},
        {id:'444',text:'我的',path:'/user',name:'user'},
      ]
    }
  },
  mounted(){
    for(let type of this.types){
      if(type.path === location.pathname){
        this.selectColor = type;
        break;
      }
    }
  },
  methods:{
    getColor(type){
      this.selectColor = type;
      this.$router.push({name:type.name});
    }
  }
}
</script>>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.footer{
  position: absolute;
  bottom: 0;
  height: 1rem;
  width: 100%;
  box-shadow: -1px -1px 5px lightgrey;
}
.footer ul {
  list-style: none;
  display: flex;
}
.footer ul li{
  font-size: .26rem;
  width: 25%;
  line-height: 1rem;
}
.selectColor{
  color: orange;
}

</style>
