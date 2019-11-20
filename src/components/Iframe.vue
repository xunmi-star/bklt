<template>
  <div class="iframe"><!-- 插入外部网页 -->
    <!-- <iframe :src="this.link" frameborder="0" ref="iframe" @load="onIframeLoaded"></iframe> -->
    <iframe class="iframe-style" :src="link" frameborder="0" scrolling='no' ref="iframe"></iframe>
  </div>
</template>


<script>

export default {
  data(){
    return {
      link:"http://192.168.5.208/",
    }
  },
  components:{
    
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
.iframe{
  width:100%;
  height:100%;
  overflow:hidden;

  .iframe-style{
    width: 100%;
    height: 100%;
  }
}
</style>
