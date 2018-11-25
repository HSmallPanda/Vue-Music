<template>
  <div>
    <SwiperSlider />
    <p>热门歌手</p>
    <div class="singer">
       <singerList v-for="(item,index) in singerLists" :singerid="item" :key="index"/>
    </div>
  </div>
</template>

<script>
import SingerList from '../components/singerList'
import SwiperSlider from '../components/SwiperSlider'

export default {
  name: 'singer',
  data(){
  	return{
  		singerLists:["7994","1077","7898","1052","211833","1180","1095","75672612","1454"]
  	}
  },
  components:{
    SingerList,
    SwiperSlider
  }
}
</script>
<style scoped>
p{
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
  margin-left: 10px;
  border-bottom: 1px solid #e0e0e0;
}
.singer{
	overflow: hidden;
	margin: 10px 10px;
}
</style>
