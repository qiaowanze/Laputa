<template>
  <div v-if='datalist'>
    <div class="header">
      <div class="back">
        <img class="black" ref='black'
          src="http://spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/m-header-bg1.2bce50b4.png"
          alt
        />
        <img
          src="http://spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/m-header-bg2.6ed12418.png"
          alt
        />
        <img
          src="http://spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/m-header-bg3.3643a22d.png"
          id="headerbg3"
          alt="snow mountain"
          style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);"
        />
        <img
          src="http://spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/m-header-bg4.db12d957.jpg"
          id="headerbg4"
          alt="sky"
          style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);"
        />
      </div>
      <div class="logo">
        <img
          src="http://spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/m-brand-cn.5297cbc3.png"
          alt
        />
        <img src="http://spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/five-years.46c34474.png" alt="">
        <h2 class="title">{{datalist.title}}</h2>
        <h3 class="des">{{datalist.description}}</h3>
        <h4>向下滑查看获奖名单</h4>
        <div class="jR7N"><div class="_2FQi"><div class="dcML"></div></div></div>
      </div>
    </div>
    <div class="big">
      <img class="biglogo" src="http://spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/prize-grand.7c878a61.png" alt="">
      <h2>年度大奖</h2>
      <firstward :list='videolist'></firstward>
       <div class="comment">
          <p>这部影片的一切令人叹为观止。 影片的拍摄，声音设计和滑雪的表现都非常出色。 我喜欢这部电影的简洁性，没有花哨的剪辑或沉重的音乐，全片重点就是为了表现运动本身。 所有镜头都经过深思熟虑，且表现出色。</p>
      </div>
       <firstward :list='photolist'></firstward>
        <div class="comment">
          <p>此图像中情感表达非常有力，充满戏剧性。 梦幻般的构图和后期制作。 艺术！！</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import firstward from '@/components/FirstWard'
import { Loading } from 'vant'
Vue.use(Loading)
export default {
  data () {
    return {
      datalist: [],
      alllist: {},
      videolist: [],
      allist: {},
      photolist: []
    }
  },
  components: {
    firstward
  },
  mounted () {
    this.$axios({
      url: `/api/v2/contests/${this.$route.params.id}?lang=zh-Hans&platform=web&device=mobile`
    }).then(res => {
      this.datalist = (res.data.data.item)
    })
    this.$axios({
      url: '/api/v2/badges/skypixel-5th-anniversary-contest-annual-video-award-sponsored-by-nikon,skypixel-5th-anniversary-contest-video-group-first-prize-city,skypixel-5th-anniversary-contest-video-group-first-prize-nature,skypixel-5th-anniversary-contest-video-group-first-prize-sport,skypixel-5th-anniversary-contest-video-group-first-prize-travel,skypixel-5th-anniversary-contest-video-group-second-prize-city,skypixel-5th-anniversary-contest-video-group-second-prize-nature,skypixel-5th-anniversary-contest-video-group-second-prize-sport,skypixel-5th-anniversary-contest-video-group-second-prize-travel,skypixel-5th-anniversary-contest-video-group-third-prize-city,skypixel-5th-anniversary-contest-video-group-third-prize-nature,skypixel-5th-anniversary-contest-video-group-third-prize-sport,skypixel-5th-anniversary-contest-video-group-third-prize-travel,skypixel-5th-anniversary-contest-video-group-aerial-story,skypixel-5th-anniversary-contest-nominated-entries,skypixel-5th-anniversary-contest-people-s-choice-prize/videos?lang=zh-Hans&platform=web&device=mobile'
    }).then(res => {
      this.alllist = res.data.data.item
      this.videolist = this.alllist['skypixel-5th-anniversary-contest-annual-video-award-sponsored-by-nikon']
      console.dir(this.videolist)
    })
    this.$axios({
      url: '/api/v2/badges/skypixel-5th-anniversary-contest-annual-photo-award-sponsored-by-western-digital,skypixel-5th-anniversary-contest-photo-group-first-prize-architecture,skypixel-5th-anniversary-contest-photo-group-first-prize-nature,skypixel-5th-anniversary-contest-photo-group-first-prize-portrait,skypixel-5th-anniversary-contest-photo-group-first-prize-sport,skypixel-5th-anniversary-contest-photo-group-second-prize-architecture,skypixel-5th-anniversary-contest-photo-group-second-prize-nature,skypixel-5th-anniversary-contest-photo-group-second-prize-portrait,skypixel-5th-anniversary-contest-photo-group-second-prize-sport,skypixel-5th-anniversary-contest-photo-group-third-prize-architecture,skypixel-5th-anniversary-contest-photo-group-third-prize-nature,skypixel-5th-anniversary-contest-photo-group-third-prize-portrait,skypixel-5th-anniversary-contest-photo-group-third-prize-sport,skypixel-5th-anniversary-contest-photo-group-aerial-story,skypixel-5th-anniversary-contest-nominated-entries,skypixel-5th-anniversary-contest-people-s-choice-prize/photos?lang=zh-Hans&platform=web&device=mobile'
    }).then(res => {
      this.allist = res.data.data.item
      this.photolist = this.allist['skypixel-5th-anniversary-contest-annual-photo-award-sponsored-by-western-digital']
      console.log(this.photolist)
    })
  }
}
</script>

