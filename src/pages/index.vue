<template>
  <div>
  	<MusicNav />
  	<router-view/>
  </div>
</template>

<script>
import MusicNav from "./musicNav"

export default {
  name: 'index',
  components:{
  	MusicNav
  }
}
</script>

<style>
</style>
