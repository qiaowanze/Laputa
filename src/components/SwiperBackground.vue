<template>
  <div class="swiperbar">
    <div class="swiper-container" v-if="swiperlist" :class="swiperClass">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="data in swiperlist" :key="data.name" v-show="data" @click='toTags(data.slug)'>
          <img :src="data.image.small" alt="data" style="width:100%;height:100%" v-if='data.image' />
           <img :src="data.cover.small" alt="data" style="width:100%;height:100%"  v-if='data.cover' />
          <p>{{data.name}}</p>
        </div>
      </div>
    </div>
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
      slidesPerView: 2,
      spaceBetween: 10,
      freeMode: true
    })
  },
  methods: {
    toTags (data) {
      this.$router.push(`/tags/${data}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.swiperbar{
  overflow: hidden;
  background-color: #fff;
}
.dang {
  height: 6rem;
}
.swiper-container {
  overflow: visible;
  margin-bottom: 3rem;
}
.swiper-wrapper {
  padding: 1rem;
}
.swiper-slide {
  position: relative;
  width: 7rem;
  height: 8rem;
  overflow: visible;
}
img {
  border-radius: 0.4rem;
}
p {
  text-align: left;
}
</style>
