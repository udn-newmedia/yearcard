<template>
    <div id="share-block" class="share-block">
        <div class="fbshare" @click="fbShare">
            <!-- <img :src="fbbtn" alt="" style="width: 100px;"> -->
            <p>分享</p>
        </div>
        <div class="line-block" @click="lineShare">
            <img class="line-share" src="//media.line.me/img/button/zh-hant/84x20.png" width="92" height="22" alt="LINE分享給朋友">
        </div>
    </div>
</template>

<script>
/* global FB */
import Utils from 'udn-newmedia-utils'
import fbbtn from '@/assets/share_btn.png'

export default {
  name: 'share',
  props: ['href', 'name'],
  data: function () {
    return {
      words: '',
      fbbtn: fbbtn,
      description: '在台灣，狗平均壽命8歲，但收容所裡等不到家的狗，一待就是3、5年。聯合報尋訪動物之家，將一張張送不出去的笑臉，繪製成狗年賀卡。帶牠們回家、幫牠們找家，也給自己一個被愛的機會。'
    }
  },
  methods: {
    lineShare: function () {
      if (Utils.detectMob()) {
        // 手機
        window.location.href = '//line.me/R/msg/text/?' + document.querySelector('title').innerHTML + '%0D%0A%0D%0A' + document.querySelector('meta[property="og:description"]').content + '%0D%0A%0D%0A' + this.href
      } else {
        window.open('https://lineit.line.me/share/ui?url=' + this.href)
      }
      window.ga('send', {
        'hitType': 'event',
        'eventCategory': 'Line Share',
        'eventAction': 'click',
        'eventLabel': '[' + Utils.detectPlatform() + '] [' + document.querySelector('title').innerHTML + '] [line share]'
      })
    },
    fbShare: function () {
      // console.log(this.href)
      FB.ui({
        method: 'feed',
        name: this.name,
        link: this.href,
        caption: this.description
      }, function (response) {
      })
      window.ga('send', {
        'hitType': 'event',
        'eventCategory': 'FB Share',
        'eventAction': 'click',
        'eventLabel': '[' + Utils.detectPlatform() + '] [' + document.querySelector('title').innerHTML + '] [FB share] [' + this.href + ']'
      })
    }
  }
}
</script>

<style scoped>
#share-block {
  display: flex;
  height: 28px;
}

.fb-like-block {
  float: left;
}

.line-block {
  /* float: left; */
  cursor: pointer;
  margin-left: 5px;
  /* margin-top: 1px; */
}

.fbshare {
  cursor: pointer;
  background: #3b5998;
  width: 50px;
  height: 22px;
  color: white;
  border-radius: 5px;
}

.fbshare p {
  padding: 1px;
  margin: 0;
  font-size: 14px;
}
</style>
