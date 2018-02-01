<template>
  <div id="app" ref="app">
    <!-- <router-view/> -->
    <div class="section">
      <Slides :list="list" :currentSlide="currentSlide" />
      <Foreground :currentSlide="currentSlide" v-show="currentSlide < list.length-2"/>
      <div class="content">
        <Headbar buttonColor="black"/>      
        <indicator color="#40220f" :progress="getProgress"/>
        <button class="left" v-if="currentSlide!=0" @click="clickPre">
          <i class="fa fa-angle-left fa-3" aria-hidden="true" style="font-size: 30px; transform: translateX(75%); color: white;"></i>
        </button>
        <button class="right" v-if="currentSlide!=list.length-1" @click="clickNext">
          <i 
            class="fa fa-angle-right fa-3"
            :class="{'rightanim':currentSlide==0}"
            aria-hidden="true" 
            style="font-size: 30px; transform: translateX(-75%); color: white;"></i>
        </button>
        <Dogs
          :list="list" 
          :currentSlide="currentSlide" 
          :bullets="bullets"/>
        <div class="lastPage" :style="{'opacity': lastPageOpacity}">
          <OfficialShare class="hidden-pc mobpaddingLeft" :href="url"/>
          <br>
          <Editor class="mobpaddingLeft">
            <div>內容製作：連珮宇、蔡佩蓉</div>
            <div>插畫：黃微庭</div>
            <div>動畫：許藹雯</div>
            <div>網頁設計：許瑋琳</div>
            <div>攝影：林麒瑋</div>          
            <div>網頁製作：方泰鈞、鄭偉廷</div>          
            <div>監製：蔡幸怡、董谷音、潘如瑩</div>          
            <div>2018.02</div>
          </Editor>
          <p class="hidden-mobile"><br></p>
          <OfficialShare  class="hidden-mobile" :href="url"/>
          <br>
          <button @click="surveyLink" class="questionnaire">填寫閱讀體驗問卷</button>
        </div>        
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
import Utils from 'udn-newmedia-utils'

import Slides from './components/Slides'
import Headbar from './components/HeadBar'
import Foreground from './components/Foreground'
import CanvasAnim from './components/CanvasAnim'
import Editor from './components/Editor'
import OfficialShare from './components/OfficialShare'
import Dogs from './components/Dogs'
import Frame from './components/Frame'
import Logo from './components/Logo'
import Indicator from './components/Indicator'
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
import coverpic from '@/assets/cover.png'

