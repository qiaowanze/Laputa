<template>
  <div>
    <div class="biaoti">
      <h2>sex</h2>
    </div>
    <div class>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value" :options="option" overlay="false" />
      </van-dropdown-menu>
    </div>
    <div class="list">
      <ul>
        <li>
          <img
            src="https://cdn-usa.skypixel.com/uploads/usa_files/photo/image/8304f535-e8d5-440a-885c-f4e8c6b2c76a.jpg@!550"
            alt
          />
          <p>Lets sunbath</p>
          <div>
            <van-icon name="good-job-o lz" />
            <span>1</span>
            <van-icon name="chat-o lz" />
            <span>1</span>
            <van-icon name="share lz" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)
export default {
  data () {
    return {
      active: 0,
      border: false,
      fixed: false,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      },
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '全部', value: 0 },
        { text: '视频', value: 1 },
        { text: '图片', value: 2 },
        { text: '全景360', value: 3 }
      ]
    }
  },
  mounted () {
    Vue.directive('titlelz', {
      inserted (el, bind) {
        el.style.display = 'none'
        window.onscroll = function () {
          if (
            (document.documentElement.scrollTop || document.body.scrollTop) >
            bind.value
          ) {
            el.style.display = 'block'
          } else {
            el.style.display = 'none'
          }
        }
      },
      unbind () {
        window.scroll = null
      }
    })
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}

.biaoti {
  margin-left: 20px;
}

ul {
  li {
    margin-bottom: 20px;
  }
}

.list {
  p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    color: #838385;
    margin-left: 15px;
  }
  div {
    margin-left: 15px;
    span {
      color: #838385;
      display: inline-block;
      line-height: 16px;
      font-size: 14px;
      margin: 0 6px;
    }
    .lz {
      vertical-align: middle;
      color: #838385;
    }
  }
}
</style>
