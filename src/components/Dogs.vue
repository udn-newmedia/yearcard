<template>
  <div class="dogs">
    <div 
      class="adog"
      v-for="(eachDog, index) in list" 
      :key="eachDog.name" 
      :style="{
        'opacity' : showDog(index),
        'z-index' : getZindex(index)
      }">
      <div class="wrapper" v-if="currentSlide < list.length-2">
        <div class="imgWrapper hidden-mobile" v-if="currentSlide!=0">
          <div class="innerwrapper" style="position: relative;">
            <img 
              class="dog"
              :class="{'show': real}"
              :src="eachDog.pic2"
              style="position: absolute; top: 0;">
            <img
              class="dog"
              :class="{
                'show': !real
              }" 
              :src="eachDog.pic">
            <img
              v-show="currentSlide==6"
              class="angel" 
              :src="angel">
            <div class="dialogue" v-show="currentSlide==6 && showdialogue">
              <div class="closebutton" @click="clickclose">
                <i class="fa fa-close"></i>
              </div>
              <!-- <p>在收容所住了三年<br>白白來不及等到一個家<br>在專題上線前幾日當了天使<br>我們還是留下她最後的笑臉<br>希望我們都在新的一年<br>「愛得及時」</p> -->
              <p>在收容所住了三年<br>白白來不及等到一個家<br>在專題上線前<br>當了天使<br>我們留下白白最後的笑臉<br>希望我們都在新的一年<br>愛得及時</p>
            </div>
          </div>          
        </div>
        <div v-else>
          <div class="imgWrapper hidden-mobile">
            <img
              class="dog cover"
              :src="eachDog.pic">                    
          </div>        
        </div>
        <div 
          class="words">
          <h1 
            class="title"
            v-if="currentSlide!=0"
            :style="{
              'color' : textColor
            }">{{eachDog.slogan}}<br>陪你過年好嗎？</h1>
          <h1 
            class="title hidden-mobile"
            v-else
            :style="{
              'color' : textColor
            }">{{list[currentSlide].maintitle}}</h1>
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
          <div class="text hidden-mobile" 
            :style="{
              'color' : textColor
            }">
            <p class="subtitle">{{list[currentSlide].subtitle}}</p>
            <p>{{list[currentSlide].text}}</p>
            <a class="underline"
              :style="{
                'color' : textColor
              }"
              :href="list[currentSlide].doglink" 
              target="_blank"
              @click="sendga(list[currentSlide].doglink)">{{list[currentSlide].place}}</a>
            <!-- <p class="number">{{list[currentSlide].number}}</p> -->
            <Share
              style="text-align: center;
                    margin-top: 30px;" 
              :href="eachDog.href"
              v-show="currentSlide!=0"/>
          </div>
        </div>
        <div style="position: relative">
        <div class="imgWrapper hidden-pc" v-if="currentSlide!=0">
          <div class="innerwrapper" style="position: relative;">
          <img 
            class="dog"
            :class="{'show': real}"
            :src="eachDog.pic2"
            style="position: absolute; top: 0;">
          <img
            class="dog"
            :class="{
              'show': !real
            }" 
            :src="eachDog.pic">
          <img
            v-show="currentSlide==6"
            class="angel" 
            :src="angel">                    
          </div>
        </div>
        <div class="imgWrapper hidden-pc" v-else>
          <img
            class="dog cover"
            :src="eachDog.pic">                    
        </div>
        <h1 
          class="title hidden-pc"
          :style="{
            'color' : textColor
          }">{{list[currentSlide].maintitle}}</h1>
        <div class="text hidden-pc"
          :style="{
            'color' : textColor
          }">
          <p class="subtitle">{{list[currentSlide].subtitle}}</p>
          <p>{{list[currentSlide].text}}</p>
          <a class="underline"
            :style="{
              'color' : textColor
            }" 
            :href="list[currentSlide].doglink" 
            target="_blank"
            @click="sendga(list[currentSlide].doglink)">{{list[currentSlide].place}}</a>
          <!-- <p class="number">{{list[currentSlide].number}}</p> -->
        </div>
        <div class="dialogue hidden-pc" v-show="currentSlide==6 && showdialogue">
          <div class="closebutton" @click="clickclose">
            <i class="fa fa-close"></i>
          </div>          
          <!-- <p>在收容所住了三年<br>白白來不及等到一個家<br>在專題上線前幾日當了天使<br>我們還是留下她最後的笑臉<br>希望我們都在新的一年<br>「愛得及時」</p>             -->
          <p>在收容所住了三年<br>白白來不及等到一個家<br>在專題上線前<br>當了天使<br>我們留下白白最後的笑臉<br>希望我們都在新的一年<br>愛得及時</p>
        </div>
        </div>
        <Share 
          class="hidden-pc" 
          :href="eachDog.href"
          :name="eachDog.title"
          v-show="currentSlide!=0"/>
        <ul class="slider-nav hidden-mobile" v-if="currentSlide>0 && currentSlide<list.length-2">
          <li v-for="n in bullets.length" :key="n.id">
            <img :src="bullets[n-1]" :class="{'active': n === currentSlide}" @click="hitBullet(n)">
          </li>
        </ul>
        <div class="phone" v-show="currentSlide!=0" @click="gotoAR(eachDog.ARlink)">
          <img :src="eachDog.phone" alt="">
          <button 
            class="interaction"
            :style="{
              'background-color': eachDog.btnColor,
              'color': eachDog.btntxtColor
            }">
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
            與我合照
          </button>
          <CanvasAnim :spritesheet="eachDog.anim" spriteWidth="190" spriteHeight="20400" rows="120" cols="1" duration="4" :play="currentSlide==index"></CanvasAnim>
        </div>
      </div>
      <div class="wrapper secondlastpage" v-else-if="currentSlide === list.length-2">
        <img class="cage" :src="cage">
        <div class="lastwords">
          <h1>我們也在等家</h1>
          <p>零安樂死政策上路後，各地動物之家，依舊不是貓狗們真正的家，以領養代替購買，更多認養資訊，請見<a class="underline" style="color: black;" @click="sendga('http://animal-adoption.coa.gov.tw/shelter')" href="http://animal-adoption.coa.gov.tw/shelter" target="_blank">各縣市收容所網站</a>。</p>
          <img class="lastdog" :src="lastdog">
        </div>
      </div>
      <ul class="slider-nav hidden-pc" v-if="currentSlide>0 && currentSlide<list.length-2">
        <li v-for="n in bullets.length" :key="n.id">
          <img :src="bullets[n-1]" :class="{'active': n === currentSlide}" @click="hitBullet(n)">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils'
