<template>
  <div v-if="datalist">
    <div v-if='datalist.synonyms'>
      <div class="title" v-if="datalist" >
      <div class="all" v-show='datalist.synonyms[0].category==="region"?false:true'>
        <div class="haibao" v-if='datalist.image'>
          <img :src="datalist.image.small" alt />
        </div>
        <van-button class="btn" type="info">进行中</van-button>
        <div class="menban">
          <p class="name">{{datalist.name}}</p>
          <p class="zhengji">{{datalist.synonyms[0].name}}</p>
        </div>
      </div>
    </div>
    </div>
    <div class="charu" ref="charu" v-if="datalist.activity" v-html="description" ></div>
    <div style="padding:0 1rem" v-if="btnShow" >
      <van-button  v-show='datalist.activity'
        type="default"
        style="background-color:#f0f0f0;margin:1rem 0;border: 0 solid #b0b0b0;color:#1088f2;width:100%;font-weight: 600;"
        @click="showSomething"
      >查看详情</van-button>
    </div>
    <h3>{{datalist.name}}</h3>
    <van-dropdown-menu duration:0.1 class="menu">
      <van-dropdown-item v-model="value1" :options="option1" @change="handleClick(value1)" />
    </van-dropdown-menu>
    <van-dropdown-menu duration:0.1 v-if="showNav" class="showNav">
      <van-dropdown-item
        :title="datalist.name"
        v-model="value2"
        :options="option2"
        @change="handleClick(value2)"
      />
    </van-dropdown-menu>
    <div class="carbar">
      <ul>
        <carbar v-for="data in carlist" :key="data.slug" :cardata="data" :noTags="false"></carbar>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { DropdownMenu, DropdownItem, Button } from 'vant'
import carbar from '@/components/CardBar'
Vue.use(Button)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
export default {
  props: ['datalist', 'carlist', 'showNav'],
  components: {
    carbar
  },
  data () {
    return {
      value1: 'works',
      value2: 'works',
      option1: [
        { text: '全部', value: 'works' },
        { text: '视频', value: 'videos' },
        { text: '图片', value: 'photos' },
        { text: '360°全景图', value: 'photo-360s' }
      ],
      option2: [
        { text: '全部', value: 'works' },
        { text: '视频', value: 'videos' },
        { text: '图片', value: 'photos' },
        { text: '360°全景图', value: 'photo-360s' }
      ],
      btnShow: true
    }
  },
  methods: {
    handleClick (data) {
      this.$emit('event', data)
    },
    showSomething () {
      this.$refs.charu.style.height = 'auto'
      this.$refs.charu.style.overflow = 'visible'
      this.btnShow = false
    }
  },
  computed: {
    description () {
      if (this.datalist.activity) {
        return this.datalist.activity.description
      } else {
        return 0
      }
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.showNav {
  z-index: 11111;
  position: fixed;
  top: 46px;
  left: 0;
  width: 100%;
  text-align: left;
}
h3 {
  position: relative;
  z-index: 20;
  padding: 2rem 2rem 0.8rem;
  box-sizing: border-box;
  line-height: 2rem;
  font-size: 1.4rem;
  font-weight: 600;
  white-space: pre-wrap;
  word-break: break-word;
}
.menu {
  width: 20%;
  background: transparent;
  text-align: left;
  font-size: 0.8rem;
  color: #4b4b4b;
  font-weight: 600;
}
.van-hairline--top-bottom::after {
  border: 0;
}
.charu {
  padding: 0 1rem;
  height: 12rem;
  overflow: hidden;
  line-height: 1.4rem;
  font-size: .9rem;
  font-weight: 400;
  text-align: center;
  p {
    background: #f7f8f9;
    line-height: 1.2rem;
    font-size: 0.7rem;
    font-weight: 400;
  }
}
.title {
  position: relative;
  .all {
    height: 15.5rem;
    .haibao {
      height: 100%;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .btn {
      z-index: 22;
      border-radius: 0.3rem;
      width: 4.5rem;
      height: 1.6rem;
      font-size: 0.8rem;
      line-height: 1.6rem;
      font-weight: 600;
      position: absolute;
      top: 1rem;
      left: 1rem;
    }
    .menban {
      z-index: 11;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      padding: 3.4rem 0.8rem 0rem;
      box-sizing: border-box;
      text-align: center;
      min-height: 15.2rem;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
      .name {
        line-height: 2rem;
        font-size: 1.7rem;
        font-weight: 600;
        white-space: pre-wrap;
        word-break: break-word;
        color: #fff;
      }
      .zhengji {
        margin-top: 0.8rem;
        white-space: pre-wrap;
        color: #fff;
        text-align: center;
        font-size: 0.9rem;
        line-height: 1.2rem;
        word-break: break-word;
      }
    }
  }
}
</style>
