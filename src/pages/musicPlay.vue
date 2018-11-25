<template>
    <div>
	    <div class="header">
	        <router-link to="/singer"><i class="iconfont icon-shouye left"></i></router-link>
	        <div class="singer">
	        	<p>{{playData.songinfo.title}}</p>
	        	<p class="singer-author">{{playData.songinfo.author}}</p>
	        </div>
	        <i class="iconfont icon-sousuo right"></i>
	    </div>
	    <div class="image">
	        <img :src="playData.songinfo.pic_big">      
	        <div class="lrc">
		        <MusicLrc songid="$route.params.songid" :allTime="allTime" :nowTime="nowTime" />
	        </div>
	    </div>
	    <div class="paly">        	
	    	<i class="iconfont icon-shoucang shoucang"></i>
	        <audio ref="player" :src="playData.bitrate.file_link" controls></audio>
	      <i class="iconfont icon-xiazai xiazai"></i>
	    </div>
    </div>
</template>
<script>
import "../assets/font/iconfont.css"
import MusicLrc from '../components/musicLrc'

export default {
  name: 'musicPlay',
  data() {
    return {
      playData: {
      	songinfo:{},
        bitrate: []
      },
      nowTime:0,
      allTime:0
    }
  },
  components:{
  	MusicLrc
  },
  methods:{
  	addEventListener(){
  		const self = this;
  		self.$refs.player.addEventListener('timeupdate',self._currentTime);
  		self.$refs.player.addEventListener('canplay',self._durationTime);
  	},
  	removeEventListener(){
  		const self = this;
  		self.$refs.player.addEventListener('timeupdate',self._currentTime);
  		self.$refs.player.addEventListener('canplay',self._durationTime);
  	},
  	_currentTime(){
  		const self = this;
  		self.nowTime = parseInt(self.$refs.player.currentTime); //currentTime是audio的属性 当前播放位置
  	},
  	_durationTime(){
  		const self = this;
  		self.allTime = parseInt(self.$refs.player.duration);   //duration是audio的属性 音频总长度
  	}
  },
  mounted(){
  	this.addEventListener()
  },
  beforeDestroyed(){
  	this.removeEventListener()
  },
  created() {
    const url = this.Host + "v1/restserver/ting?method=baidu.ting.song.play&songid=" + this.$route.params.songid;
    this.$axios.get(url)
      .then(res => {
        this.playData = res.data
      }).catch(error => {
        console.log(error)
      })
  }
}

</script>
<style scoped>
.header,.paly{
	margin-top: 10px;
	height: 60px;
	display: flex;
}
.singer{
	flex: 1;
	text-align: center;
	font-size: 20px;
}
.singer-author{
	margin-top: 10px;
	font-size: 14px;
}
.right{
	padding-right: 0;
}
.left,.right,.shoucang,.xiazai{
	font-size: 30px;
	margin: 0 10px;
}
.image{
	margin: 30px 0;
	text-align: center;
}
.image img{
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(225,225,225,.6);
}
.lrc{
	margin-top: 10px;
	max-height: 200px;
	overflow: hidden;
}
audio{
  flex: 1;
}
</style>
