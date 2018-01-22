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
        <div 
          class="words"
          :class="{'shift': currentSlide!=0}">
          <h1 
            class="title"
            v-if="currentSlide!=0"
            :style="{
              'color' : textColor
            }">帶我們回家<br>陪你過年好嗎？</h1>
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
            <p>{{list[currentSlide].text}}</p>
            <p>{{list[currentSlide].place}}</p>
            <p class="number">{{list[currentSlide].number}}</p>
            <Share
              style="text-align: center;
                    margin-top: 30px;" 
              :href="eachDog.href"
              v-show="currentSlide!=0"/>
          </div>
        </div>
        <div class="imgWrapper" v-if="currentSlide!=0">
          <img 
            class="dog"
            :class="{'show': real}"
            :src="eachDog.pic2"
            style="position: absolute; top: 0;"
            v-show="currentSlide!=0">
          <img
            class="dog"
            :class="{
              'show': !real
            }" 
            :src="eachDog.pic">          
        </div>
        <div class="imgWrapper" v-else>
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
          <p>{{list[currentSlide].text}}</p>
          <p>{{list[currentSlide].place}}</p>
          <p class="number">{{list[currentSlide].number}}</p>
        </div>
        <Share 
          class="hidden-pc" 
          :href="eachDog.href"
          v-show="currentSlide!=0"/>
        <ul class="slider-nav hidden-mobile" v-if="currentSlide!=0">
          <li v-for="n in bullets.length" :key="n.id">
            <img :src="bullets[n-1]" :class="{'active': n === currentSlide}">
          </li>
        </ul>
        <div class="phone" v-show="currentSlide!=0">
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
      <div class="wrapper secondlastpage" v-else-if="currentSlide === list.length-2">
        <img class="cage" :src="cage">
        <div class="lastwords">
          <h1>我們也在等家</h1>
          <p>零安樂死政策上路後，各地動物之家，依舊不是貓狗們真正的家，以領養代替購買，更多認養資訊資訊，請見<u>縣市立收容所網站</u>。</p>
          <img class="lastdog" :src="lastdog">
        </div>
        <p><br></p>
        <p><br></p>
      </div>
      <div class="wrapper" v-else>
        <Editor>
          <div>內容製作：連珮宇、蔡佩蓉</div>
          <div>插畫：黃微庭</div>
          <div>動畫：許藹雯</div>
          <div>網頁設計：許瑋琳</div>
          <div>攝影：林麒瑋</div>          
          <div>網頁製作：方泰鈞、鄭偉廷</div>          
          <div>監製：蔡幸怡、董谷音、潘如瑩</div>          
          <div>2018.02</div>
        </Editor>
        <p><br></p>
        <OfficialShare :href="eachDog.href"/>
        <p><br></p>
        <button class="questionnaire">填寫閱讀體驗問卷</button>
      </div>
      <ul class="slider-nav hidden-mobile lasttwopages" v-if="currentSlide >= list.length-2">
        <li v-for="n in bullets.length" :key="n.id">
          <img :src="bullets[n-1]" :class="{'active': n === currentSlide}">
        </li>
      </ul>        
      <ul class="slider-nav hidden-pc" v-if="currentSlide!=0">
        <li v-for="n in bullets.length" :key="n.id">
          <img :src="bullets[n-1]" :class="{'active': n === currentSlide}">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Share from './Share'
import OfficialShare from './OfficialShare'
import BodyMovin from './BodyMovin'
import Editor from './Editor'
import cage from '@/assets/page2_01.png'
import lastdog from '@/assets/page2_02.png'

export default {
  name: 'Dogs',
  props: ['currentSlide', 'list', 'bullets'],
  data: function () {
    return {
      real: false,
      interval: 3000,
      cage: cage,
      lastdog: lastdog
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
    BodyMovin, Share, Editor, OfficialShare
  },
  mounted: function () {
    setInterval(() => {
      this.real = !this.real
    }, this.interval)
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
  width: 1062px;
  transform: translateX(10%) translateY(10%);
  opacity: 1;  
}

@media screen and (max-width: 1023px){
  .dogs {
    width: 75%;
  }

  img.dog{
    width: 100%;
  }

  img.dog.cover {
    width: 125%;
    transform: none;
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
    width: 1200px;
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


.text{
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;
}

.text p{
  margin: 0;
  font-size: 21px;
  line-height: 1.52;
}

@media screen and (max-width: 1023px){
  .text{
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .text p {
    font-size: 18px;
    line-height: 1.56;
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

.wrapper{
  position: relative; 
  display: block;
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
    width: 70%;
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
    transform: translateY(-50%);
    width: 30%;
  }

  .shift{
    top: 20%;
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
  /* transform: translateX(25%); */
}

.phone img{
  width: 54px;
  margin-bottom: 8px;
}

@media screen and (min-width: 1024px){
  /* .phone{
    transform: translateX(0);
  } */

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

ul.slider-nav.lasttwopages{
  margin-top: 10%;
}

ul.slider-nav img{
  width: 30px;
  transform: translateY(4px);
}

@media screen and (min-width: 1024px){
  ul.slider-nav{
    width: 30%;
    margin: 0 auto;
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

.number{
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

</style>