<template>
  <div class="bodymovin" ref="bodymovin"></div>
</template>

<script>

import * as bodymovin from 'lottie-web'

export default {
  name: 'Bodymovin',
  props: ['jsonfile', 'play'],
  watch: {
    play: function (newVal, oldVal) {
      console.log('Prop changed: ', newVal, ' | was: ', oldVal)
      if (newVal) {
        bodymovin.play()
      } else {
        bodymovin.stop()
      }
    }
  },
  mounted: function () {
    bodymovin.loadAnimation({
      container: this.$refs.bodymovin,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: this.jsonfile
    })
  }
}
</script>

<style scoped>
.bodymovin{
  position: absolute;
  width: 75px;
  height: 68px;
  top: 30%;
  transform: translateX(-10%) translateY(-50%);
  left: 0;
}

@media screen and (min-width: 1024px){
  .bodymovin{
    width: 149px;
    height: 127px;
  }  
}
</style>