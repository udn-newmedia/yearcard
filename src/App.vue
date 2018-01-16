<template>
  <div id="app">
    <!-- <router-view/> -->
    <div class="section">
      <Slides :list="list" :currentSlide="currentSlide" />
      <Foreground :currentSlide="currentSlide" />
      <div class="content">
        <button class="left" v-if="currentSlide!=0" @click="clickPre">
          <i class="fa fa-angle-left fa-3" aria-hidden="true" style="font-size: 30px; transform: translateX(75%); color: white;"></i>
        </button>
        <button class="right" v-if="currentSlide!=list.length-1" @click="clickNext">
          <i class="fa fa-angle-right fa-3" aria-hidden="true" style="font-size: 30px; transform: translateX(-75%); color: white;"></i>
        </button>
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
          <ul class="slider-nav hidden-pc" v-if="currentSlide!=0">
            <li v-for="n in bullets.length" :key="n.id">
              <img :src="bullets[n-1]" :class="{'active': n === currentSlide}">
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Share from './components/Share'
import BodyMovin from './components/BodyMovin'
import Slides from './components/Slides'
import Foreground from './components/Foreground'
import dog1 from '@/assets/dog-1.png'
import dog2 from '@/assets/dog-2.png'
import dog3 from '@/assets/dog-3.png'
import phone1 from '@/assets/phone4.png'
import phone2 from '@/assets/phone3.png'
import bullet1 from '@/assets/a-1.png'
import bullet2 from '@/assets/a-2.png'
import bullet3 from '@/assets/a-3.png'
import bg1 from '@/assets/bg1.jpg'
import bg2 from '@/assets/bg2.jpg'

export default {
  name: 'app',
  data: function () {
    return {
      currentSlide: 0,
      phone1: phone1,
      phone2: phone2,
      bullet1: bullet1,
      bullet2: bullet2,
      bullet3: bullet3,
      bg1: bg1,
      bg2: bg2,
      originalList: [
        {
          name: 'slide0',
          background: 'gray'
        },
        {
          name: 'slide1',
          pic: dog1,
          href: 'https://nmdap.udn.com.tw/yearcard/one.html',
          phone: phone1,
          btnColor: '#eb0029',
          btntxtColor: '#ffc700',
          fontColor: '#f5d949',
          fontBackground: '#eb0029',
          anim: './static/D1.json',
          title: '第一隻狗狗'
        }, {
          name: 'slide2',
          pic: dog2,
          href: 'https://nmdap.udn.com.tw/yearcard/two.html',
          phone: phone2,
          btnColor: '#ffc700',
          btntxtColor: '#eb0029',
          fontColor: '#eb0029',
          fontBackground: '#f5d949',
          anim: './static/D3.json',
          title: '第二隻狗狗'
        }, {
          name: 'slide3',
          pic: dog3,
          href: 'https://nmdap.udn.com.tw/yearcard/three.html',
          phone: phone1,
          btnColor: '#eb0029',
          btntxtColor: '#ffc700',
          fontColor: '#f5d949',
          fontBackground: '#eb0029',
          anim: './static/D4.json',
          title: '第三隻狗狗'
        }
      ],
      bullets: [
        bullet1, bullet2, bullet3
      ]
    }
  },
  computed: {
    fontColor: function () {
      if (Number(this.currentSlide) % 2 === 0) {
        return '#fff'
      } else if (Number(this.currentSlide) % 2 === 1) {
        return '#000'
      }
    },
    list: function () {
      for (let i = 1; i < this.originalList.length; i++) {
        if (i % 2 === 0) {
          this.originalList[i].background = bg2
        } else if (i % 2 === 1) {
          this.originalList[i].background = bg1
        }
      }
      return this.originalList
    }
  },
  components: {
    Share, BodyMovin, Foreground, Slides
  },
  created: function () {
    if (this.getParameterByName('dog')) {
      this.currentSlide = this.getParameterByName('dog')
    }
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

.content {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
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
  .adog { 
    transform: translateX(-50%) translateY(-50%);
  }
  *::-ms-backdrop, .adog { 
    transform: translateX(-50%) translateY(-50%);
  }
}  

button.right{
  position: absolute;
  cursor: pointer;
  top: 50%;
  right: 0;
  width: 64px;
  height: 64px;
  background: linear-gradient(to right, #5c3000, #40220f);
  border: none;
  border-radius: 50%;
  transform: translateX(50%) translateY(-50%);
}

button.left{
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 0;
  width: 64px;
  height: 64px;
  background: linear-gradient(to right, #40220f, #5c3000);
  border: none;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
}

button.left:active, button.right:active, button.left:visited, button.right:visited{
  border-style: none;
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
    transform: translateX(0) translateY(20%);
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
  position: absolute;
  border-bottom: solid 1px black;
  bottom: 20px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 20px 0 0 0;
  padding: 0;
  z-index: 3;
}

@media all and (-ms-high-contrast:none)
{
  ul.slider-nav {
    transform: translateX(-50%);
  }
  *::-ms-backdrop, ul.slider-nav {
    transform: translateX(-50%);
  }
}  

ul.slider-nav img{
  transform: translateY(4px);
}

@media screen and (min-width: 1024px){
  ul.slider-nav{
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%)
  }
}

ul.slider-nav li{
    float: left;
    margin: 0 3px;
}

ul.slider-nav img{
  opacity: 0.5;
}

ul.slider-nav img.active{
  opacity: 1;
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