<style lang="scss" scoped>
.header {

  overflow: hidden;
  .back {
    img {
      background-size: cover;
      background-position: 50%;
      background-repeat: no-repeat;
      width: 100%;
      height: auto;
      position: absolute;
      left: 0;
    }
    img:nth-child(2) {
      z-index: 33;
      bottom: 0;
    }
    img:first-child {
      z-index: 44;
      bottom: -21.8rem;
    }
    img:nth-child(3) {
      z-index: 22;
      bottom: 5.8rem;
    }
    img:nth-child(4) {
      z-index: 11;
      height: 28rem;
    }
  }
}
.logo {
  transform-origin: 0 100%;
  animation: showOut 2s ease ;
  position: absolute;
  z-index: 111;
  width: 11.8rem;
  top:7rem;
  left:0;
  right: 0;
  margin:0 auto;
  height: 1rem;
  text-align: center;
  img{width: 100%;margin-bottom: 1rem;}
  .title{
  font-size: 1.5rem;
  line-height: 1.7rem;
  font-weight: 600;
  color:#fff;
  }
  .des{
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 1.2rem;
  color:#fff;
  font-weight: 400;
  }
  h4{
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 1.2rem;
  color:#fff;
  font-weight: 400;
  }
}
.jR7N {
    margin: 1.6rem auto 0;
}
.jR7N ._2FQi {
    width: 1px;
    height: 2rem;
    margin: 0 auto;
}
.jR7N ._2FQi .dcML {
    background-color:
    #fff;
    width: 100%;
    height: 100%;
    transform-origin: 0 100%;
    animation: fade 2s ease infinite;
}
@keyframes fade {
   0%{
     transform: translateY(0px);
       height: 100%;
      opacity: 1;
    }

    100%{
       transform: translateY(50px);
      height: 0;
      opacity: 0;
    }
}
@keyframes showOut {
   0%{
     transform: translateY(500px);
    }

    100%{
       transform: translateY(0px);
    }
}
.big{
  background-color: #000;
  position: absolute;
  z-index: 222;
  top: 50rem;
  width: 100%;
  opacity: 1;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 1.6rem;
  .biglogo{
    width: 2.8rem;
    height: 2.8rem;
  }
  h2{
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;
    font-weight: 600;
    background-color:#fff;
    background-image: linear-gradient(90deg,#bf953f,#fcf6ba 44%,#b38728 55%,#fbf5b7 83%,#aa771c);
    -webkit-background-clip: text;
    -webkit-text-fill-color:transparent;
    margin:.3rem;
  }
}
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
.comment{
    padding: 1.2rem 1.6rem;
    background-color:#0d0d0d;
    width: 100%;
    box-sizing: border-box;
    p{
        font-size: 1.2rem;
        line-height: 1.5rem;
        margin-bottom: .8rem;
        font-weight: 600;
        color:#fff;
        margin-bottom: 1.2rem;
        text-align: center;
        width: 100%;
    }
  }

</style>
