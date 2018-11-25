<template>
  <div class="singer">
    <router-link tag="div" :to="{name:'singerinfo',params:{singerid:singerid}}">
      <img :src="singerInfo.avatar_big" alt="singerInfo.name" /> 
    </router-link>    
    <span>{{singerInfo.name}}</span>
  </div>
</template>

<script>
export default {
  name: 'singerList',
  data(){
    return{
      singerInfo:{},
    }
  },
  props:{
    singerid: {
      type:String,
      default:0
    },
  },
  created(){
    const url = this.Host + "v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid=" + this.singerid;
    this.$axios.get(url)
    .then(res => {
      this.singerInfo = res.data
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>
<style scoped>
.singer{
  float: left;
  margin: 10px;
}
.singer div img{
  width: 110px;
}
</style>
