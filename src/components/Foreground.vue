<template>
  <div class="bg">
    <div v-if="currentSlide==0">
      <div class="circle circleLeftTop cover hidden-pc"
        :style="{
          'background-image' : 'url(' + selectCircle + ')'
        }">
      </div>
      <div class="circle circleLeftBottom cover hidden-pc"
        :style="{
          'background-image' : 'url(' + selectCircle + ')'
        }">
      </div>
      <div class="circle circleRightTop cover hidden-pc"
        :style="{
          'background-image' : 'url(' + selectCircle + ')'
        }">
      </div>
      <div class="circle circleRightBottom cover hidden-pc"
        :style="{
          'background-image' : 'url(' + selectCircle + ')'
        }">
      </div>
      <div class="circle bottom cover hidden-pc"
        :style="{
          'background-image' : 'url(' + selectCircle + ')'
        }">
        <img class="decoration" :src="decoration">
      </div>
      <img class="decoration horizontal hidden-pc" :src="decoration"/>
      <div class="circleWrapper right cover hidden-mobile"
        :style="{
          'background-image' : 'url(' + selectCircle + ')'
        }">
        <div class="circle"
          :style="{
            'background-image' : 'url(' + selectCircle + ')'
          }"></div>
      </div>
      <div class="circleWrapper left cover hidden-mobile"
        :style="{
          'background-image' : 'url(' + selectCircle + ')'
        }">
        <img :src="decoration">
      </div>      
      <div class="circle top cover hidden-mobile"
        :style="{
          'background-image' : 'url(' + selectCircle + ')'
        }">
      </div>      
    </div>    
    <div v-else>
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
  </div>
</template>

<script>

import circle1 from '@/assets/circle-1.png'
import circle2 from '@/assets/circle-2.png'
import decoration from '@/assets/decoration.png'

export default {
  name: 'Slides',
  props: ['currentSlide'],
  data: function () {
    return {
      circle1: circle1,
      circle2: circle2,
      decoration: decoration
    }
  },
  computed: {
    selectCircle: function () {
      if (Number(this.currentSlide) % 2 === 0) {
        return this.circle1
      } else if (Number(this.currentSlide) % 2 === 1) {
        return this.circle2
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

.circleWrapper.left.cover{
  width: 50vh;
  height: 50vh;
  transform: translateX(-30%);
}

.circleWrapper.left.cover img{
  width: 75px;
  transform: translateY(-10%);
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

.circleLeftTop.cover{
  top: 0;
  left: 10%;
  width: 200px;
  height: 200px;
  transform: translateY(-30%);
}

.circleLeftBottom{
  bottom: 50px;
  left: 0;
  width: 150px;
  height: 150px;
  transform: translateX(-50%);
}

.circleLeftBottom.cover{
  bottom: 50px;
  left: 0;
  width: 200px;
  height: 200px;
  transform: translateX(-50%);
}

.circleRightTop{
  top: 150px;
  right: 0;
  width: 100px;
  height: 100px;
  transform: translateX(20%);
}

.circleRightTop.cover{
  top: 10%;
  right: 0;
  width: 130px;
  height: 130px;
  transform: translateX(40%);
}

.circleRightBottom{
  bottom: 0;
  right: 0;
  width: 130px;
  height: 130px;
  transform: translateX(45%) translateY(45%);
}

.circleRightBottom.cover{
  bottom: 15%;
  right: 0;
  width: 150px;
  height: 150px;
  transform: translateX(45%);
}

.circle.bottom.cover{
  bottom: 0;
  left: 50%;
  width: 130px;
  height: 130px;
  transform: translateX(-50%) translateY(45%);
}

.circle.top.cover{
  top: 0;
  left: 50%;
  width: 150px;
  height: 150px;
  transform: translateX(-50%) translateY(-10%);
}

.decoration.horizontal{
  width: 50px;
  transform: rotate(90deg) translateX(100%);
}

@media screen and (max-height: 666px){
  .decoration, .decoration.horizontal{
    display: none;
  }
}

.circle.bottom.cover img {
  width: 50px;
  transform: rotate(90deg) translateX(-100%)
}

@media screen and (max-width: 1023px){
  .hidden-mobile{
    display: none!important;
  }
}

@media screen and (min-width: 1024px){
  .hidden-pc{
    display: none!important;
  }
}

</style>