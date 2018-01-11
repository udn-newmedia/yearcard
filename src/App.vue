<template>
  <div id="app">
    <!-- <router-view/> -->
    <div class="fullpage">
      <div class="section">
        <div class="slides" ref="slides" 
            :style="{
              'transition' : 'none',
              'width' : (this.list.length * 100) + '%',
              'transform' : 'translateX(-' + this.currentSlide / this.list.length * 100 + '%)'
            }">
          <div v-for="slide in list" :key="slide.name" class="slide"
            :style="{
              'background-color' : slide.background
            }">
          </div>
        </div>
        <div class="content">
          <button class="left" v-if="currentSlide!=0" @click="clickPre">上一頁</button>
          <button class="right" v-if="currentSlide!=list.length-1" @click="clickNext">下一頁</button>
            <div class="dogs" v-if="currentSlide!==0">
              <div 
                class="adog"
                v-for="(eachDog, index) in list" 
                :key="eachDog.name" 
                :style="{'opacity' : showDog(index)}" 
                v-show="index!=0">
                  <h2>第{{index}}隻狗狗</h2>
                  <img class="dog" :src="eachDog.pic">
                  <Share :href="eachDog.href"/>
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

export default {
  name: 'app',
  data: function () {
    return {
      currentSlide: 0,
      transitionDuration: 500,
      dog1: dog1,
      list: [
        {
          name: 'slide0',
          background: 'gray'
        },
        {
          name: 'slide1',
          pic: dog1,
          href: 'https://nmdap.udn.com.tw/yearcard/one.html',
          background: '#FFDDAA'
        }, {
          name: 'slide2',
          pic: dog2,
          href: 'https://nmdap.udn.com.tw/yearcard/two.html',
          background: '#CC0000'
        }, {
          name: 'slide3',
          pic: dog3,
          href: 'https://nmdap.udn.com.tw/yearcard/three.html',
          background: '#FFDDAA'
        }
      ]
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
.content {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  z-index: 1;  
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
</style>