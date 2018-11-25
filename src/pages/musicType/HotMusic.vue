<template>
  <div id="hot_music">
    <MusicList music_type="2" />
  </div>
</template>

<script>
import MusicList from "../../components/MusicList"

export default {
  name: 'HotMusic',
  components:{
  	MusicList
  }
}
</script>

<style scoped>
</style>
