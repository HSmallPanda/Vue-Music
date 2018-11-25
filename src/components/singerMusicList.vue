<template>
  <div id="music_list">
    <ul class="sel_list">
      <router-link :to='{name:"musicPlay",params:{songid:item.song_id}}' tag='li' v-for="(item,index) in musicData.songlist" :key="index">
        <div class="left-text">{{index+1}}</div>
        <div class="left">
          <img :src="item.pic_big" alt="">
        </div>
        <div class="right">
          <div class="name">{{item.title}}<span>( {{item.album_title}} )</span></div>
          <div class="author">{{item.author}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'singerMusicList',
  data(){
    return{
      musicData:{
        songlist:[]
      }
    }
  },
  props:{
    music_type: {
      type:String,
      default:"0"
    },
  },
  created(){
    const url = this.Host + "v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid="+ this.$route.params.singerid +"&limits=7&use_cluster=1&order=2";
    this.$axios.get(url)
    .then(res => {
      this.musicData = res.data
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>
.sel li:hover{
  color: #000;
}
.sel_list li{
  height: 70px;
  overflow: hidden;
  border-top: 1px solid #e0e0e0;
}
.sel_list li>div{
  float: left;
  height: 50px;
  margin: 10px 0 10px 15px;
}
.left-text{
  line-height: 50px;
  color: #9b9b9b;
}
.left img{
  width: 50px;
  height: 50px;
}
.right{
  padding: 5px 0;
}
.right div{
  width: 100%;
}
.name{
  font-size: 16px;
  color:#000;
}
.name>span{
  font-size: 14px;
  margin-left: 10px;
  color: rgba(0,0,0,.6);
}
.author{
  color:#9b9b9b;
}
</style>