import Share from './Share'
import OfficialShare from './OfficialShare'
import CanvasAnim from './CanvasAnim'
import Editor from './Editor'
import Logo from './Logo'
import cage from '@/assets/page2_01.png'
import lastdog from '@/assets/page2_02.png'
import angel from '@/assets/angel.png'

export default {
  name: 'Dogs',
  props: ['currentSlide', 'list', 'bullets'],
  data: function () {
    return {
      real: false,
      period: 3000,
      cage: cage,
      lastdog: lastdog,
      angel: angel,
      url: 'https://udn.com/upf/newmedia/2018_data/takemehome/index.html',
      showdialogue: true
      // infoaboutdeath: '在收容所住了三年白白來不及等到一個家\n在專題上線前幾日當了天使\n我們還是留下她最後的笑臉\n希望我們都在新的一年\n「愛得及時」'
    }
  },
  computed: {
    textColor: function () {
      if (Number(this.currentSlide) % 2 === 0) {
        return '#fff'
      } else if (Number(this.currentSlide) % 2 === 1) {
        return '#000'
      }
    }
  },
  components: {
    Share, Editor, OfficialShare, CanvasAnim, Logo
  },
  mounted: function () {
    setInterval(() => {
      this.real = !this.real
    }, this.period)
  },
  methods: {
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
    gotoAR: function (link) {
      window.open(link, '_blank')
      window.ga('send', {
        'hitType': 'event',
        'eventCategory': '超連結點擊',
        'eventAction': 'click',
        'eventLabel': '[' + Utils.detectPlatform() + '] [' + document.querySelector('title').innerHTML + '] [' + link + ']'
      })
    },
    hitBullet: function ($bulletIndex) {
      this.$eventHub.$emit('change-bullet', $bulletIndex)
    },
    clickclose: function () {
      this.showdialogue = false
    },
    sendga: function (link) {
      window.ga('send', {
        'hitType': 'event',
        'eventCategory': '超連結點擊',
        'eventAction': 'click',
        'eventLabel': '[' + Utils.detectPlatform() + '] [' + document.querySelector('title').innerHTML + '] [' + link + ']'
      })
    }
  }
}
</script>

