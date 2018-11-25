<template>
  <div id="music_list">
    <ul class="sel_list">
      <router-link :to='{name:"musicPlay",params:{songid:item.songid}}' tag='li' v-for="(item,index) in musicData.song" :key="index">
        <div class="left">{{index}}</div>
        <div class="right">
          <div class="name">{{item.songname}}</div>
          <div class="author">{{item.artistname}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MusicList',
  data(){
    return{
      musicData:{
        song:[]
      }
    }
  },
  props:{
    searchContent:{
      type:String,
      default:null
    }
  },
  created(){
    const url = this.Host + "v1/restserver/ting?method=baidu.ting.search.catalogSug&query=" + this.searchContent;
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
.left{
  line-height: 50px;
  color: #9b9b9b;
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
.author{
  color:#9b9b9b;
}
</style>
