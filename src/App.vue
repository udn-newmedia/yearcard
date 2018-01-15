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
                    <h1 class="title">帶我們回家<br>陪你過年，好嗎？</h1>
                    <div class="text hidden-mobile">
                      <p>毛色 : 黑色 短</p>
                      <p>體型 : 中型、品種 : 混種</p>
                      <Share
                        style="text-align: center;
                              margin-top: 30px;" 
                        :href="eachDog.href"/>
                    </div>
                  </div>
                  <img class="dog" :src="eachDog.pic">
                  <div class="text hidden-pc">
                    <p>毛色 : 黑色 短</p>
                    <p>體型 : 中型、品種 : 混種</p>
                  </div>
                  <Share class="hidden-pc" :href="eachDog.href"/>
                  <!-- <ul class="slider-nav">
                    <li v-for="n in list.length-1" :key="n.id">
                      <span class="bullet" :class="{'active': n === currentSlide}"></span>
                    </li>
                  </ul> -->
                  <div class="phone">
                    <img :src="eachDog.phone" alt="">
                    <button 
                      class="interaction"
                      :style="{
                        'background-color': eachDog.btnColor,
                        'color': eachDog.btntxtColor
                      }"
                    ><img class="arrow" :src="eachDog.arrow">與我互動</button>
                    <BodyMovin :jsonfile="eachDog.anim"></BodyMovin>
                  </div>
              </div>
            </div>          
        </div>
        <ul class="slider-nav">
          <li v-for="(n, index) in bullets.length" :key="n.id">
            <img :src="bullets[index]" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Share from './components/Share'
import BodyMovin from './components/BodyMovin'
import dog1 from '@/assets/dog-1.png'
import dog2 from '@/assets/dog-2.png'
import dog3 from '@/assets/dog-3.png'
import bg1 from '@/assets/bg1.jpg'
import bg2 from '@/assets/bg2.jpg'
import circle1 from '@/assets/circle-1.png'
import circle2 from '@/assets/circle-2.png'
import phone1 from '@/assets/phone4.png'
import phone2 from '@/assets/phone3.png'
import arrow1 from '@/assets/up2.png'
import arrow2 from '@/assets/up.png'
import bullet1 from '@/assets/a-1.png'
import bullet2 from '@/assets/a-2.png'
import bullet3 from '@/assets/a-3.png'

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
      phone1: phone1,
      phone2: phone2,
      arrow1: arrow1,
      arrow2: arrow2,
      bullet1: bullet1,
      bullet2: bullet2,
      bullet3: bullet3,
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
          circle: circle2,
          phone: phone1,
          btnColor: '#eb0029',
          btntxtColor: '#ffc700',
          fontColor: '#f5d949',
          fontBackground: '#eb0029',
          anim: './static/D1.json',
          arrow: arrow1,
          title: '第一隻狗狗'
        }, {
          name: 'slide2',
          pic: dog2,
          href: 'https://nmdap.udn.com.tw/yearcard/two.html',
          background: bg2,
          circle: circle1,
          phone: phone2,
          btnColor: '#ffc700',
          btntxtColor: '#eb0029',
          fontColor: '#eb0029',
          fontBackground: '#f5d949',
          anim: './static/D3.json',
          arrow: arrow2,
          title: '第二隻狗狗'
        }, {
          name: 'slide3',
          pic: dog3,
          href: 'https://nmdap.udn.com.tw/yearcard/three.html',
          background: bg1,
          circle: circle2,
          phone: phone1,
          btnColor: '#eb0029',
          btntxtColor: '#ffc700',
          fontColor: '#f5d949',
          fontBackground: '#eb0029',
          anim: './static/D4.json',
          arrow: arrow1,
          title: '第三隻狗狗'
        }
      ],
      bullets: [
        bullet1, bullet2, bullet3
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
    Share, BodyMovin
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
  flex-direction: column;
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
    width: 1084px;
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
  background: gray;
  overflow-x: hidden;
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

.words{
  text-align: left;
}

.title.wordbyword {
  display: inline-block;
  text-align: center;
  line-height:30px;
  width: 30px;
  height: 30px;
  background: red;
  border-radius: 50%;
  margin-right: 10px;
  font-weight: bold;
  font-size: 18px;
}

@media screen and (min-width: 1024px){
  .words{
    position: absolute;
    top: 20%;
    transform: translateY(-50%);
  }

  .text {
    position: absolute;
    left: 0;
  }

  .title.wordbyword {
    line-height:50px;
    width: 50px;
    height: 50px;
    font-size: 30px;
  }
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

.phone{
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 0;
  bottom: 0;
  transform: translateX(25%);
}

.phone img{
  width: 54px;
  margin-bottom: 8px;
}

@media screen and (min-width: 1024px){
  .phone{
    transform: translateX(0);
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .phone img{
    width: 118px;
    margin-bottom: 29px;
  }
}

button.interaction {
  font-family: inherit;
  font-size: 15px;
  line-height: 1.87;
  color: white;
  border: none;
  width: 90px;
  height: 30px;
  border-radius: 15px;
  box-shadow: 0 0 4px 2px rgba(53, 53, 53, 0.14);
}

@media screen and (min-width: 1024px){
  button.interaction {
    width: 155px;
    height: 60px;
    border-radius: 30px;
    font-size: 21px;
  }
}

img.arrow{
  width: 15px;
  margin-bottom: 0;
}

@media screen and (min-width: 1024px){
  img.arrow{
    width: 21px;
  }  
}

ul.slider-nav{
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 20px 0 0 0;
  padding: 0;
}

ul.slider-nav li{
    float: left;
    margin: 0 3px;
}

ul.slider-nav li .bullet{
    display: block;
    width: 10px;
    height: 10px;
    border: 1px solid #ddd;
    border-radius: 50%;
    background: transparent;
}

ul.slider-nav li .bullet.active{
    background: #bfbfbf;
    border-color: #bfbfbf;
}

.clearfix{
  clear: both;
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