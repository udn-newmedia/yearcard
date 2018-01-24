<template>
  <canvas class="anime" ref="anime" :width="srcWidth" :height="srcHeight"></canvas>
</template>

<script>

export default {
  name: 'CanvasAnim',
  props: ['spritesheet', 'spriteWidth', 'spriteHeight', 'rows', 'cols', 'duration'],
  data: function () {
    return {
      canvasSprite: {
        name: new Image(),
        spriteWidth: this.spriteWidth,
        spriteHeight: this.spriteHeight,
        rows: this.rows,
        cols: this.cols,
        curFrame: 0,
        srcX: 0,
        srcY: 0
      },
      interval: 0
    }
  },
  computed: {
    srcWidth: function () {
      return this.canvasSprite.spriteWidth / this.canvasSprite.cols
    },
    srcHeight: function () {
      return this.canvasSprite.spriteHeight / this.canvasSprite.rows
    },
    frequency: function () {
      return Math.round(1000 / ((this.rows * this.cols) / this.duration))
    }
  },
  mounted: function () {
    if (this.interval === 0) {
      this.interval = setInterval(this.drawCanvas, this.frequency)
    }
    this.canvasSprite.name.src = this.spritesheet
  },
  methods: {
    drawCanvas: function () {
      const sprite = this.canvasSprite
      const canvas = this.$refs.anime
      if (canvas) {
        const ctx = canvas.getContext('2d')
        sprite.curFrame = ++sprite.curFrame % sprite.rows
        sprite.srcY = sprite.curFrame * this.srcHeight
        ctx.clearRect(0, 0, this.srcWidth, this.srcHeight)
        ctx.drawImage(sprite.name, sprite.srcX, sprite.srcY, this.srcWidth, this.srcHeight, 0, 0, this.srcWidth, this.srcHeight)
      }
    }
  }
}
</script>

<style scoped>
.anime{
  position: absolute;
  top: 30%;
  transform: translateX(-10%) translateY(-50%);
  left: 0;
}

@media screen and (max-width: 1023px){
  .anime{
    transform: translateX(-35%) translateY(-45%) scale(0.4);
  }
}
</style>