<template>
  <ul class="lrc" id="text">
    {{getAllKey}}
    <li :class="{'active':key < nowTime && key > nowTime - (keyArr[index+1] - keyArr[index])}" v-for="(item,key,index) in lrcData">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'musicLrc',
  data(){
    return{
      lrcData:{},
      keyArr:[]
    }
  },
  props:{
    nowTime:{
      type:Number,
      default:null
    },
    allTime:{
      type:Number,
      default:null
    }
  },
  created() {
    const url = this.Host + "v1/restserver/ting?method=baidu.ting.song.lry&songid=" + this.$route.params.songid;
    this.$axios.get(url)
      .then(res => {
        var lyrics = res.data.lrcContent.split('\n');
        var lrcObj = {};
        for(var i=0;i<lyrics.length;i++){
          var lyric = decodeURIComponent(lyrics[i]);
          var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
          var timeRegArr = lyric.match(timeReg);
          if(!timeRegArr) continue;
          var clause = lyric.replace(timeReg,'');
          for(var k=0;k < timeRegArr.length;k++){
            var min = Number(String(timeRegArr[k].match(/\[\d*/i)).slice(1));
            var sec = Number(String(timeRegArr[k].match(/\:\d*/i)).slice(1));
            var time = min * 60 + sec;
            lrcObj[time] = clause
          }
        }
        this.lrcData = lrcObj;
      }).catch(error => {
        console.log(error)
      })
  },
  computed:{
    //获取所有的key 便于判断当前时间
    getAllKey(){
      for(var allkey in this.lrcData){
        this.keyArr.push(allkey);
      }
    }
  }
}
</script>

<style scoped>
.lrc{
  width: 100%;
  max-height: 250px;
  overflow: hidden;
  min-height: 30px;
  overflow-y: scroll;
}
ul li {
  line-height: 30px;
}
.active{
  color: #f00;
}
</style>
