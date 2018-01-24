<template>
  <div id="app" ref="app">
    <!-- <router-view/> -->
    <div class="section">
      <Slides :list="list" :currentSlide="currentSlide" />
      <Foreground :currentSlide="currentSlide" v-show="currentSlide < list.length-2"/>
      <div class="content">
        <Headbar buttonColor="black"/>      
        <button class="left" v-if="currentSlide!=0" @click="clickPre">
          <i class="fa fa-angle-left fa-3" aria-hidden="true" style="font-size: 30px; transform: translateX(75%); color: white;"></i>
        </button>
        <button class="right" v-if="currentSlide!=list.length-1" @click="clickNext">
          <i class="fa fa-angle-right fa-3" aria-hidden="true" style="font-size: 30px; transform: translateX(-75%); color: white;"></i>
        </button>
        <Dogs :list="list" :currentSlide="currentSlide" :bullets="bullets" />
        <Frame v-if="currentSlide==0"/>
      </div>
    </div>
    <div class="logoblock" v-show="currentSlide === list.length - 1">
      <Logo/>
    </div>      
  </div>
</template>

<script>
import * as Hammer from 'Hammerjs'
import Slides from './components/Slides'
import Headbar from './components/HeadBar'
import Foreground from './components/Foreground'
import Dogs from './components/Dogs'
import Frame from './components/Frame'
import Logo from './components/Logo'
import dog1 from '@/assets/d-1.png'
import dog1Real from '@/assets/d-2.png'
import dog2 from '@/assets/d-3.png'
import dog2Real from '@/assets/d-4.png'
import dog3 from '@/assets/d-5.png'
import dog3Real from '@/assets/d-6.png'
import dog4 from '@/assets/d-7.png'
import dog4Real from '@/assets/d-8.png'
import dog5 from '@/assets/d-9.png'
import dog5Real from '@/assets/d-10.png'
import dog6 from '@/assets/d-11.png'
import dog6Real from '@/assets/d-12.png'
import phone1 from '@/assets/phone4.png'
import phone2 from '@/assets/phone3.png'
import bullet1 from '@/assets/a-1.png'
import bullet2 from '@/assets/a-2.png'
import bullet3 from '@/assets/a-3.png'
import bullet4 from '@/assets/a-4.png'
import bullet5 from '@/assets/a-5.png'
import bullet6 from '@/assets/a-6.png'
import bullet7 from '@/assets/a-7.png'
import bullet8 from '@/assets/a-8.png'
import bg1 from '@/assets/bg1.jpg'
import bg2 from '@/assets/bg2.jpg'
import cover from '@/assets/cover.png'

