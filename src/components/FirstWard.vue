<template>
  <div>
     <div class="yidengjiang" v-for='data in list' :key='data.slug' v-show='data.image' @click='setId(data)'>
        <img :src="data.image.small" alt="">
        <div class="time" v-if='data.type=="video"'>
          {{data.duration | timeFilter}}
        </div>
        <div class="play" v-if='data.type=="video"'>
          <svg t="1583550559467" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22209" data-spm-anchor-id="a313x.7781069.0.i0" width="48" height="48"><path d="M690.45 528.621l-268.786 160.15c-9.111 5.43-20.899 2.444-26.328-6.668a19.205 19.205 0 0 1-2.707-9.83v-320.3c0-10.606 8.599-19.204 19.205-19.204 3.46 0 6.857 0.935 9.83 2.706l268.786 160.15c9.112 5.43 12.097 17.217 6.668 26.328a19.205 19.205 0 0 1-6.668 6.668z" fill="#ffffff" p-id="22210"></path></svg>
        </div>
        <div class="topic" v-if='data.topic'>{{data.topic.name}}</div>
        <div class="content">
          <p class="title">{{data.title}}</p>
           <div class="top" @click="$router.push(`/users/${data.user.slug}`)">
            <div class="left">
              <img :src="data.user.avatar.small" alt />
            </div>
            <div class="right">
              <div class="name">{{data.user.name}}</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['list'],
  filters: {
    timeFilter (data) {
      return (
        (parseInt(data / 60) < 10
          ? '0' + parseInt(data / 60)
          : parseInt(data / 60)) +
        ':' +
        (parseInt(data % 60) < 10
          ? '0' + parseInt(data % 60)
          : parseInt(data % 60))
      )
    }
  },
  methods: {
    ...mapMutations('video', ['setVideoId']),
    setId (data) {
      this.setVideoId(data.slug)
      if (data.type === 'video') {
        this.$router.push(`/video/${data.slug}`)
      } else {
        this.$router.push(`/photos/${data.slug}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .yidengjiang{
  position: relative;
  margin:1rem 0;
  padding:0 1rem;
  width: 22rem;
  height: 22rem;
  img{
    width: 100%;
    height: 100%;
  }

  .play{
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin:auto;
    width: 3rem;
    height: 3rem;
    text-align: center;
    border-radius: 50%;
    background: rgba(0,0,0,.3);
  }
  .content{
     position: absolute;
     width: 100%;
     bottom:.5rem;
    padding:0 1rem;
    text-align: left;
    .title{
      text-indent: 0em;
      margin-bottom: .4rem;
      color:#fff;
      font-weight: 600;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-word;
      word-wrap: break-word;
      font-size: 1.2rem;
      line-height: 1.4rem;
    }
  }
  .time,.topic {
    position: absolute;
    font-size: 0.7rem;
    color: #fff;
    display: flex;
    align-items: center;
    font-size: .7rem;
    line-height: 1rem;
    padding: 0 .5rem;
    font-weight: 600;
    height: 1.3rem;
    border-radius: .2rem;
    background-color:rgba(0,0,0,.6);
    color:#fff;
    align-items: center;
    text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
    i {
      width: 0.75rem;
      height: 0.75rem;
      margin-right: 0.225rem;
    }
  }
  .time{ top: 1rem;right: 2rem;}
  .topic{left:2rem;bottom:6rem}
}
.top {
    display: flex;
    color: #333;
    flex: 1 1 auto;
    align-items: center;
    .left {
      width: 2rem;
      height: 2rem;
      margin: 0.4rem 0.5rem 0.4rem 0rem;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      i {
        font-size: 0.5rem;
        font-weight: 600;
        line-height: 1rem;
      }
      .name {
       font-size: .7rem;
      line-height: .8rem;
      color:#fff;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-word;
      word-wrap: break-word;
      }
      .address {
        font-size: 0.7rem;
        line-height: 1rem;
        color: #838385;
        display: flex;
        align-items: baseline;
      }
    }
  }
</style>
