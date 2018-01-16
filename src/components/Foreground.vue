<template>
  <div class="bg" v-show="currentSlide!=0">
    <div class="circle circleLeftTop hidden-pc"
      :style="{
        'background-image' : 'url(' + selectCircle + ')'
      }">
    </div>
    <div class="circle circleLeftBottom hidden-pc"
      :style="{
        'background-image' : 'url(' + selectCircle + ')'
      }">
    </div>
    <div class="circle circleRightTop hidden-pc"
      :style="{
        'background-image' : 'url(' + selectCircle + ')'
      }">
    </div>
    <div class="circle circleRightBottom hidden-pc"
      :style="{
        'background-image' : 'url(' + selectCircle + ')'
      }">
    </div>
    <div class="circleWrapper right hidden-mobile"
      :style="{
        'background-image' : 'url(' + selectCircle + ')'
      }">
      <div class="circle"
        :style="{
          'background-image' : 'url(' + selectCircle + ')'
        }"></div>
    </div>
    <div class="circleWrapper left hidden-mobile"
      :style="{
        'background-image' : 'url(' + selectCircle + ')'
      }">
      <div class="circle"
        :style="{
          'background-image' : 'url(' + selectCircle + ')'
        }"></div>
    </div>
  </div>
</template>

<script>

import circle1 from '@/assets/circle-1.png'
import circle2 from '@/assets/circle-2.png'

export default {
  name: 'Slides',
  props: ['currentSlide'],
  data: function () {
    return {
      circle1: circle1,
      circle2: circle2
    }
  },
  computed: {
    selectCircle: function () {
      if (this.currentSlide === 0) {
        return null
      } else if (Number(this.currentSlide) % 2 === 0) {
        return circle1
      } else if (Number(this.currentSlide) % 2 === 1) {
        return circle2
      }
    }
  }
}
</script>

<style scoped>

.bg{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;   
}

.circleWrapper{
  position: absolute;
  background-position: center center;
  background-size: cover;
  width: 350px;
  height: 350px;
}

.circleWrapper.right{
  right: 5%;
  top: 0;
  transform: translateY(-25%)
}

.circleWrapper.left{
  left: 0;
  bottom: 0;
  transform: translateX(-25%) translateY(25%)
}

.circleWrapper.right .circle{
  position: absolute;
  bottom: -50px;
  right: -50px;
  width: 100px;
  height: 100px;
}

.circleWrapper.left .circle{
  position: absolute;
  top: -75px;
  right: -125px;
  width: 150px;
  height: 150px;
}

.circle{
  position: absolute;
  background-position: center center;
  background-size: cover;
}

.circleLeftTop{
  top: 50px;
  left: 0;
  width: 200px;
  height: 200px;
  transform: translateX(-50%);
}

.circleLeftBottom{
  bottom: 50px;
  left: 0;
  width: 150px;
  height: 150px;
  transform: translateX(-50%);
}

.circleRightTop{
  top: 150px;
  right: 0;
  width: 100px;
  height: 100px;
  transform: translateX(20%);
}

.circleRightBottom{
  bottom: 0;
  right: 0;
  width: 130px;
  height: 130px;
  transform: translateX(45%) translateY(45%);
}

</style>