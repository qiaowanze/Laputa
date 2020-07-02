<template>
  <div>
    <div class="title">
      <div class="qqq">
        <div v-for="(data,index) in titleImg" :key="index" @click="handleT(data.slug)" class="box">
          <img :src="data.image" class="img1" />
          <div class="box1">
            <img :src="data.icon" class="img2" />
            <p>{{data.name}}</p>
          </div>
        </div>
      </div>
      <biaoqian></biaoqian>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Grid, GridItem, Image } from 'vant'
import biaoqian from '@/components/Biaoqian'
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Image)
export default {
  methods: {
    handleT (data) {
      this.$router.push(`/topics/${data}`)
    }
  },
  components: {
    biaoqian
  },
  data () {
    return {
      titleImg: []
    }
  },
  mounted () {
    this.$axios
      .get('/api/v2/topics?lang=zh-Hans&platform=web&device=mobile&limit=10')
      .then(res => {
        // console.log(res.data.data.items);
        this.titleImg = res.data.data.items
      })
  }
}
</script>

  <style lang="scss" scoped>
// .title .box:nth-child(2n) .img1 {
// }

.title {
  .qqq {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .box {
      position: relative;
      width: 49.4%;
      background: white;
      box-sizing: border-box;
      padding-bottom: 0.3rem;
      .img1 {
        width: 100%;
        vertical-align: bottom;
        background: white;
      }
      .box1 {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;

        .img2 {
          position: absolute;
          bottom: 60px;
          left: 50px;
          width: 50%;
        }
        p {
          position: absolute;
          vertical-align: baseline;
          top: 60px;
          left: 80px;
          color: white;
          text-align: center;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
