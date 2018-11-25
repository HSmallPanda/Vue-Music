<template>
  <swiper :options="swiperOption" class="container">
    <swiper-slide class="imgBox">
    	<img src="../assets/image/bos_client_1542542628a274e5b4390d685c6cef4a0c02c7849d.jpg">
    </swiper-slide>
    <swiper-slide class="imgBox">
    	<img src="../assets/image/bos_client_154270368476f6d00b2d81b5bd152bf3a6467d1cb8.jpg">
    </swiper-slide>
    <swiper-slide class="imgBox">
    	<img src="../assets/image/bos_client_1542900735acce45c4af52a8c568b6381e0cc3648c.jpg">
    </swiper-slide>
    <swiper-slide class="imgBox">
    	<img src="../assets/image/bos_client_1542953480f4bdad00763f90f7f159c732cc77e5f9.jpg">
    </swiper-slide>
    <swiper-slide class="imgBox">
    	<img src="../assets/image/bos_client_15429629360a48e7bb5f9c6d0d8023b1a0f530d088.jpg">
    </swiper-slide>
	<div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'swiperSlider',
  data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop : true,
          autoplay: {
    		delay: 2000,
       	  }
       	}
      }
  }
}
</script>

<style scoped>
.container{
	width: 100%;
	height: 150px;
}
.imgBox{
	width: 100%;
	height: 150px;
}
.imgBox img{
	width: 100%;
	height: 100%;
}
</style>
