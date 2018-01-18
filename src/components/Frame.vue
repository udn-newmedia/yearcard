<template>
  <div>
    <div class="frame left"></div>
    <div class="frame right"></div>
    <img class="corner left top" :src="corner">
    <img class="corner right top" :src="corner">
    <img class="corner left bottom" :src="corner">
    <img class="corner right bottom" :src="corner">
  </div>
</template>

<script>

import corner from '@/assets/corner.png'

export default {
  name: 'Frame',
  data: function () {
    return {
      corner: corner
    }
  }
}
</script>

<style scoped>

.frame {
  position: absolute;
  border: 22px solid #ffc656;
  width: 100%;
  height: 100%;
}

.frame.left{
  top: 0;
  left: 0;
}

.frame.right{
  right: 0;
  bottom: 0;
}

.corner{
  position: absolute;
  width: 100px;
  margin: 8px;
}

@media screen and (min-width: 1024px){
  .corner{
    width: 200px;
    margin: -11px;
  }
}

.corner.left.top{
  left: 0;
  top: 0;  
}

.corner.right.top{
  right: 0;
  top: 0;
  transform: rotate(90deg);
}

.corner.left.bottom{
  left: 0;
  bottom: 0;
  transform: rotate(270deg);
}

.corner.right.bottom{
  right: 0;
  bottom: 0;
  transform: rotate(180deg);
}

</style>