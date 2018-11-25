<template>
  <div id="music_list">
    <vue-data-loading :loading="loading" :completed="completed" :listens="['pull-up']" @pull-up="pullUp">
      <ul class="sel_list" v-loading.fullscreen.lock="fullscreenLoading">
        <router-link :to='{name:"musicPlay",params:{songid:item.song_id}}' tag='li' v-for="(item,index) in song_list" :key="index">
          <div class="left-text">{{0 + item.rank}}</div>
          <div class="left">
            <img :src="item.pic_big" alt="">
          </div>
          <div class="right">
            <div class="name">{{item.title}}</div>
            <div class="author">{{item.author}}</div>
          </div>
        </router-link>
      </ul>
    </vue-data-loading>
  </div>
</template>

<script>
import VueDataLoading from 'vue-data-loading'

export default {
  name: 'MusicList',
  data(){
    return{
      // musicData:{
      //   song_list:[]
      // },
      song_list:[],
      loading: false,
      completed: false,
      page: 1,
      offsetNum: 0,
      fullscreenLoading: true
    }
  },
  components: {
    VueDataLoading
  },
  props:{
    music_type: {
      type:String,
      default:1
    },
  },
  methods: {
    fetchData() {
      this.loading = true

      const url = this.Host + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.music_type+"&size=10&offset=" + this.offsetNum;
      this.$axios.get(url)
      .then(res => {
        // this.musicData = res.data
        this.song_list = this.song_list.concat(res.data.song_list)

        this.loading = false
        this.offsetNum += 10

        this.fullscreenLoading = false;

      }).catch(error => {
        console.log(error)
      })
    },
    pullUp() {
        this.fetchData()
        this.page++
    }
  },
  created(){
    this.fetchData()
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
.author{
  color:#9b9b9b;
}
</style>
