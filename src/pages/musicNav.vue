<template>
  <div id="music_nav">
    <ul>
    	<li><router-link to="/singer">个性推荐</router-link></li>
    	<li><router-link to="/musicRank">榜单</router-link></li>
    	<li><router-link to="/search">搜索</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'musicNav'
}
</script>

<style scoped>
ul{
	display: flex;
}
ul li{
	height: 50px;
	line-height: 50px;
	flex-grow: 1;
	text-align: center;
	margin: 0 20px 5px;
	font-size: 18px;
}
a{
	padding: 5px;
}
a:hover{
	color: #f00;
	border-bottom: 2px solid #f00;
}
</style>
