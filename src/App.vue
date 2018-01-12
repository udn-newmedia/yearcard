<template>
  <div id="app">
    <!-- <router-view/> -->
    <div class="fullpage">
      <div class="section">
        <div class="slides" ref="slides" 
            :style="{
              'transition' : 'none',
              'width' : (list.length * 100) + '%',
              'transform' : 'translateX(-' + currentSlide / list.length * 100 + '%)'
            }">
          <div v-for="slide in list" :key="slide.name" class="slide"
            :style="{
              'background-image' : 'url(' + slide.background + ')'
            }">
          </div>
        </div>
        <div class="bg">
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
        </div>
        <div class="content">
          <button class="left" v-if="currentSlide!=0" @click="clickPre">上一頁</button>
          <button class="right" v-if="currentSlide!=list.length-1" @click="clickNext">下一頁</button>
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
                  <h2 class="title wrapper">第{{index}}隻狗狗</h2>
                  <img class="dog" :src="eachDog.pic">
                  <div class="text wrapper">
                    <p>毛色 : 黑色 短</p>
                    <p>體型 : 中型、品種 : 混種</p>
                  </div>
                  <Share class="wrapper" :href="eachDog.href"/>
              </div>
              <!-- <ul class="slider-nav">
                <li v-for="n in list.length-3" :key="n.id">
                  <span class="circle" :class="{'active': n === current}"></span>
                </li>
              </ul> -->
            </div>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Share from './components/Share'
import dog1 from '@/assets/dog-1.png'
import dog2 from '@/assets/dog-2.png'
import dog3 from '@/assets/dog-3.png'
import bg1 from '@/assets/bg1.jpg'
import bg2 from '@/assets/bg2.jpg'
import circle1 from '@/assets/circle-1.png'
import circle2 from '@/assets/circle-2.png'

export default {
  name: 'app',
  data: function () {
    return {
      currentSlide: 0,
      transitionDuration: 500,
      bg1: bg1,
      bg2: bg2,
      circle1: circle1,
      circle2: circle2,
      list: [
        {
          name: 'slide0',
          background: 'gray'
        },
        {
          name: 'slide1',
          pic: dog1,
          href: 'https://nmdap.udn.com.tw/yearcard/one.html',
          background: bg1,
          circle: circle2
        }, {
          name: 'slide2',
          pic: dog2,
          href: 'https://nmdap.udn.com.tw/yearcard/two.html',
          background: bg2,
          circle: circle1
        }, {
          name: 'slide3',
          pic: dog3,
          href: 'https://nmdap.udn.com.tw/yearcard/three.html',
          background: bg1,
          circle: circle2
        }
      ]
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
  },
  components: {
    Share
  },
  created: function () {
    if (this.getParameterByName('dog')) {
      this.currentSlide = this.getParameterByName('dog')
    }
  },
  mounted: function () {
    let $slides = this.$refs.slides
    $slides.style.transition = 'all ' + this.transitionDuration / 1000 + 's'
  },
  methods: {
    getParameterByName: function (name, url) {
      if (!url) url = window.location.href
      name = name.replace(/[\\]]/g, '\\$&')
      let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
      let results = regex.exec(url)
      if (!results) return null
      if (!results[2]) return ''
      return decodeURIComponent(results[2].replace(/\+/g, ' '))
    },
    clickPre: function () {
      if (this.currentSlide > 0) {
        this.currentSlide--
      }
    },
    clickNext: function () {
      if (this.currentSlide < this.list.length - 1) {
        this.currentSlide++
      }
    },
    showDog: function (index) {
      if (index === Number(this.currentSlide)) {
        return '1'
      } else {
        return '0'
      }
    },
    getZindex: function (index) {
      if (index === Number(this.currentSlide)) {
        return '3'
      } else {
        return '2'
      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "微軟正黑體", "Microsoft JhengHei", 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: gray;
}

.section {
  position: relative;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
}
.slides {
  position: absolute;
  display: flex;
  height: 100%;
  z-index: 0;
}

.bg{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;   
}

.content {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  z-index: 2;  
  display: flex;
  justify-content: center;
  align-items: center;
}
.dogs {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media screen and (max-width: 1023px){
  .dogs {
    width: 75%;
  }

  img.dog{
    width: 100%;
  }
}

.adog {
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-50%);
  will-change: opacity;
  transition: all 1s;
}

@media screen and (min-width: 1024px){
  .adog {
    transform: translateX(-50%) translateY(-50%);
  }  
}

@media all and (-ms-high-contrast:none)
{
  .adog { /*IE10*/
    transform: translateX(-50%) translateY(-50%);
  }
  *::-ms-backdrop, .adog { /*IE11*/
    transform: translateX(-50%) translateY(-50%);
  }
}  

.slide {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

button.right{
  position: absolute;
  top: 50%;
  right: 0;
}

button.left{
  position: absolute;
  top: 50%;
  left: 0;
}

.text{
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;
}

.text p{
  margin: 0;
}

.wrapper{
  padding-left: 10%;
  padding-right: 10%;
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

@media screen and (max-width: 1023px){
  .hidden-pc{
    display: none;
  }
}
</style>