export default {
  name: 'app',
  data: function () {
    return {
      url: 'https://udn.com/upf/newmedia/2018_data/takemehome/index.html',
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
          pic: coverpic,
          maintitle: '把好運汪汪帶回家',
          subtitle: '分享給親朋好友，祝福好狗年，也一起為流浪狗找家找愛。',
          text: '在台灣，狗平均壽命8歲，但收容所裡等不到家的狗，一待就是3、5年。聯合報尋訪動物之家，用這些笑臉製作新年AR賀卡，與狗狗們合照，鼓勵更多人「以認養代替購買」。',
          phone: phone1,
          btnColor: '#eb0029',
          btntxtColor: '#ffc700'
        },
        {
          name: 'slide1',
          pic: dog1,
          pic2: dog1Real,
          href: 'https://udn.com/upf/newmedia/2018_data/takemehome/one.html',
          phone: phone1,
          btnColor: '#eb0029',
          btntxtColor: '#ffc700',
          fontColor: '#f5d949',
          fontBackground: '#eb0029',
          anim: './static/S7.png',
          title: '風火輪小乖',
          place: '板橋動物之家',
          number: '2015072109',
          ARlink: 'https://www.facebook.com/fbcameraeffects/tryit/141368526550584/',
          doglink: 'http://www.ahiqo.ntpc.gov.tw/adopt.php?id=51071&flag=0'
        }, {
          name: 'slide2',
          pic: dog2,
          pic2: dog2Real,
          href: 'https://udn.com/upf/newmedia/2018_data/takemehome/two.html',
          phone: phone2,
          btnColor: '#ffc700',
          btntxtColor: '#eb0029',
          fontColor: '#eb0029',
          fontBackground: '#f5d949',
          anim: './static/S8.png',
          title: '大耳朵桃桃',
          place: '板橋動物之家',
          number: '2015082705',
          ARlink: 'https://www.facebook.com/fbcameraeffects/tryit/2006044492982527/',
          doglink: 'http://www.ahiqo.ntpc.gov.tw/adopt.php?id=48317&flag=0'
        }, {
          name: 'slide3',
          pic: dog3,
          pic2: dog3Real,
          href: 'https://udn.com/upf/newmedia/2018_data/takemehome/three.html',
          phone: phone1,
          btnColor: '#eb0029',
          btntxtColor: '#ffc700',
          fontColor: '#f5d949',
          fontBackground: '#eb0029',
          anim: './static/S3.png',
          title: '等家最久黑嚕嚕',
          place: '中和動物之家',
          number: '2012080701',
          ARlink: 'https://www.facebook.com/fbcameraeffects/tryit/1438851946237312/',
          doglink: 'http://www.ahiqo.ntpc.gov.tw/adopt.php?id=43957&flag=0'
        }, {
          name: 'slide4',
          pic: dog4,
          pic2: dog4Real,
          href: 'https://udn.com/upf/newmedia/2018_data/takemehome/four.html',
          phone: phone2,
          btnColor: '#ffc700',
          btntxtColor: '#eb0029',
          fontColor: '#eb0029',
          fontBackground: '#f5d949',
          anim: './static/S5.png',
          title: '風火輪白白',
          place: '板橋動物之家',
          number: '2015100801',
          ARlink: 'https://www.facebook.com/fbcameraeffects/tryit/586046791745349/',
          doglink: 'http://www.ahiqo.ntpc.gov.tw/adopt.php?id=53365&flag=0'
        }, {
          name: 'slide5',
          pic: dog5,
          pic2: dog5Real,
          href: 'https://udn.com/upf/newmedia/2018_data/takemehome/five.html',
          phone: phone1,
          btnColor: '#eb0029',
          btntxtColor: '#ffc700',
          fontColor: '#f5d949',
          fontBackground: '#eb0029',
          anim: './static/S6.png',
          title: '皮皺皺五小福',
          place: '板橋動物之家',
          number: '2017061909-13',
          ARlink: 'https://www.facebook.com/fbcameraeffects/tryit/1002034936601268/',
          doglink: 'http://www.ahiqo.ntpc.gov.tw/adopt.php?id=67825&flag=0'
        }, {
          name: 'slide6',
          pic: dog6,
          pic2: dog6Real,
          href: 'https://udn.com/upf/newmedia/2018_data/takemehome/six.html',
          phone: phone2,
          btnColor: '#ffc700',
          btntxtColor: '#eb0029',
          fontColor: '#eb0029',
          fontBackground: '#f5d949',
          anim: './static/S1.png',
          title: '啾咪黑美眉',
          place: '板橋動物之家',
          number: '2017090106',
          ARlink: 'https://www.facebook.com/fbcameraeffects/tryit/172002786863502/',
          doglink: 'http://www.ahiqo.ntpc.gov.tw/adopt.php?id=69011&flag=0'
        }, {
          name: 'slide7',
          pic: dog6,
          pic2: dog6Real,
          href: 'https://udn.com/upf/newmedia/2018_data/takemehome/six.html',
          phone: phone2,
          btnColor: '#ffc700',
          btntxtColor: '#eb0029',
          fontColor: '#eb0029',
          fontBackground: '#f5d949',
          anim: './static/S1.png',
          title: '啾咪黑美眉',
          place: '板橋動物之家',
          number: '2017090106',
          ARlink: 'https://www.facebook.com/fbcameraeffects/tryit/172002786863502/'
        }, {
          name: 'slide8',
          href: './index.html'
        }
      ],
      bullets: [
        bullet1, bullet2, bullet3, bullet4, bullet5, bullet6
      ],
      device: Utils.detectPlatform()
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
    },
    lastPageOpacity: function () {
      if (this.currentSlide === this.list.length - 1) {
        return 1
      } else {
        return 0
      }
    },
    getProgress: function () {
      return (this.currentSlide + 1) / this.list.length * 100
    }
  },
  components: {
    Foreground, Slides, Dogs, Headbar, Frame, Logo, CanvasAnim, OfficialShare, Editor, Indicator
  },
  created: function () {
    if (this.getParameterByName('dog')) {
      this.currentSlide = this.getParameterByName('dog')
    }
    this.$eventHub.$on('change-bullet', this.changeSlide)
  },
  mounted: function () {
    let $app = this.$refs.app
    if (this.device === 'Mob') {
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
    }
  },
  beforeDestroy: function () {
    this.$eventHub.$off('change-bullet')
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
    changeSlide: function (bulletIndex) {
      this.currentSlide = bulletIndex
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
    },
    surveyLink: function () {
      window.open('https://www.surveycake.com/s/KpQKN', '_blank')
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow-y: hidden;
}
#app {
  font-family: "微軟正黑體", "Microsoft JhengHei", 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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

h1 {
  font-size: 45px;
}

@media screen and (min-width: 768px) and (max-width: 1023px){
  h1 {
    margin: 1px;
  }
}

@media screen and (min-width: 375px) and (max-width: 767px){
  h1 {
    font-size: 30px;
    margin: 1px;
  }
}

@media screen and (max-width: 374px){
  h1 {
    font-size: 26px;
    margin: 0;
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

.rightanim {
  animation-name: bounce;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(-75%, 0, 0);
    transform: translate3d(-75%, 0, 0);
  }
  40%, 43% {
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      -webkit-transform: translate3d(-25px, 0, 0);
      transform: translate3d(-25px, 0, 0);
  }
  70% {
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      -webkit-transform: translate3d(-20px, 0, 0);
      transform: translate3d(-20px, 0, 0);
  }
  90% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
  }
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
  z-index: 999;
}

.lastPage{
  position: absolute;
  overflow-y: hidden;
  width: 90%;
}

@media screen and (min-width: 768px) and (max-width: 1023px){
  .lastPage{
    width: 80%;
  }
}

@media screen and (min-width:1024px) and (max-width:1199px){
  .lastPage{
    width: 950px;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}

@media screen and (min-width:1200px){
  .lastPage{
    width: 1100px;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}

@media screen and (max-width: 1023px){
  .lastPage .mobpaddingLeft{
    padding-left: 30px;
  }  
}

button.questionnaire{
  font-family: "Microsoft JhengHei";
  width: 100%;
  height: 70px;
  border-radius: 50px;
  font-size: 18px;
  color: #636363;
  background-color: #ffffff;
  box-shadow: 0px 3px 7px 0 rgba(0, 0, 0, 0.1);
  border: solid 2px #dcdcdc;
  cursor: pointer;
}

@media screen and (min-width: 1024px){
  button.questionnaire{
    width: 500px;
    height: 100px;
  }
}
</style>