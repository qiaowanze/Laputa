<template>
  <div class="swiper-container" v-if="swiperlist" :class="swiperClass">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="data in swiperlist"
        :key="data.cover"
        v-show="data"
        @click="goToWeb(data.link_url)"
      >
        <img :src="data.cover" alt="data" style="width:100%;height:100%" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import 'swiper/css/swiper.min.css'
export default {
  props: ['swiperlist', 'swiperClass'],
  mounted () {
    const str =
      '.' + (this.swiperClass ? this.swiperClass : 'swiper-container')
    this.swiper = new this.$swiper(str, {
      pagination: {
        el: '.swiper-pagination'
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      loop: true
    })
  },
  methods: {
    goToWeb (data) {
      const res = data.replace('https://www.skypixel.com', '')
      if (res.includes('https')) {
        location.assign(res)
      }
      const res2 = res.match(/\?/)
      this.$router.push(res.slice(0, res2.index))
    }
  }
}
</script>
<style lang="scss" scoped>
.swiper-container {
  background-color: #fff;
}
</style>
