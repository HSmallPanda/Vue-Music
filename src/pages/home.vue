<template>
  <div>
    <SwiperSlider />
    <TodyRecommend type="1"/>
    <NewRecommend type="24"/>
  </div>
</template>

<script>
import SwiperSlider from '../components/SwiperSlider'
import TodyRecommend from '../components/Tody_Recommend'
import NewRecommend from '../components/NewRecommend'

export default {
  name: 'home',
  components:{
    SwiperSlider,
    TodyRecommend,
    NewRecommend,
  }
}
</script>
<style scoped>
</style>
