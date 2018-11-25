<template>
  <div>
  	<ul class="sel">
        <li><router-link to="/musicRank/new">新歌榜</router-link></li>
        <li><router-link to="/musicRank/hot">热歌榜</router-link></li>
        <li><router-link to="/musicRank/rock">摇滚榜</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'musicRank',
}
</script>
<style>
.sel{
  overflow: hidden;
  margin-bottom: 5px;
  border-bottom: 1px solid #e0e0e0;
}
.sel li{
  float: left;
  margin: 5px 10px;
  padding: 2px;
  color: rgba(0,0,0,.6); 
}
a:hover{
	color: #e00;
}
</style>