export default {
  name: 'app',
  data: function () {
    return {
      testjson: './static/D7.json',
      panOnce: false,
      currentSlide: 0,
      phone1: phone1,
      phone2: phone2,
      bullet1: bullet1,
      bullet2: bullet2,
      bullet3: bullet3,
      bullet4: bullet4,
      bullet5: bullet5,
      bullet6: bullet6,
      bullet7: bullet7,
      bullet8: bullet8,
      bg1: bg1,
      bg2: bg2,
      originalList: [
        {
          name: 'slide0',
          pic: cover,
          maintitle: '把好運汪汪帶回家',
          text: '在台灣，狗平均壽命8歲，但進到收容所，有的一待就是3、5年。聯合報尋訪動物之家，將一張張囚禁的笑臉，繪製成狗年賀卡。帶牠們回家、幫牠們找家，也給自己一個被愛的機會。'
        },
        {
          name: 'slide1',
          pic: dog1,
          pic2: dog1Real,
          href: 'https://nmdap.udn.com.tw/yearcard/one.html',
          phone: phone1,
          btnColor: '#eb0029',
          btntxtColor: '#ffc700',
          fontColor: '#f5d949',
          fontBackground: '#eb0029',
          anim: './static/D7.json',
          title: '風火輪小乖',
          place: '板橋動物之家',
          number: '2015072109',
          ARlink: 'https://www.facebook.com/fbcameraeffects/tryit/141368526550584/'
        }, {
          name: 'slide2',
          pic: dog2,
          pic2: dog2Real,
          href: 'https://nmdap.udn.com.tw/yearcard/two.html',
          phone: phone2,
          btnColor: '#ffc700',
          btntxtColor: '#eb0029',
          fontColor: '#eb0029',
          fontBackground: '#f5d949',
          anim: './static/D8.json',
          title: '大耳朵桃桃',
          place: '板橋動物之家',
          number: '2015082705',
          ARlink: 'https://www.facebook.com/fbcameraeffects/tryit/2006044492982527/'
        }, {
          name: 'slide3',
          pic: dog3,
          pic2: dog3Real,
          href: 'https://nmdap.udn.com.tw/yearcard/three.html',
          phone: phone1,
          btnColor: '#eb0029',
          btntxtColor: '#ffc700',
          fontColor: '#f5d949',
          fontBackground: '#eb0029',
          anim: './static/D3.json',
          title: '等家最久黑嚕嚕',
          place: '中和動物之家',
          number: '2012080701',
          ARlink: 'https://www.facebook.com/fbcameraeffects/tryit/1438851946237312/'
        }, {
          name: 'slide4',
          pic: dog4,
          pic2: dog4Real,
          href: 'https://nmdap.udn.com.tw/yearcard/one.html',
          phone: phone2,
          btnColor: '#ffc700',
          btntxtColor: '#eb0029',
          fontColor: '#eb0029',
          fontBackground: '#f5d949',
          anim: './static/D5.json',
          title: '風火輪小白',
          place: '板橋動物之家',
          number: '2015100801',
          ARlink: 'https://www.facebook.com/fbcameraeffects/tryit/586046791745349/'
        }, {
          name: 'slide5',
          pic: dog5,
          pic2: dog5Real,
          href: 'https://nmdap.udn.com.tw/yearcard/two.html',
          phone: phone1,
          btnColor: '#eb0029',
          btntxtColor: '#ffc700',
          fontColor: '#f5d949',
          fontBackground: '#eb0029',
          anim: './static/D6.json',
          title: '皮皺皺五小福',
          place: '板橋動物之家',
          number: '2017061909-13',
          ARlink: 'https://www.facebook.com/fbcameraeffects/tryit/1002034936601268/'
        }, {
          name: 'slide6',
          pic: dog6,
          pic2: dog6Real,
          href: 'https://nmdap.udn.com.tw/yearcard/three.html',
          phone: phone2,
          btnColor: '#ffc700',
          btntxtColor: '#eb0029',
          fontColor: '#eb0029',
          fontBackground: '#f5d949',
          anim: './static/D1.json',
          title: '啾咪黑美眉',
          place: '板橋動物之家',
          number: '2017090106',
          ARlink: 'https://www.facebook.com/fbcameraeffects/tryit/172002786863502/'
        }, {
          name: 'slide7'
        }, {
          name: 'slide8',
          href: './index.html'
        }
      ],
      bullets: [
        bullet1, bullet2, bullet3, bullet4, bullet5, bullet6, bullet7, bullet8
      ]
    }
  },
  computed: {
    list: function () {
      for (let i = 0; i < this.originalList.length; i++) {
        if (i % 2 === 0) {
          this.originalList[i].background = bg2
        } else if (i % 2 === 1) {
          this.originalList[i].background = bg1
        }
      }
      return this.originalList
    },
    headbarBackground: function () {
      if (this.currentSlide % 2 === 1) {
        return bg1
      } else if (this.currentSlide % 2 === 0) {
        return bg2
      }
    }
  },
  components: {
    Foreground, Slides, Dogs, Headbar, Frame, Logo
  },
  created: function () {
    if (this.getParameterByName('dog')) {
      this.currentSlide = this.getParameterByName('dog')
    }
  },
  mounted: function () {
    let $app = this.$refs.app
    let hammer = new Hammer($app)
    hammer.on('panleft', function (ev) {
      if (!this.panOnce) {
        this.clickNext()
        this.panOnce = true
        setTimeout(() => {
          this.panOnce = false
        }, 750)
      }
    }.bind(this))

    hammer.on('panright', function (ev) {
      if (!this.panOnce) {
        this.clickPre()
        this.panOnce = true
        setTimeout(() => {
          this.panOnce = false
        }, 750)
      }
    }.bind(this))
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
        if (!this.panOnce) {
          this.currentSlide--
          this.panOnce = true
          setTimeout(() => {
            this.panOnce = false
          }, 750)
        }
      }
    },
    clickNext: function () {
      if (this.currentSlide < this.list.length - 1) {
        if (!this.panOnce) {
          this.currentSlide++
          this.panOnce = true
          setTimeout(() => {
            this.panOnce = false
          }, 750)
        }
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
  z-index: 999;
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
  z-index: 999;
}

button.left:active, button.right:active, button.left:visited, button.right:visited{
  border-style: none;
}

.logoblock{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 64px;
  background: white;
}

</style>