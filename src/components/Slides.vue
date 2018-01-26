<template>
  <div class="slides" ref="slides" 
    :style="{
      'width' : (list.length * 100) + '%',
      'transform' : 'translateX(-' + currentSlide / list.length * 100 + '%)'
    }">
    <div v-for="slide in list" :key="slide.name" class="slide"
      :style="{
        'background-image' : 'url(' + slide.background + ')'
      }">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slides',
  props: ['currentSlide', 'list'],
  data: function () {
    return {
      transitionDuration: 500
    }
  },
  mounted: function () {
    let $slides = this.$refs.slides
    $slides.style.transition = 'all ' + this.transitionDuration / 1000 + 's'
  }
}
</script>

<style scoped>
.slides {
  position: absolute;
  display: flex;
  height: 100%;
  z-index: 0;
  transition: none;
}

.slide {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
}
</style>