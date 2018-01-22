<template>
    <div class="logo-block">
        <div class="logo nmd">
            <a href="https://udn.com/upf/newmedia/udn_newmedia/" target="_blank"><img src="https://udn.com/upf/newmedia/image/nmd_logo_2018.png"></a>
        </div>
        <div class="logo">
            <a href="https://udn.com/news/index" target="_blank"><img src="https://udn.com/upf/newmedia/image/udn-logo.svg"></a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'logo'
}
</script>

<style scoped>
.logo {
    width: 140px;
    display: inline-block;
}

.logo img{
  width: 140px;
}

.logo.nmd, .logo.nmd img {
  width: 192px;
}

@media screen and (max-width: 1023px){
  .logo, .logo img{
    width: 115px;
  }

  .logo.nmd, .logo.nmd img{
    width: 126px;
  }
}


@media screen and (min-width: 1025px) {
  .logo-block {
      float: right;
  }
}
</style>
