<template>
  <div>
    <div class="swiper-container" :class="'lz'+urlList.substring(0,4)">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="data in this.dataList"
          :key="data.slug"
          @click="tiaozhuan(data)"
        >
          <img :src="data.image.small" alt />
          <div class="meng"></div>
          <div>
            <img :src="data.user.avatar.small" class="head" />
          </div>
          <div class="name">{{data.user.name}}</div>
          <div>
            <van-icon name="play-circle-o" class="icon" v-show="data.type=='video'?'video':''" />
            <van-icon name="photo-o" class="icon" v-show="data.type=='photo'?'photo':'' " />
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import 'swiper/css/swiper.css'
export default {
  methods: {
    tiaozhuan (data) {
      // console.log(data);
      if (data.type == 'photo') {
        this.$router.push(`/${data.type}s/${data.slug}`)
      } else if (data.type == 'photo_360') {
        this.$router.push(`/photo360s/${data.slug}`)
      } else {
        this.$router.push(`/${data.type}/${data.slug}`)
      }
    }
  },
  data () {
    return {
      dataList: []
    }
  },
  props: ['urlList'],
  mounted () {
    this.$axios
      .get(
        `/api/v2/tags/${this.urlList}/works?lang=zh-Hans&platform=web&device=mobile&limit=16&offset=0`
      )
      .then(res => {
        // console.log(res.data.data.items);
        this.dataList = res.data.data.items
      })
  },
  updated () {
    const str =
      '.' +
      ('lz' + this.urlList.substring(0, 4)
        ? 'lz' + this.urlList.substring(0, 4)
        : 'swiper-container')
    new this.$swiper(str, {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true
    })
  }
}
</script>
<style lang="scss" scoped>
img {
  width: 7.8125rem;
  height: 7.8125rem;
  border-radius: 5px;
}
.swiper-slide {
  position: relative;
  .meng {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 7.8125rem;
    height: 7.8125rem;
    background: black;
    opacity: 0.4;
    border-radius: 5px;
  }
  .head {
    position: absolute;
    width: 1rem;
    height: 1rem;
    bottom: 0.9375rem;
    left: 0.875rem;
    border-radius: 50%;
  }
  .name {
    position: absolute;
    bottom: 1.1111rem;
    left: 2.1875rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 0.8rem;
    font-size: 0.7rem;
    font-weight: 600;
    color: #fff;
    width: 5rem;
    overflow: hidden;
  }
  .icon {
    position: absolute;
    width: 0.99rem;
    height: 0.99rem;
    top: 0.3rem;
    right: -1rem;
    color: white;
  }
}
</style>
