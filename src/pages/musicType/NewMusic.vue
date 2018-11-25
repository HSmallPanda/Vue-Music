<template>
  <div id="new_music">
    <MusicList music_type="1" />
  </div>
</template>

<script>
import MusicList from "../../components/MusicList"

export default {
  name: 'NewMusic',
  components:{
  	MusicList
  }
}
</script>

<style scoped>
</style>
