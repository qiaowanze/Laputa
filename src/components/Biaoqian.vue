<template>
  <div>
    <div class="title">
      <span class="sp">热门标签</span>
    </div>
    <van-panel
      :title="data.name"
      icon
      status="查看全部"
      v-for="data in this.list"
      :key="data.slug"
      class="list"
      @click="tiaozhuan($event,data.slug)"
    >
      <van-icon name="fire-o" class="fire" />
      <div class="sw">
        <swiper1 :urlList="data.slug" :key="data.slug"></swiper1>
        <router-view></router-view>
      </div>
    </van-panel>
  </div>
</template>

<script>
import Vue from 'vue'
import { Panel } from 'vant'
import axios from 'axios'
import swiper1 from '@/components/ExploreSwiper'
Vue.use(Panel)
export default {
  methods: {
    tiaozhuan (evt, data) {
      // console.log(evt.path[0].tagName, data);
      if (evt.path[0].tagName == 'SPAN') {
        this.$router.push(`/tags/${data}`)
      }
    }
  },
  components: {
    swiper1
  },
  data () {
    return {
      list: []
    }
  },
  mounted () {
    axios
      .get(
        '/api/v2/tags?lang=zh-Hans&platform=web&device=mobile&limit=12&offset=0'
      )
      .then(res => {
        // console.log(res.data.data.items);
        this.list = res.data.data.items
      })
  }
}
</script>

<style lang="scss" scoped>
.van-cell__title {
  color: #4b4b4b;
  font-size: 0.9rem;
  font-weight: 600;
  margin-left: 1.3rem;
}
.van-cell__value {
  color: #838385;
  font-size: 0.6rem;
  font-weight: 400;
}

.list {
  position: relative;
  .fire {
    position: absolute;
    top: 13px;
    left: 18px;
    color: rgb(71, 145, 255);
  }
}

.title {
  display: block;
  padding-top: 15px;
  background-color: white;

  .sp {
    margin-left: 12px;
    font-size: 1rem;
    font-weight: 600;
  }
}
.sw {
  // box-sizing: border-box;
  margin-left: 0.4rem;
  // margin-right: 2rem;
}
</style>
