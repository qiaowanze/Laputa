<template>
  <div>
    <div class="photographers">
      <div class="_2e8y">
        <div class="oJjm_3Ucp" v-for="(data,index) in datalist" :key="data.slug">
          <div class="_1tZU">
            <div class="imgbox">
              <img :src="data.avatar.small"  @click="handleClick2(data)" />
            </div>
            <i @click="handleClick2(data)">{{data.name}}</i>
            <p>{{data.country_name | cityfilter}}</p>
            <svg t="1583494265458" class="icon icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8223" width="200" height="200"><path d="M511.2832 0.1024A511.5904 511.5904 0 0 0 0 512a511.5904 511.5904 0 0 0 511.2832 511.8976A511.488 511.488 0 0 0 1022.464 512 511.488 511.488 0 0 0 511.2832 0.1024z m240.128 563.6096c-39.6288 57.7536-94.0032 127.0784-141.5168 168.0384-34.5088 29.696-98.0992 75.6736-148.2752 67.1744-129.2288-21.7088-101.7856-338.5344-188.7232-410.0096-39.8336-11.5712-59.0848 49.5616-80.896 13.5168-34.4064-28.672 33.1776-78.7456 67.3792-107.52 42.3936-35.6352 92.2624-86.4256 148.2752-64.3072 108.9536 43.008 30.8224 303.4112 134.7584 360.0384 53.76-43.2128 113.9712-114.4832 101.1712-201.728-10.1376-29.0816-59.392-19.8656-87.6544-13.4144-1.4336-133.0176 261.4272-234.9056 283.136-53.76 11.776 110.8992-87.6544 241.9712-87.6544 241.9712z" fill="#F5CC23" p-id="8224"></path></svg>
            <svg t="1583494537097" class="icon icon2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="38821" width="200" height="200"><path d="M512.1 512.1m-342.8 0a342.8 342.8 0 1 0 685.6 0 342.8 342.8 0 1 0-685.6 0Z" fill="#75AFCC" p-id="38822"></path><path d="M960.1 512.1c0 247.4-200.6 448-448 448s-448-200.6-448-448 200.6-448 448-448 448 200.6 448 448z" fill="#1296db" p-id="38823" data-spm-anchor-id="a313x.7781069.0.i6" class="selected"></path><path d="M837.4 691.4l0.1-310.9c0-8.5-7-15.5-15.5-15.5h-9.7c-7.3 0-13.3-6-13.3-13.3v-26c0-7.5-5.2-13.8-12.6-15.2-100.6-19.2-192.1-18.9-261.7 30.2-12.4 8.8-13.5 8.7-25.8 0-69.7-49-161.2-49.4-261.8-30.2-7.3 1.4-12.6 7.7-12.6 15.2v26c0 7.3-5.9 13.3-13.3 13.3h-9.7c-8.5 0-15.5 7-15.5 15.5l0.1 310.9c0 8.5 7 15.5 15.5 15.5h262.8c4.9 0 8.8 4 8.8 8.8 0 5.2 3.4 9.5 8.9 9.5h59.3c4.9 0 8.9-4 8.9-8.9 0-5.2 3.4-9.5 8.9-9.5H822c8.5 0.1 15.4-6.9 15.4-15.4z" fill="#FDFEFF" p-id="38824"></path><path d="M490.1 676.7c-62-38.7-142.7-43.1-228.9-28.8-8.8 1.4-16.7-5.2-16.7-14.2l-0.1-293.7c0-7.6 5.4-14 12.9-15.3 89.8-15.2 172.5-9.2 232.7 36.3 7.7 5.8 11.8 14.1 11.8 23.8l0.1 285.2c0 6.2-6.6 9.9-11.8 6.7zM533.6 676.7c62-38.7 142.8-43.1 228.9-28.8 8.8 1.4 16.7-5.2 16.7-14.2l0.1-293.7c0-7.6-5.4-14-12.9-15.3-89.8-15.2-172.5-9.2-232.7 36.3-7.7 5.8-11.9 14.1-11.9 23.8l-0.1 285.2c0 6.2 6.7 9.9 11.9 6.7z" fill="#33B5E5" p-id="38825"></path></svg>
            <div class="_22r_" style="margin-left:3rem;">
              <span>{{data.credit_score}}</span>
              <span>声望</span>
            </div>
            <div class="_22r_">
              <span>{{data.follower_count | filter}}</span>
              <span>粉丝</span>
            </div>
            <div class="_22r_">
              <span>{{data.work_count}}</span>
              <span>作品</span>
            </div>
            <button @click="handleClick(index)" >{{data.text}}</button>
          </div>
          <div class="_1iEQ">
            <div
              class="img"
              v-for="data in data.works"
              :key="data.slug"
              @click="handleClick1(data)"
            >
              <img :src="data.image.small" />
              <div class="time" v-show="data.duration">{{data.duration | detaFilter}}</div>
              <div class="time" v-show="data.album_photo_count">
                <span class="iconfont icon-xiangce"></span>
                {{data.album_photo_count}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import moment from 'moment'
import { Pagination, Popup } from 'vant'
import { mapState } from 'vuex'
Vue.use(Pagination).use(Popup)
Vue.filter('detaFilter', data => {
  if (data) {
    return moment(data * 1000).format('mm:ss')
  }
})
Vue.filter('filter', data => {
  return (data / 1000).toFixed(1) + 'k'
})
Vue.filter('cityfilter', data => {
  if (!data) {
    return 'NOname'
  } else {
    return data
  }
})

export default {
  props: ['datalist'],
  methods: {
    handleClick (index) {
      // 登录注册 完成后在完善部分功能
      if (this.token) {
        if (this.datalist[index].text === '关注') {
          this.datalist[index].text = '已关注'
        } else {
          this.datalist[index].text = '关注'
        }
      } else {
        this.$router.push('/Login')
      }
    },
    handleClick1 (data) {
      if (data.type === 'photo') {
        this.$router.push(`/photos/${data.slug}`)
      } else if (data.type === 'video') {
        this.$router.push(`/video/${data.slug}`)
      }
    },
    handleClick2 (data) {
      this.$router.push(`/users/${data.slug}`)
    }
  },
  computed: {
    ...mapState('login', ['token'])
  }
}
</script>
<style lang="scss" scoped>
.photographers {
  margin-bottom: 2.5rem;
  // margin-top: 4rem;
  ._2e8y {
    width: 100%;
    margin: 0 auto;
    .oJjm_3Ucp {
      border-bottom: 1px solid rgba(0, 0, 0, 0.09);
      margin: 0.8rem;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      align-items: center;
      ._1tZU,
      ._1iEQ {
        width: 100%;
      }
      ._1tZU {
        position: relative;
        .imgbox {
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 50%;
          overflow: hidden;
          float: left;
          img {
            width: 2.4rem;
            height: 2.4rem;
          }
        }
        .icon{
          width:1.25rem;
          height: 1.25rem;
          position: absolute;
        }
        .icon1{
          left: 6.5rem;
          top: 1.4rem;
        }
        .icon2{
          left: 8rem;
          top: 1.4rem;
        }
        i {
          font-style: normal;
          margin-left: 0.625rem;
          margin-top: 0.625rem;
          font-size: 1rem;
          font-weight: bolder;
        }
        p {
          margin: 0;
          margin-left: 3rem;
          margin-top: 0.325rem;
          font-size: 0.7rem;
          line-height: 0.8rem;
          color: rgba(0, 0, 0, 0.45);
        }
        ._22r_ {
          display: flex;
          flex-direction: column;
          line-height: 0.8rem;
          color: rgba(0, 0, 0, 0.45);
          float: left;
          margin-left: 0.625rem;
          margin-top: 0.625rem;
          :nth-child(1) {
            color: rgba(0, 0, 0, 0.85);
          }
          span {
            font-size: 0.7rem;
          }
        }
        button {
          position: absolute;
          color: #fff;
          width: 3.5rem;
          height: 1.6rem;
          font-size: 0.6rem;
          float: right;
          border-radius: 0.2rem;
          border: none;
          background-color: #1088f2;
          right: 0.5rem;
          top: 0rem;
        }
      }
      ._1iEQ {
        margin-top: 1.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .img {
          margin-left: 0.625rem;
          margin-bottom: 1rem;
          height: 4.5rem;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          .time {
            position: absolute;
            top: 5%;
            right: 4%;
            background-color: rgba(0, 0, 0, 0.6);
            color: #fff;
            font-size: 0.6rem;
            line-height: 1.2rem;
            padding: 0 0.4rem;
            font-weight: 600;
            height: 1.2rem;
            border-radius: 0.2rem;
          }
        }
      }
    }
  }
}
</style>
