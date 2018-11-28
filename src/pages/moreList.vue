<template>
  <div class="more">
    <h2>{{this.$route.params.title}}</h2>
    <ul class="list">
        <router-link :to='{name:"musicPlay",params:{songid:item.song_id}}' tag='li' v-for="(item,index) in listData.song_list" :key="index">
            <img :src="item.pic_big" alt="item.title">
            <div class="title">{{item.title}}</div>
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'more',
  data(){
    return{
      listData:{
        song_list:[]
      }
    }
  },
  created(){
    const url = this.Host + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.$route.params.music_type+"&size=20&offset=0"
      this.$axios.get(url)
      .then(res => {
        this.listData = res.data
      }).catch(error => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
.more{
  margin: 20px 10px 0;
  overflow: hidden;
}
h2{
  padding-left: 10px;
}
.list ul{
  overflow: hidden;
} 
.list li{
  float: left;
  margin: 10px 15px;
}
.list li img{
  width: 160px;
}
.title{
  width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
