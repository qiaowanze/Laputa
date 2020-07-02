<template>
  <div>
    <div class="photographer">
      <ul class="photos" v-show="isShow">
        <router-link
          :to="{path:data.path,query:{url:data.url}}"
          tag="li"
          activeClass="qiaowanze"
          v-for="(data,index) in navlist"
          :key="data.text"
          @click.native="handleClick(index,data)"
        >{{data.text}}</router-link>
      </ul>
      <div class="left">
        <span @click="isShow=!isShow">{{navlist[index].text}}</span>
      </div>
      <div class="right">
        <van-cell is-link @click="showPopup">
          <van-icon name="filter-o" />
          <span>筛选</span>
        </van-cell>
        <van-popup v-model="show" position="right" :style="{ height: '100%',width:'86%' }">
          <p class="RQVe">
            <span>筛选</span>
          </p>
          <div class="select">
            <p>账号类型</p>
            <van-radio-group v-model="radio">
              <van-cell-group>
                <van-cell title="个人&公司" clickable @click="click1()">
                  <van-radio slot="right-icon" name="1" />
                </van-cell>
                <van-cell title="个人" clickable @click="click2()">
                  <van-radio slot="right-icon" name="2" />
                </van-cell>
                <van-cell title="公司" clickable @click="click3()">
                  <van-radio slot="right-icon" name="3" />
                </van-cell>
              </van-cell-group>
            </van-radio-group>
          </div>
          <div class="Btn">
            <button class="btn" @click="click()">重置</button>
            <button class="btn" @click="click()">确定</button>
          </div>
        </van-popup>
      </div>
    </div>
    <router-view :datalist="datalist"></router-view>
    <van-pagination
      v-model="currentPage"
      :page-count="pages"
      mode="simple"
      @change="handleChange()"
    />
  </div>
</template>
<script>
import Vue from 'vue'
import {
  Pagination,
  Popup,
  RadioGroup,
  Radio,
  CellGroup,
  Cell,
  Button
} from 'vant'
Vue.use(Pagination)
  .use(Button)
  .use(Popup)
  .use(Radio)
  .use(RadioGroup)
  .use(CellGroup)
  .use(Cell)
