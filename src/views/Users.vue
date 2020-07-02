<template>
<keep-alive>
  <div>
    <!-- {{$route.params.id}} -->
    <div class="banner" :style="{backgroundImage:'url('+(this.coveList.small?this.coveList.small:this.coveList.medium)+')'}">
      <div class="iconfont icon-icon-test16 set" @click="setTing()" v-show='!isOtherShow'></div>
    </div>
    <div class="head">
      <div class="uesrImg">
        <img :src="this.avatarList.small" />
      </div>
      <!-- <div class="name">{{$route.params.id | filter }}</div> -->
      <div class="introduce">
        <div class="name">{{$route.params.id |filter}}</div>
        <div class="prize" v-show='isOtherShow'>
          <div class="nation" :title="userList.country_name">
            <svg t="1583494194966" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5086" width="20" height="20"><path d="M51.2 218.763636H977.454545v586.472728H51.2V218.763636z" fill="#FD0013" p-id="5087"></path><path d="M195.490909 302.545455l27.927273 55.854545 60.509091 13.963636-46.545455 41.890909 9.309091 60.509091-51.2-27.927272-55.854545 27.927272 9.309091-60.509091-46.545455-41.890909 60.509091-9.309091 32.581818-60.50909z m228.072727 130.327272l9.309091 13.963637 18.618182 4.654545-18.618182 13.963636 4.654546 18.618182-13.963637-9.309091-13.963636 9.309091V465.454545l-13.963636-13.963636 18.618181-4.654545 9.309091-13.963637zM363.054545 283.927273v18.618182l13.963637 9.30909-13.963637 4.654546-4.654545 18.618182-13.963636-13.963637-13.963637 4.654546 9.309091-13.963637-9.309091-18.618181 18.618182 4.654545 13.963636-13.963636z m79.127273 69.818182l-9.309091 18.618181 4.654546 13.963637-13.963637-4.654546-13.963636 13.963637v-18.618182l-18.618182-9.309091 18.618182-4.654546 4.654545-18.618181 9.309091 13.963636 18.618182-4.654545z m-60.509091 172.218181l-18.618182 9.309091-4.654545 18.618182-13.963636-13.963636H325.818182l9.309091-13.963637-4.654546-13.963636 18.618182 4.654545 13.963636-13.963636v18.618182l18.618182 4.654545z" fill="#FFFD43" p-id="5088"></path></svg>
          </div>
          <div class="recommend" title="推荐摄影师">
            <svg t="1583494265458" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8223" width="20" height="20"><path d="M511.2832 0.1024A511.5904 511.5904 0 0 0 0 512a511.5904 511.5904 0 0 0 511.2832 511.8976A511.488 511.488 0 0 0 1022.464 512 511.488 511.488 0 0 0 511.2832 0.1024z m240.128 563.6096c-39.6288 57.7536-94.0032 127.0784-141.5168 168.0384-34.5088 29.696-98.0992 75.6736-148.2752 67.1744-129.2288-21.7088-101.7856-338.5344-188.7232-410.0096-39.8336-11.5712-59.0848 49.5616-80.896 13.5168-34.4064-28.672 33.1776-78.7456 67.3792-107.52 42.3936-35.6352 92.2624-86.4256 148.2752-64.3072 108.9536 43.008 30.8224 303.4112 134.7584 360.0384 53.76-43.2128 113.9712-114.4832 101.1712-201.728-10.1376-29.0816-59.392-19.8656-87.6544-13.4144-1.4336-133.0176 261.4272-234.9056 283.136-53.76 11.776 110.8992-87.6544 241.9712-87.6544 241.9712z" fill="#F5CC23" p-id="8224"></path></svg>
          </div>
          <div class="story" title="Story作者">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fill-rule="evenodd"><circle fill="#3CA6F5" cx="8" cy="8" r="8"></circle><path d="M10.251 4c.709 0 1.288.142 1.74.427.45.285.676.691.676 1.219v5.896h-.532c-.386-.584-1.014-.875-1.884-.875-.483 0-.91.128-1.28.385s-.604.573-.7.948h-.049V4.646c.403-.43 1.08-.646 2.03-.646zM5.749 4c-.709 0-1.288.142-1.74.427-.45.285-.676.691-.676 1.219v5.896h.532c.386-.584 1.014-.875 1.884-.875.483 0 .91.128 1.28.385s.604.573.7.948h.049V4.646C7.375 4.216 6.698 4 5.748 4z" fill="#FFF"></path></g></svg>
          </div>
          <div class="medal">
            <ul>
              <li v-for='(data,index) in badgesList' :key='index'>
                <img :src='data.image_name | xunzhang' :title="data.description" />
                <span>{{data.count}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="many">
      <ul>
        <li>
          <div>{{userList.credit_score}}</div>
          <div class="label">声望</div>
        </li>
        <li>
          <div>{{userList.follower_count}}</div>
          <div class="label">粉丝</div>
        </li>
        <li>
          <div>{{userList.followee_count}}</div>
          <div class="label">关注</div>
        </li>
        <li>
          <div>{{userList.work_liked_count}}</div>
          <div class="label">被赞</div>
        </li>
      </ul>
    </div>
    <div class="count" v-show='isOtherShow'>
      <button class="Bone">关注</button>
      <button class="Btwo iconfont icon-icon-test2">
        <span>私信</span>
      </button>
    </div>
    <div class="more">
        <ul class="A">
          <li :class="isShowA" @click="handleA()">
            <span>全部作品</span>
            <span v-show="isOtherShow"> {{userList.work_count}}</span>
          </li>
          <li :class="isShowB" @click="handleB()" v-show='!isOtherShow'>收藏</li>
        </ul>
        <div class="botton">
          <div class="iconfont icon-ai238 gengduo" :class="isShowC" @click="handleC()"></div>
          <div class="iconfont icon-liebiao2 liebiao" style="font-size:1.5rem;margin-top:0.24rem;" :class="isShowD" @click="handleD()"></div>
        </div>
        <div class="all" v-show='this.isShowA.active'>
          <div v-show='!isOtherShow' >
            <div>你还没有发过作品哦</div>
            <div>在<a href="https://www.dji.com/cn/goapp">DJI GO</a>或桌面端网页发布作品</div>
          </div>
          <div v-show="isOtherShow">
            <div class="views" v-show='this.isShowC.activeB'>
              <ul>
                <li v-for="(data,index) in viewList" :key="index" >
                  <img :src="data.image.small" @click="handleView(data)" />
                  <!-- <img v-for="(img,index) in imageList" v-lazy="img" :key='index' > -->
                  <div :class="data.duration?'duration':''">{{data.duration | duration}}</div>
                  <div :v-show="data.badges" class="badges">
                    <img v-for="(item,index) in data.badges" :key='index' :src='item.image_name | xunzhang' />
                  </div>
                </li>
              </ul>
            </div>
            <div class="liebiao" v-show='this.isShowD.activeB'>
              <ul class="liebiaoul">
                <li v-for="(data,index) in viewList" :key="index">
                  <img :src="data.image.small"  @click="handleView(data)" />
                  <div class="Ltitle" @click="handleView(data)">{{data.title}}</div>
                  <div class="someT">
                    <span class="iconfont icon-dianzan3 like" @click="handlrF">{{data.like_count}}</span>
                    <span class="iconfont icon-icon-test2 guanzhu">{{data.comment_count}}</span>
                    <span class="iconfont icon-share share">分享</span>
                    <div :class="data.duration?'duration':''">{{data.duration | duration}}</div>
                  </div>
                  <div :v-show="data.badges" class="badges">
                    <img v-for="(item,index) in data.badges" :key='index' :src='item.image_name | xunzhang' />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="Sc" v-show="this.isShowB.active">
          <div>你还没有收藏哦</div>
        </div>
    </div>
  </div>
</keep-alive>
</template>
<script>
import Vue from 'vue'
import { Dialog, Lazyload } from 'vant'
import { mapMutations } from 'vuex'
Vue.use(Dialog).use(Lazyload, { lazyComponent: true })
export default {
  beforeRouteUpdate (to, from, next) {
    this.$axios({
      url: 'api/v2/users/djiuser-7lj0topsnozr?lang=zh-Hans&platform=web&device=mobile',
      method: 'get'
    }).then(res => {
      this.userList = res.data.data.item
      this.coveList = res.data.data.item.cover
      this.avatarList = res.data.data.item.avatar
      this.num = parseInt(res.data.data.item.work_count)
      var arr = res.data.data.item.badges
      this.badgesList = arr.reverse()
      this.isOtherShow = false
    })
    next()
  },
  data () {
    return {
      coveList: [],
      avatarList: [],
      userList: [],
      viewList: [],
      badgesList: [],
      urlNow: '',
      urlList: '',
      isOtherShow: true,
      isShowA: {
        active: true
      },
      isShowB: {
        active: false
      },
      isShowC: {
        activeB: true
      },
      isShowD: {
        activeB: false
      },
      status: 1,
      num: '',
      before: ''
    }
  },
  methods: {
    ...mapMutations('login', ['setToken']),
    // 获取滚动条当前的位置
    getScrollTop () {
      let scrollTop = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
      } else if (document.body) {
        scrollTop = document.body.scrollTop
      }
      // console.log(scrollTop)
      return scrollTop
    },
    // 获取当前可视范围的高度
    getClientHeight () {
      let clientHeight = 0
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
      } else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
      }
      // console.log(clientHeight)
      return clientHeight
    },

    // 获取文档完整的高度
    getScrollHeight () {
      // console.log(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight))
      return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    },
    // 滚动事件触发下拉加载
    onScroll () {
      if (this.viewList) {
        if (this.getScrollHeight() - this.getClientHeight() - this.getScrollTop() <= 150) {
          if (this.status <= this.num) {
            // 调用请求函数
            this.$axios({
              url: `/api/v2/users/${this.$route.params.id}/works?lang=zh-Hans&platform=web&device=mobile&limit=18&offset=${this.status * 18}`,
              method: 'get'
            }).then(res => {
              this.viewList = [...this.viewList, ...res.data.data.items]
            })
            this.status++
          } else {
            console.log('没有更多内容了！！！')
          }
        }
      }
    },
    handlrF () {
      console.log('点赞')
    },
    setTing () {
      Dialog.confirm({
        message: '是否退出账号'
      }).then(() => {
        this.setToken('')
        this.$router.push('/')
      }).catch(() => {
        console.log('取消退出')
      })
    },
    handleA () {
      this.isShowA.active = true
      this.isShowB.active = false
    },
    handleB () {
      this.isShowA.active = false
      this.isShowB.active = true
    },
    handleC () {
      this.isShowC.activeB = true
      this.isShowD.activeB = false
    },
    handleD () {
      this.isShowC.activeB = false
      this.isShowD.activeB = true
    },
    handleView (data) {
      if (data.type === 'photo') {
        this.$router.push(`/photos/${data.slug}`)
      } else {
        this.$router.push(`/video/${data.slug}`)
      }
    },
    goBack () {
      // this.$router.replace({path:'/'});
      this.$router.go(0)
      // replace替换原路由，作用是避免回退死循环
    }
  },
  destroyed () {
    window.removeEventListener('popstate', this.goBack, false)
  },
  mounted () {
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL)
      window.addEventListener('popstate', this.goBack, false)
    }
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
    var reg = /^(user_)[a-z0-9_-]+$/
    if (reg.test(this.$route.params.id)) {
      this.urlNow = 'api/v2/users/djiuser-7lj0topsnozr?lang=zh-Hans&platform=web&device=mobile'
      this.urlList = '/api/v2/users/djiuser-7lj0topsnozr/works?lang=zh-Hans&platform=web&device=mobile&limit=18&offset=0'
      this.isOtherShow = false
    } else {
      this.urlNow = `/api/v2/users/${this.$route.params.id}?lang=zh-Hans&platform=web&device=mobile`
      this.urlList = `/api/v2/users/${this.$route.params.id}/works?lang=zh-Hans&platform=web&device=mobile&limit=18&offset=`
      this.isOtherShow = true
    }

    this.$axios({
      url: this.urlNow,
      method: 'get'
    }).then(res => {
      this.userList = res.data.data.item
      // console.log(res.data.data.item)
      this.coveList = res.data.data.item.cover
      this.avatarList = res.data.data.item.avatar
      this.num = parseInt(res.data.data.item.work_count)
      var arr = res.data.data.item.badges
      this.badgesList = arr.reverse()
    })

    // 异步请求，需要改成同步
    this.$axios({
      url: this.urlList + '0',
      method: 'get'
    }).then(res => {
      this.viewList = res.data.data.items
      // console.log(res.data.data.items)
    //   this.$axios({
    //     url:this.urlList + '18',
    //     method:'get'
    //     }).then(res=>{
    //       this.viewList2 = res.data.data.items
    //       this.$axios({
    //       url:this.urlList + '60',
    //       method:'get'
    //       }).then(res=>{
    //         var arr = res.data.data.items
    //         this.viewList = [...this.viewList1,...this.viewList2,...arr]
    //       })
    //   })
    })
  },
  filters: {
    filter (data) {
      return data.slice(0, 13)
    },
    duration (s) {
      if (s) {
        var h
        h = Math.floor(s / 60)
        // 计算秒
        // 算法：取得秒%60的余数，既得到秒数
        s = s % 60
        // 将变量转换为字符串
        h += ''
        s += ''
        // 如果只有一位数，前面增加一个0
        h = (h.length === 1) ? '0' + h : h
        s = (s.length === 1) ? '0' + s : s
        return h + ':' + s
      } else {
        return ''
      }
    },
    // 根据奖章的名字，动态渲染图标
    xunzhang (data) {
      if (data === 'bronze') {
        return '//spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/copper-s.ff4c9280.svg'
      } else if (data === 'ordinary') {
        return '//spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/ordinary-s.25f33d98.svg'
      } else if (data === 'gold') {
        return '//spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/gold-s.a713daad.svg'
      } else if (data === 'silver') {
        return '//spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/silver-s.529441e5.svg'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .banner{
    width: 100%;
    height: 13rem;
    // background: url('https://cdn-usa.skypixel.com/uploads/usa_files/default_images/default_personal_cover/508c62ce-a382-49a9-b395-fadeeaa91c59.jpg@!550') no-repeat;
    background-size: 100% 100%;
    position: relative;
    .set{
      color: white;
      position: absolute;
      bottom: 0.6rem;
      right: 0.6rem;
      font-size: 1.6rem;
      cursor: pointer;
    }
  }
  .head{
    display: flex;
    justify-content: flex-start;
    padding: 0 .8rem;
    position: relative;
    .uesrImg{
      position: relative;
      img{
        width: 4.6rem;
        height: 4.6rem;
        border: 0.1rem solid white;
        border-radius: 50%;
        position: absolute;
        top:-2.3rem;

      }
    }
    .introduce{
      flex: 3;
      height: 2rem;
      font-size: 1rem;
      margin-left: 5.2rem;
      // color: #4b4b4b;
      .name{
        margin-top: 0.2rem;
        color: #4b4b4b;
      }
      .prize{
        margin-top: 0.2rem;
        display: flex;
        justify-content: flex-start;
        .nation{
          flex: 1;
          font-size: 1.2rem;
          color:red;
        }
        .recommend{
          flex: 1;
          font-size: 1.1rem;
          color:red;
        }
        .story{
          flex: 1;
          font-size: 1.1rem;
          color:red;
        }
        .medal{
          flex: 12;
          ul{
            width: 100%;
            display: flex;
            justify-content: flex-start;
            margin-left: .8rem;
            li{
              align-items: center;
              display: flex;
              // flex: 1;
              justify-content: flex-start;
              img{
                width: 1rem;
                height: 1rem;
              }
              span{
                color: #727272;
                font-size: 0.6rem;
              }
            }
          }
        }
      }
    }

  }
  .many{
    margin-top: .8rem;
    padding: 1rem;
    ul{
      display: flex;
      justify-content: space-between;
      li{
        color: #4b4b4b;
        text-align: center;
        font-size: .8rem;
        font-weight: 700;
        .label{
          color: #838385;
          font-weight:normal;
        }
      }
    }
  }
  .count{
    margin:.8rem;
    display: flex;
    justify-content: flex-start;
    button{
      height: 2.5rem;
      border: 0;
    }
    .Bone{
      flex: 2;
      background: #1088f2;
      font-weight: 600;
      color: white;
      border-radius: .2rem;
    }
    .Btwo{
      flex: 1;
      color: #1088f2;
      background-color:#eee;
      border: 0 solid #b0b0b0;
      font-size: 1.2rem;
      font-weight: 600;
      border-radius: .2rem;
      box-sizing: border-box;
      padding: 0 1rem;
      margin-left: 0.5rem;
      line-height:2.5rem;
      span{
        font-size: .8rem;
      }
    }
  }
  .more{
    display: flex;
    justify-content:space-between;
    position: relative;
    ul.A{
      padding: .8rem;
      display: flex;
      justify-content: flex-start;
      flex: 2;
      li{
        font-size: 1rem;
        margin-right: 1rem;
        font-weight: 600;
        color: #b0b0b0;
      }
      li.active{
          color: #4b4b4b;
        }
    }
    .botton{
      flex: 0.35;
      display: flex;
      justify-content: space-between;
      padding: .65rem .8rem;
      div{
        font-size: 1.8rem;
        color:#bbb;
      }
      .activeB{
        color: #4b4b4b;
      }
    }
    // .active{
    //   color: #4b4b4b;
    // }
    .all{
      position: absolute;
      font-size: 1rem;
      font-weight: 700;
      box-sizing: border-box;
      color: #4b4b4b;
      text-align: center;
      width: 100%;
      top:5rem;

      .views{
        ul{
          width: 100%;
          display: flex;
          justify-content:flex-start;
          flex-wrap: wrap;
          padding: 0;
          li{
            width: 32.4%;
            height: 10rem;
            margin-right: 0.2rem;
            margin-bottom: 0.2rem;
            position: relative;
            img{
              width: 100%;
              height: 10rem;
              display: block;
            }
            .duration{
              width: 2rem;
              height: 1rem;
              position: absolute;
              background:black;
              color: white;
              opacity: .6;
              right: 0.6rem;
              top: 0.6rem;
              font-size: 0.6rem;
              border-radius: 0.25rem;
              font-weight: normal;
            }
            .badges{
              display: flex;
              justify-content: flex-start;
              position: absolute;
              top:0.6rem;
              left:0.6rem;
              img{
                width: 1rem;
                height: 1rem;
              }

            }
          }
        }
      }
    }
    .liebiao{
      ul{
        li{
          position: relative;
          img{
            display: block;
            width: 100%;
            height: 12.4rem;
          }
          .Ltitle{
            font-size: .9rem;
            padding: .75rem;
            text-align: left;
            font-weight: normal;
          }
          .someT{
            font-size: .9rem;
            padding:0 .75rem .75rem .75rem;
            font-weight: normal;
            text-align: left;
            display: flex;
            .like{
              font-size: .9rem;
            }
            .guanzhu{
              margin-left: 1rem;
              font-size: .9rem;
            }
            .share{
              margin-left: 1rem;
              font-size: .9rem;
            }
          }
          .duration{
            width: 2rem;
            height: 1rem;
            position: absolute;
            background:black;
            color: white;
            opacity: .6;
            right: 0.6rem;
            top: 0.6rem;
            font-size: 0.6rem;
            border-radius: 0.25rem;
            font-weight: normal;
          }
          .badges{
              display: flex;
              justify-content: flex-start;
              position: absolute;
              top:0.6rem;
              left:0.6rem;
              img{
                width: 1rem;
                height: 1rem;
              }
            }
        }
      }
    }
    .Sc{
      position: absolute;
      font-size: 1rem;
      font-weight: 700;
      color: #4b4b4b;
      text-align: center;
      width: 100%;
      top:5rem;
    }
  }

</style>
