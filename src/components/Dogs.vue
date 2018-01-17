<template>
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
      <div class="wrapper">
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
              'color' : textColor
            }">帶我們回家<br>陪你過年，好嗎？</h1>
          <div class="text hidden-mobile" 
            :style="{
              'color' : textColor
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
        <div class="text hidden-pc"
          :style="{
            'color' : textColor
          }">
          <p>毛色 : 黑色 短</p>
          <p>體型 : 中型、品種 : 混種</p>
        </div>
        <Share class="hidden-pc" :href="eachDog.href"/>
        <ul class="slider-nav hidden-mobile" v-if="currentSlide!=0">
          <li v-for="n in bullets.length" :key="n.id">
            <img :src="bullets[n-1]" :class="{'active': n === currentSlide}">
          </li>
        </ul>
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
import BodyMovin from './BodyMovin'

export default {
  name: 'Dogs',
  props: ['currentSlide', 'list', 'bullets'],
  data: function () {
    return {
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
    BodyMovin, Share
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
  padding-top: 0;
  padding-bottom: 5px;
  text-align: left;
}

.text p{
  margin: 0;
  font-size: 21px;
  line-height: 1.52;
}

@media screen and (max-width: 1023px){
  .text p {
    font-size: 18px;
    line-height: 1.56;
  }
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

.wrapper{
  position: relative; 
  display: block;
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
    transform: translateX(0);
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
  border-bottom: solid 1px black;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 3;
}

ul.slider-nav img{
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

</style>