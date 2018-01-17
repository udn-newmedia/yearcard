<template>
  <div id="app">
    <!-- <router-view/> -->
    <div class="section">
      <Slides :list="list" :currentSlide="currentSlide" />
      <Foreground :currentSlide="currentSlide" />
      <div class="content">
        <Headbar buttonColor="black"/>      
        <button class="left" v-if="currentSlide!=0" @click="clickPre">
          <i class="fa fa-angle-left fa-3" aria-hidden="true" style="font-size: 30px; transform: translateX(75%); color: white;"></i>
        </button>
        <button class="right" v-if="currentSlide!=list.length-1" @click="clickNext">
          <i class="fa fa-angle-right fa-3" aria-hidden="true" style="font-size: 30px; transform: translateX(-75%); color: white;"></i>
        </button>
        <Dogs :list="list" :currentSlide="currentSlide" :bullets="bullets" />
      </div>
    </div>
  </div>
</template>

<script>
import Slides from './components/Slides'
import Headbar from './components/HeadBar'
import Foreground from './components/Foreground'
import Dogs from './components/Dogs'
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
    list: function () {
      for (let i = 1; i < this.originalList.length; i++) {
        if (i % 2 === 0) {
          this.originalList[i].background = bg2
        } else if (i % 2 === 1) {
          this.originalList[i].background = bg1
        }
      }
      return this.originalList
    },
    headbarBackground: function () {
      if (this.currentSlide === 0) {
        return 'gray'
      } else if (this.currentSlide % 2 === 1) {
        return bg1
      } else if (this.currentSlide % 2 === 0) {
        return bg2
      }
    }
  },
  components: {
    Foreground, Slides, Dogs, Headbar
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

h1 {
  font-size: 45px;
}

@media screen and (max-width: 1023px){
  h1 {
    font-size: 30px;
    margin: 1px;
  }
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