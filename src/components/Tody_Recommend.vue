<template>
  <div class="TodyR">
    <h2>{{title}}</h2>
    <router-link tag="div" :to="{name:'more',params:{music_type:this.type,title:title}}" class="more">更多</router-link>
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
  name: 'todyRecommend',
  data(){
    return{
      listData:{
        song_list:[]
      },
      title:"今日推荐"
    }
  },
  props:{
    type:{
      type:String,
      default:0
    }
  },
  created(){
    const url = this.Host + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.type+"&size=6&offset=0"
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
.TodyR{
  margin: 20px 10px 0;
  overflow: hidden;
}
h2{
  padding-left: 10px;
}
.more{
  float: right;
  margin-top: -20px;
  padding-right: 10px;
}
.list ul{
  overflow: hidden;
} 
.list li{
  float: left;
  margin: 10px;
}
.list li img{
  width: 110px;
}
.title{
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