export default {
  data () {
    return {
      datalist: [],
      currentPage: 1,
      page: 0,
      pages: 0,
      radio: '1',
      show: false,
      isShow: false,
      type: '',
      navlist: [
        {
          path: '/photographers/recommended',
          text: '推荐摄影师',
          url: 'recommended'
        },
        {
          path: '/photographers/hot',
          text: '热门摄影师',
          url: 'hot'
        },
        {
          path: '/photographers/new',
          text: '新晋摄影师',
          url: 'new'
        },
        {
          path: '/photographers/creator',
          text: '签约摄影师',
          url: 'contract'
        }
      ],
      index: 0
    }
  },
  mounted () {
    if (!this.$route.query.url) {
      var url = `/api/v2/photographers/recommended?user_type=${this.type}&lang=zh-Hans&platform=web&device=mobile&limit=20&offset=${this.page}`
    } else {
      url = `/api/v2/photographers/${this.navlist[this.index].url}?user_type=${
        this.type
      }&lang=zh-Hans&platform=web&device=mobile&limit=20&offset=${this.page}`
    }
    this.$axios({
      url: url
    }).then(res => {
      this.datalist = res.data.data.items
      this.datalist = this.datalist.map(item => {
        return { ...item, text: '关注' }
      })
      this.pages = Math.round(res.data.data.total_items / 20)
    })
  },
  methods: {
    showPopup () {
      this.show = true
    },
    handleClick (index, data) {
      this.index = index
      this.isShow = false
      var url = ''
      if (!this.$route.query.url) {
        url = `/api/v2/photographers/recommended?user_type=${this.type}&lang=zh-Hans&platform=web&device=mobile&limit=20&offset=${this.page}`
      } else {
        url = `/api/v2/photographers/${
          this.navlist[this.index].url
        }?user_type=${
          this.type
        }&lang=zh-Hans&platform=web&device=mobile&limit=20&offset=${this.page}`
      }
      this.$axios({
        url: url
      }).then(res => {
        this.datalist = res.data.data.items
        this.datalist = this.datalist.map(item => {
          return { ...item, text: '关注' }
        })
        this.pages = Math.round(res.data.data.total_items / 20)
      })
      // console.log(this.url)
    },
    click1 () {
      this.type = ''
    },
    click2 () {
      this.type = 'personal'
    },
    click3 () {
      this.type = 'company'
    },
    click () {
      this.show = false
      var url = 0
      if (!this.$route.query.url) {
        url = `/api/v2/photographers/recommended?user_type=${this.type}&lang=zh-Hans&platform=web&device=mobile&limit=20&offset=${this.page}`
      } else {
        url = `/api/v2/photographers/${
          this.navlist[this.index].url
        }?user_type=${
          this.type
        }&lang=zh-Hans&platform=web&device=mobile&limit=20&offset=${this.page}`
      }
      this.$axios({
        url: url
      }).then(res => {
        this.datalist = res.data.data.items
        this.datalist = this.datalist.map(item => {
          return { ...item, text: '关注' }
        })
        this.pages = Math.round(res.data.data.total_items / 20)
        this.type = ''
      })
    },
    handleChange () {
      this.datalist = []
      this.page = (this.currentPage - 1) * 20
      this.$nextTick(() => {
        this.$axios({
          url: `/api/v2/photographers/${
            this.navlist[this.index].url
          }?user_type=&lang=zh-Hans&platform=web&device=mobile&limit=20&offset=${
            this.page
          }`
        }).then(res => {
          // console.log(res)
          this.datalist = res.data.data.items
          this.datalist = this.datalist.map(item => {
            return { ...item, text: '关注' }
          })
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.photographer {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  height: 3rem;
  .photos {
    width: 100%;
    position: absolute;
    background: #fff;
    z-index: 500;
    left: 0;
    top: 6rem;
    li {
      margin: 0.5rem 0rem 1rem 1.5rem;
    }
    .qiaowanze {
      font-weight: bolder;
    }
  }
  .left {
    flex: 0.9;
    height: 3rem;
    line-height: 3rem;
    span {
      padding-left: 1rem;
      font-size: 1.2rem;
      line-height: 1.6rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.85);
    }
  }
  .right {
    align-items: center;
    line-height: 1.2rem;
    color: rgba(0, 0, 0, 0.85);
    position: relative;
    justify-content: center;
    display: flex;
    padding: 0.6rem 0.4rem 0.6rem 0.8rem;
    .van-cell__right-icon::before {
      content: "";
    }
    .van-cell:not(:last-child)::after {
      border-bottom: none;
    }
    .van-cell--clickable {
      padding: 0 !important;
    }
    i {
      font-size: 1rem;
      color: rgba(0, 0, 0, 0.85);
    }
    span {
      font-size: 1rem;
      line-height: 1.25rem;
      color: rgba(0, 0, 0, 0.85);
      margin-left: 0.2rem;
    }
    .RQVe {
      font-size: 0.8rem;
      line-height: 1.2rem;
      font-weight: 600;
      height: 2.4rem;
      padding-left: 0.8rem;
      align-items: center;
      border-bottom: 1px solid #e8e8e8;
    }
    .select {
      height: 70%;
      p {
        font-size: 0.8rem;
        line-height: 0.8rem;
        color: #8c8c8c;
        margin-left: 1rem;
      }
      .van-radio-group {
        margin-left: 1rem;
        margin-right: 1rem;
        .van-cell-group::after {
          border: none;
        }
        .van-cell {
          margin-top: 2rem;
        }
      }
    }
    .Btn {
      width: 100%;
      display: flex;
      justify-content: space-around;
      .btn {
        border-radius: 0.2rem;
        width: 7rem;
        height: 2.2rem;
        background-color: #f7f7f7;
        border: 0 solid #b0b0b0;
        color: #b0b0b0;
        font-size: 0.8rem;
      }
      .btn:last-child {
        color: #fff;
        background-color: #1088f2;
      }
    }
  }
}
</style>
