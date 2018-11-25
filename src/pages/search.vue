<template>
  <div class="search">
    <input type="text" v-model="searchData" placeholder="请输入您要搜索的内容...">
    <router-link v-if="" tag="button" type="submit" :to='{name:"searchView",params:{searchContent:searchData}}'>搜索</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'search',
  data(){
  	return{
  		searchData:null
  	}
  },
  components:{
    
  }
}
</script>
<style scoped>
.search {
  margin: 0 10px;
}
.search input {
  border: 1px solid #D0D0D0;
  line-height: 33px;
  margin: 0 5px;
  padding: 0 10px;
  width:80%;
}
.search button {
  background: #F04243;
  border: 0 none;
  color: #FFFFFF;
  height: 35px;
  line-height: 33px;
  width: 15%;
  font-size: 14px;
}
</style>
