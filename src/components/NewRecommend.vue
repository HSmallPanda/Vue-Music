<template>
  <div class="NewR">
    <h2>{{title}}</h2>
    <router-link tag="div" class="more" :to="{name:'more',params:{music_type:this.type,title:title}}">更多</router-link>
    <ul class="list">
        <router-link :to='{name:"musicPlay",params:{songid:item.song_id}}' tag='li' v-for="(item,index) in listData.song_list" :key="index">
            <img :src="item.pic_big" alt="item.pic_small">
            <div class="title">{{item.title}}</div>
            <div class="author">{{item.author}}</div>
        </router-link>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'NewRecommend',
  data(){
    return{
      listData:{
        song_list:[]
      },
      title:"新歌速递"
    }
  },
  props:{
    type:{
      type:String,
      default:0
    }
  },
  created(){
    const url = this.Host + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.type+"&size=3&offset=0"
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
.NewR{
  margin: 30px 10px 0;
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
.author{
  font-size: 10px;
  color:#9b9b9b;
}
</style>
