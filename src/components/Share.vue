<template>
    <div id="share-block" class="share-block">
        <div class="fbshare" @click="fbShare">
            <img :src="fbbtn" alt="" style="width: 100px;">
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
  props: ['href'],
  data: function () {
    return {
      words: '',
      fbbtn: fbbtn
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
    },
    fbShare: function () {
      // console.log(this.href)
      FB.ui({
        method: 'feed',
        name: '賀年卡賀年卡',
        link: this.href,
        caption: '聯合報'
      }, function (response) {
      })
    }
  }
}
</script>

<style scoped>
#share-block {
    height: 28px;
}

.fb-like-block {
    float: left;
}

.line-block {
    /* float: left; */
    cursor: pointer;
    margin-left: 5px;
    margin-top: 1px;
}
</style>
