<template>
  <div id="app">
    <navbar></navbar>
    <transition name="fadeshow" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
export default {
  components: {
    navbar
  }
}
</script>
<style lang="scss">
html.body {
  background-color: #f7f8f9;
}
body {
  background-color: #f7f8f9;
  font-family: Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}
.fadeshow-enter-active,
.fadeshow-leave-active {
  transition: all 0.3s;
  opacity: 1;
  transform: translateY(0px);
}
.fadeshow-enter,
.fadeshow-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>
