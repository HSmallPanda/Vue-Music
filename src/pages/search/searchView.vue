<template>
  <div id="searchView">
    <SearchList :searchContent="$route.params.searchContent"/>
  </div>
</template>

<script>
import SearchList from '../../components/searchList'
export default {
  name: 'searchView',
  data(){
    return{
      
    }
  },
  components:{
    SearchList
  }
}
</script>

<style scoped>
</style>
