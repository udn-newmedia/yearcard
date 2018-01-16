<template>
  <div class="dogs" v-if="currentSlide!=0">
    <div 
      class="adog"
      v-for="(eachDog, index) in list" 
      :key="eachDog.name" 
      :style="{
        'opacity' : showDog(index),
        'z-index' : getZindex(index)
      }" 
      v-show="index!=0">
        <div class="words">
          <div
            class="title wordbyword"
            v-for="(word, index) in eachDog.title"
            :key="index"
            :style="{
              'background-color' : eachDog.fontBackground,
              'color' : eachDog.fontColor
            }">
            {{word}}
          </div>
          <h1 
            class="title" 
            :style="{
              'color' : fontColor
            }">帶我們回家<br>陪你過年，好嗎？</h1>
          <div class="text hidden-mobile" 
            :style="{
              'color' : fontColor
            }">
            <p>毛色 : 黑色 短</p>
            <p>體型 : 中型、品種 : 混種</p>
            <Share
              style="text-align: center;
                    margin-top: 30px;" 
              :href="eachDog.href"/>
          </div>
        </div>
        <img class="dog" :src="eachDog.pic">
        <ul class="slider-nav hidden-mobile" v-if="currentSlide!=0">
          <li v-for="n in bullets.length" :key="n.id">
            <img :src="bullets[n-1]" :class="{'active': n === currentSlide}">
          </li>
        </ul>
        <div class="text hidden-pc"
          :style="{
            'color' : fontColor
          }">
          <p>毛色 : 黑色 短</p>
          <p>體型 : 中型、品種 : 混種</p>
        </div>
        <Share class="hidden-pc" :href="eachDog.href"/>
        <div class="phone">
          <img :src="eachDog.phone" alt="">
          <button 
            class="interaction"
            :style="{
              'background-color': eachDog.btnColor,
              'color': eachDog.btntxtColor
            }">
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
            與我互動
          </button>
          <BodyMovin :jsonfile="eachDog.anim"></BodyMovin>
        </div>
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