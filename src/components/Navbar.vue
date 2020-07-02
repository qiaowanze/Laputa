<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft" @click-right="onClickRight" class="nav">
      <van-icon :name="lefticon" slot="left" color="white" />
      <van-icon
      name="chat-o"
      info='1'
      slot="right"
      color="white"
      v-if="isLogined"
      v-show="noClick"
      @click='$router.push("/notifications/messages")'
      style="margin-right:1rem"
      />
      <van-icon name="friends-o" slot="right" color="white" @click="checkLogin" v-show="noClick" />
    </van-nav-bar>
    <div class="dang"></div>
    <img
      class="logo"
      src="//spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/logo-cn.00c32c62.svg"
      alt="logo"
      @click="backHome"
    />
    <transition name="fade">
      <van-list class="list" v-if="listshow">
        <van-cell
          v-for="item in list"
          :key="item.name"
          :title="item.name"
          @click="handleClick(item.url)"
        />
      </van-list>
    </transition>
  </div>
</template>
<script>
import Vue from 'vue'
import {
  DropdownMenu,
  DropdownItem,
  NavBar,
  Icon,
  List,
  Cell,
  Overlay
} from 'vant'
import { mapState } from 'vuex'
Vue.use(Icon)
Vue.use(NavBar)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(List)
Vue.use(Cell)
Vue.use(Overlay)
export default {
  data () {
    return {
      //
      list: [
        { url: '/', name: '首页' },
        { url: '/explore', name: '探索' },
        { url: '/photographers/recommended', name: '摄影师' },
        { url: '/notifications/messages', name: '消息' },
        { url: '/', name: '博客' },
        { url: '/', name: '天空之城5周年航拍大赛' },
        { url: '/', name: '签约摄影师招募' },
        { url: '/', name: '常见问题' },
        { url: '/', name: '语言' }
      ],
      listshow: false,
      lefticon: 'wap-nav',
      isLogin: false,
      noClick: true
    }
  },
  computed: {
    ...mapState('login', ['token', 'userId']),
    isLogined () {
      return !!this.token
    }
  },
  methods: {
    onClickLeft () {
      this.listshow = !this.listshow
      this.lefticon = this.lefticon === 'clear' ? 'wap-nav' : 'clear'
      this.noClick = !this.noClick
    },
    backHome () {
      if (!/^#\/$/.test(location.hash)) {
        this.$router.push('/')
      }
    },
    onClickRight () {},
    handleClick (data) {
      this.listshow = false
      this.lefticon = this.lefticon === 'clear' ? 'wap-nav' : 'clear'
      this.noClick = true
      this.$router.push(data)
    },
    checkLogin () {
      if (this.token) {
        this.$router.push(`/users/${this.userId}`)
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.van-cell:not(:last-child)::after {
  color: #fff;
  border-bottom: 0.05rem solid #333!important;
  margin:0 1rem;
}
.nav {
  position: fixed;
  width: 100%;
  z-index: 1111;
  background-color: #000;
  i {
    font-size: 1.5rem;
  }
}
.dang {
  height: 46px;
}
.logo {
  position: fixed;
  left: 0;
  top: 1rem;
  right: 0;
  margin: 0 auto;
  height: 1.1rem;
  z-index: 1111;
}
.list {
  position: fixed;
  width: 100%;
  z-index: 1000;
  .van-cell {
    height: 3.5rem;
    line-height: 2rem;
    color: #fff;
    background: #121212;
    font-size: 1rem;
  }
}
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all 0.2s;
  transform: translateY(0px);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
</style>
