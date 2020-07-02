<template>
  <div>
    <div class="header">
      <div class="left">{{datalist.title}}</div>
      <div class="right">
        <div class="line"></div>
        <div class="content">{{datalist.sub_title}}</div>
      </div>
    </div>
    <ul>
      <li v-for='data in datalist.works' :key='data.slug' @click='goToWeb(data.slug,data.type)'>
        <img :src="data.image.small" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    this.$axios({
      url: `/api/v2/selections/${this.$route.params.id}?lang=zh-Hans&platform=web&device=mobile`
    }).then(res => {
      this.datalist = res.data.data.item
    })
  },
  methods: {
    goToWeb (data, type) {
      if (type === 'photo') {
        this.$router.push(`/photos/${data}`)
      } else {
        this.$router.push(`/video/${data}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 2.4rem auto 1.6rem;
  .left {
    font-size: 1.7rem;
    line-height: 2rem;
    font-weight: 600;
    text-align: center;
  }
  .right {
    display: flex;
    align-items: center;
    flex-direction: column;
    .line {
      content: "";
      width: 100%;
      height: 1px;
      border-top: 1px solid rgba(0, 0, 0, 0.09);
      margin-top:1rem;
      justify-content: center;
      width: 3rem;
      height: 1.6rem;
    }
    .content {
      color: rgba(0, 0, 0, 0.65);
      text-align: center;
      font-size: 1rem;
      line-height: 1.2rem;
    }
  }
}
ul{
  padding: 0 1rem;
  li{
    width: 100%;
    margin-bottom: .6rem;
    img{width: 100%;height: 100%;}
  }
}
</style>
