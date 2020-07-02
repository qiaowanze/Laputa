<template>
  <div class="Notif">
    <ul class="top">
      <li  v-for="(data,index) in datalist" :key="index">
        <div class="iconfont" :class="data.icon"></div>
        <div class="title">{{data.title}}</div>
      </li>
    </ul>
    <div class="main">
      <ul>
        <li>
          <img src="https://cdn-usa.skypixel.com/uploads/usa_files/account/avatar_image/3a1339bb-2e54-4c2e-a90a-039a6140512a.jpg@!128x128"/>
          <div class="bottom">
            <div class="one">SkyPixel </div>
            <div class="two">【公告】天空之城声望规则升级</div>
            <div class="three">2019-7-2</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      datalist: [
        { icon: 'icon-dianzan5', title: '点赞' },
        { icon: 'icon-icon-test2', title: '评论' },
        { icon: 'icon-icon-test37', title: '关注' },
        { icon: 'icon-shoucang', title: '收藏' },
        { icon: 'icon-icon-test22', title: '通知' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .Notif{
    background: #eeeeee;
    ul.top{
      display: flex;
      justify-content: space-around;
      padding: 1.6rem 0;
      border-bottom: 1.2rem solid #eeeeee;
      background: white;
      li{
        .iconfont{
          width: 3rem;
          height: 3rem;
          background: #eeeeee;
          border-radius: 50%;
          font-size:1.3rem;
          text-align: center;
          line-height: 3rem;
        }
        .title{
          font-size: 0.8rem;
          color: #4b4b4b;
          text-align: center;
          height: 2rem;
          line-height: 2rem;

        }
      }
    }
    .main{
      ul{
        li{
          display: flex;
          justify-content: flex-start;
          padding: 0 .8rem;
          height: 6rem;
          background: white;
          img{
            width: 2.5rem;
            height: 2.5rem;
            border-radius:50%;
            margin: 0.8rem 1rem 0 0;
          }
          .bottom{
            .one{
              height: 1.2rem;
              font-size: .6rem;
              line-height: 1.2rem;
              margin-top: 0.8rem;
            }
            .two{
              @extend .one;
              margin-top: 0.4rem;

            }
            .three{
              @extend .one;
              margin-top: 0.4rem;
            }
          }
        }
      }
    }
  }
</style>
