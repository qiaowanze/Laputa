<template>
  <div class="swiperbar">
    <div class="swiper-container" v-if="swiperlist" :class="swiperClass">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="data in swiperlist" :key="data.name" v-show="data">
          <img :src="data.image.small" alt="data" style="width:100%;height:100%" v-if="data.image" @click='dataTags(data.slug)' />
          <img :src="data.cover.small" alt="data" style="width:100%;height:100%" v-if="data.cover" @click='dataMan(data.slug)' />
          <div class="info">
            <img :src="data.avatar.small" alt v-if="data.avatar" />
            <p>{{data.name}}</p>
          </div>
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
      slidesPerView: 3,
      spaceBetween: 10,
      freeMode: true
    })
  },
  methods: {
    dataTags (data) {
      this.$router.push(`/tags/${data}`)
    },
    dataMan (data) {
      this.$router.push(`/users/${data}`)
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.swiperbar {
  overflow: hidden;
  padding: 0 0 .8rem 0;
}
.swiper-wrapper {
  padding: 0 0 0 1rem;
}
.swiper-slide {
  position: relative;
  width: 7rem;
  height: 8rem;
}
img {
  border-radius: 0.4rem;
}

.info {
  position: absolute;
  bottom: 0.5rem;
  padding: 0 0.4rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  img {
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.25rem;
    border-radius: 50%;
  }
  p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    word-wrap: break-word;
    line-height: 0.8rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: #fff;
  }
}
</style>