<style scoped>
.dogs {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
}

img.dog {
  width: 548px;
  opacity: 0;
  will-change: opacity;
  transition: all 0.5s;
}

img.dog.show {
  opacity: 1;
}

img.dog.cover {
  /* width: 1062px; */
  width: 115vh;
  transform: translateX(10%) translateY(12%);
  opacity: 1;  
}

@media screen and (min-width: 1024px) and (max-width: 1200px){
  img.dog {
    width: 400px;
  }
}

@media screen and (max-width: 1023px){
  .dogs {
    width: 75%;
  }

  img.dog.cover {
    width: 125%;
    transform: none;
  }    
}

@media screen and (max-width: 374px){
  img.dog{
    width: 80%;
  }
}

@media screen and (min-width: 375px) and (max-width: 767px){
  img.dog{
    width: 100%;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px){
  img.dog{
    width: 90%;
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

@media screen and (min-width: 1024px) and (max-width: 1199px){
  .adog {
    width: 1024px;
    height: auto;
    transform: translateX(-45%) translateY(-50%);
  }  
}

@media screen and (min-width: 1200px){
  .adog {
    width: 1200px;
    height: auto;
    transform: translateX(-45%) translateY(-50%);
  }  
}

@media all and (-ms-high-contrast:none)
{
  .adog { 
    transform: translateX(-45%) translateY(-50%);
  }
  *::-ms-backdrop, .adog {
    transform: translateX(-45%) translateY(-50%);
  }
}  

.text{
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;
  letter-spacing: -0.5px;
}

.text p, .text a{
  margin: 0;
  font-size: 21px;
  line-height: 1.52;
}

p.subtitle{
  margin-bottom: 7px;
}

@media screen and (min-width: 768px) and (max-width: 1023px){
  .lastwords p{
    margin: 0;
    font-size: 21px;
    line-height: 1.52;    
  }
}

@media screen and (min-width: 375px) and (max-width: 767px){
  .text{
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .text p, .text a {
    font-size: 18px;
    line-height: 1.52;
  }
}

@media screen and (max-width: 374px){
  .text{
    padding: 0;
  }

  .text p, .text a {
    font-size: 16px;
    line-height: 1.4;
  }
}

.words{
  text-align: center;
}

.title{
  text-align: center;
}

@media screen and (min-width: 1024px){
  .words{
    text-align: left;
  }

  .title{
    text-align: left;
    margin-bottom: 0;
  }  
}

.title.wordbyword {
  display: inline-block;
  text-align: center;
  line-height:30px;
  width: 30px;
  height: 30px;
  background: red;
  border-radius: 50%;
  margin: 5px 5px 5px 0;
  font-weight: bold;
  font-size: 18px;
}

@media screen and (min-width: 768px) and (max-width: 1023px){
  .title.wordbyword {
    line-height:50px;
    width: 50px;
    height: 50px;
    font-size: 30px;
  }  
}

.wrapper{
  position: relative; 
  display: block;
  height: 100%;
}

.imgWrapper{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper.secondlastpage, .wrapper.secondlastpage .lastwords{
  display: flex;
  flex-direction: column;
  text-align: left;
}

.wrapper.secondlastpage h1, .wrapper.secondlastpage p{
  margin-bottom: 0;
  font-weight: normal;
}

.wrapper.secondlastpage img.cage{
  width: 40%;
}

img.lastdog{
  width: 60%;
  align-self: flex-end;
}

@media screen and (min-width: 1024px){
  .wrapper.secondlastpage{
    display: flex;
    flex-direction: row;
  }

  .wrapper.secondlastpage img.cage{
    width: 20%;
    margin-right: 10%;
  }

  .wrapper.secondlastpage .lastwords{
    width: 60%;
  }

  .wrapper.secondlastpage img.lastdog{
    width: 265px;
    margin-top: 10%;
    align-self: flex-end;
  }

  .lastwords p{
    font-size: 21px;
  }
}

@media screen and (min-width: 1024px){
  .words{
    position: absolute;
    top: 0;
    width: 35%;
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
  cursor: pointer;
}

.phone button{
  cursor: pointer;
}

.phone img{
  width: 54px;
  margin-bottom: 8px;
}

@media screen and (max-width: 374px){
  .phone img{
    width: 40px;
    margin-bottom: 5px;
  }  
}

@media screen and (min-width: 768px) and (max-width: 1023px){
  .phone img{
    width: 118px;
  }  
}

@media screen and (min-width: 1024px){
  .phone{
    transform: translateX(-50%);
  }

  .phone img{
    width: 118px;
    margin-bottom: 29px;
  }
}

button.interaction {
  font-family: inherit;
  font-size: 12px;
  line-height: 1.87;
  color: white;
  border: none;
  width: 90px;
  height: 30px;
  border-radius: 15px;
  box-shadow: 0 0 4px 2px rgba(53, 53, 53, 0.14);
}

@media screen and (min-width: 768px) and (max-width: 1023px){
  .phone img{
    width: 118px;
  }  
  button.interaction {
    width: 118px;
    height: 40px;
    border-radius: 30px;
    font-size: 15px;
  }
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
  border-bottom: solid 1px black;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 3;
  max-width: 100%;
}

ul.slider-nav img{
  width: 35px;
  transform: translateY(5px);
}

@media screen and (min-width: 1024px){
  ul.slider-nav{
    width: 30%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
  }
}

ul.slider-nav li{
    float: left;
    margin: 0 3px;
    cursor: pointer;
}

ul.slider-nav img{
  opacity: 0.2;
}

ul.slider-nav img.active{
  opacity: 1;
}

.underline{
  text-decoration: underline;
}

button.questionnaire{
  font-family: "Microsoft JhengHei";
  width: 100%;
  height: 70px;
  border-radius: 35px;
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

.angel{
  position: absolute;
  left: 0%;
  bottom: 0%;
  width: 50%;
  transform: translateX(-25%);
  z-index: 4;
}

.dialogue{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100%; 
  height: 100%; 
  opacity: 0.97;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 5px 1px rgba(53, 53, 53, 0.25);
  z-index: 5;
}

@media screen and (min-width:768px) and (max-width: 1023px){
  .angel{
    width: 45%;
  }
}

@media screen and (min-width: 1024px){
  .angel{
    width: 42%;
  }
}

.closebutton{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 10px;
  top: 10px;
  width: 41px;
  height: 41px;
  border-radius: 50%;
  background-image: linear-gradient(to top, #5c3000, #40220f 83%);
  cursor: pointer;
  z-index: 99;  
}

.fa.fa-close{
  color:white;
  font-size: 25px;
}

.dialogue p{
  color: #323232;     
}  

@media screen and (min-width: 375px) and (max-width: 767px){
  .dialogue p{
    font-size: 18px;
    line-height: 1.78;
    letter-spacing: normal;
    text-align: center;
    color: #323232;     
  }  
}

@media screen and (min-width: 768px){
  .dialogue p{
    font-size: 21px;
    line-height: 1.62;
    letter-spacing: normal;
    text-align: center;
    color: #323232;     
  }  
}
</style>