<template>
  <div>
    <swiper
      :swiperlist="swiperlist"
      swiperClass="banner"
      :key="swiperlist.length?swiperlist.length:'swiper'"
    ></swiper>
    <div class="hot">
      <div class="left">
        <span>热门航拍点</span>
      </div>
      <a class="right" @click="showV">
        <span>热门航拍点集锦</span>
        <van-icon name="play-circle-o" />
      </a>
    </div>
    <swiperHot
      :swiperlist="hotslist"
      swiperClass="hotslist"
      :key="hotslist.length?hotslist.length+'swiperHot':'swiperHot'"
    ></swiperHot>
    <div class="hotVideo" :style="{bottom:clientH}" v-if="isshowV" @click.stop="cancelV"></div>
    <transition name="shiii">
      <div class="box" v-if="isshowV">
        <video
          src="https://cn-videos.dji.net/video_trans/519050e3f0c146a6ac6c79989b867f4a/720.mp4"
          controls="controls"
          autoplay
        ></video>
      </div>
    </transition>
    <lazy-component>
      <div class="infoUl">
        <ul>
          <carbar v-for="data in barlist.slice(0,2)" :key="data.slug" :cardata="data" :noTags='true'></carbar>
        </ul>
        <div class="hotTag">
          <div class="left">
            <span>热门标签</span>
          </div>
          <a class="right">
            <span @click='$router.push("/explore")'>查看全部</span>
          </a>
        </div>
        <swiperSmall
          :swiperlist="taglist"
          swiperClass="taglist"
          :key="taglist.length?taglist.length+'swiperTag':'swiperTag'"
        ></swiperSmall>
        <ul>
          <carbar v-for="data in barlist.slice(2,4)" :key="data.slug" :cardata="data" :noTags='true'></carbar>
        </ul>
        <div class="photoman">
          <div class="left">
            <span>推荐摄影师</span>
          </div>
        </div>
        <swiperSmall
          :swiperlist="photolist"
          swiperClass="photolist"
          :key="photolist.length?photolist.length+'swiperPhoto':'swiperPhoto'"
        ></swiperSmall>
        <ul>
          <carbar v-for="data in barlist.slice(4)" :key="data.slug" :cardata="data" :noTags='true'></carbar>
        </ul>
      </div>
    </lazy-component>
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast, Lazyload } from 'vant'
import swiper from '@/components/Swiper'
import swiperHot from '@/components/SwiperBackground'
import swiperSmall from '@/components/SwiperSmall'
import carbar from '@/components/CardBar'
import { mapMutations, mapState } from 'vuex'
Vue.use(Toast)
Vue.use(Lazyload, {
  lazyComponent: true
})
export default {
  components: {
    swiper,
    swiperHot,
    carbar,
    swiperSmall
  },
  data () {
    return {
      swiperlist: [],
      hotslist: [],
      barlist: [],
      taglist: [],
      photolist: [],
      ulHeight: 5500,
      flag: true,
      inow: 0,
      clientH: '0px',
      isshowV: false
    }
  },
  mounted () {
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      overlay: true
    })
    this.$axios({
      url:
        '/api/v2/page-contents/skypixel_root_mobile_banner_top/banners?lang=zh-Hans&platform=web&device=mobile'
    }).then(res => {
      this.swiperlist = res.data.data.items
    })
    this.$axios({
      url: '/api/v2/geo-tags/weight?lang=zh-Hans&platform=web&device=mobile'
    }).then(res => {
      res.data.data.items.forEach(val => {
        if (val.image && val.featured) {
          this.hotslist.push(val)
        }
      })
    })
    this.$axios({
      url: 'api/v2/mobile/feeds?lang=zh-Hans&platform=web&device=mobile&limit=16&offset=0'
    }).then(res => {
      this.barlist = res.data.data.items
      setTimeout(() => {
        this.ulHeight = document.querySelector('.infoUl').clientHeight - 1200
      }, 0)
      Toast.clear()
    })
    this.$axios({
      url:
        '/api/v2/tags?lang=zh-Hans&platform=web&device=mobile&limit=10&offset=0'
    }).then(res => {
      this.taglist = res.data.data.items
    })
    this.$axios({
      url:
        '/api/v2/users?lang=zh-Hans&platform=web&device=mobile&limit=10&offset=0'
    }).then(res => {
      this.photolist = res.data.data.items
    })
    this.scrollGet()
  },
  methods: {
    ...mapMutations('login', ['setToken']),
    scrollGet () {
      if (this.barlist) {
        window.onscroll = () => {
          var num = 0
          if (document.documentElement.scrollTop > this.ulHeight) {
            num = parseInt(document.documentElement.scrollTop / this.ulHeight)
            if (num > this.inow) {
              this.flag = true
            }
            if (this.flag) {
              this.flag = false
              this.inow = num
              this.$axios({
                url: `/api/v2/mobile/feeds?lang=zh-Hans&platform=web&device=mobile&limit=16&offset=${16 *
                  num}`
              }).then(res => {
                if (this.barlist) {
                  this.barlist = [...this.barlist, ...res.data.data.items]
                }
              })
            }
          }
        }
      }
    },
    showV () {
      this.clientH = document.documentElement.clientHeight
      document.body.style.height = this.clientH + 'px'
      document.body.style.overflow = 'hidden'
      this.isshowV = true
    },
    cancelV () {
      document.body.style.overflow = 'visible'
      this.isshowV = false
    }
  },
  beforeRouteLeave (to, from, next) {
    window.onscroll = null
    next()
  },
  computed: {
    ...mapState('login', ['token'])
  }
}
</script>

<style lang="scss" scoped>
.hotVideo {
  position: absolute;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10150;
  -webkit-overflow-scrolling: touch;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
.box {
  position: fixed;
  width: 100%;
  height: 10rem;
  top: 45%;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 999999;
  video {
    display: block;
    width: 90%;
    margin: 0 auto;
  }
}
.hot {
  background-color: #fff;
  padding: 1.6rem 0.8rem 1.2rem;
  display: flex;
  justify-content: space-between;
  .left {
    color: rgba(0, 0, 0, 0.85);
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 600;
  }
  .right {
    font-size: 0.7rem;
    line-height: 1.2rem;
    color: #1890ff;
  }
}
.hotTag,
.photoman {
  padding: 0.8rem 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #4b4b4b;
  font-weight: 600;
  margin: 0 1rem 0.4rem;
  .left {
    color: #4b4b4b;
    font-size: 0.8rem;
    font-weight: 600;
  }
  .right {
    color: #838385;
    font-size: 0.6rem;
    font-weight: 400;
  }
}
.shiii-enter-active,
.shiii-leave-active {
  transition: all 0.5s;
  opacity: 1;
  transform: scale(1);
}
.shiii-enter,
.shiii-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
