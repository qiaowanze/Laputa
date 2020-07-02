<template>
    <div class='content'>
        <h3>你可能喜欢</h3>
        <ul v-if='dataList.length'>
            <li v-for='(item,index) in dataList' :key='index' @click='handelpath(item.slug, item.cdn_url)'>
                <div class='imgbox'>
                    <img :src='item.image'/>
                </div>
                <div class='introduce'>
                    <p>{{ item.title }}</p>
                    <div class='user'>
                        <img :src='item.userImg'/>
                        <span>{{ item.userName }}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    this.$axios.get('api/v2/videos/dji-2019-4bec5d1d-f1b1-45e2-ad43-cd797ecf7f59?lang=zh-Hans&platform=web&device=mobile')
      .then(res => {
        this.dataList.unshift({
          title: res.data.data.item.title,
          image: res.data.data.item.image.large,
          slug: res.data.data.item.slug,
          userName: res.data.data.item.user.name,
          userImg: res.data.data.item.user.avatar.small,
          cdn_url: res.data.data.item.cdn_url
        })
      })
    this.$axios.get('api/v2/mobile/feeds?lang=zh-Hans&platform=web&device=mobile&limit=20&offset=400')
      .then(res => {
        res.data.data.items.forEach((val, index) => {
          if (index < 5) {
            this.dataList.push({
              title: val.title,
              image: val.image.large,
              slug: val.slug,
              userName: val.user.name,
              userImg: val.user.avatar.small,
              cdn_url: val.cdn_url
            })
          }
        })
      })
  },
  methods: {
    ...mapMutations('video', ['setVideoId']),
    handelpath (slug, url) {
      if (url) {
        this.$router.push(`/video/${slug}`)
        this.$router.go(0)
      } else {
        this.$router.push(`/photos/${slug}`)
      }
    }
  }
}
</script>

<style scoped lang='scss'>
    .content{
        padding: 1rem;
        ul{
            li{
                margin: 1rem 0;
                display: flex;
                border-radius: 0.3rem;
                overflow: hidden;
                box-shadow: 0 0 .1rem rgb(226, 225, 225);
                background: #fff;
                .imgbox{
                    width: 8.595rem;
                    height: 6.68rem;
                    img{
                        width:100%;
                        height:100%
                    }
                }
                .introduce{
                    padding: 0 1rem;
                    p{
                        width: 13.25rem;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                    .user{
                        display: flex;
                        img{
                            border-radius: 50%;
                            width: 1rem;
                        }
                        span{
                            font-size: .8rem;
                            margin-left: .3rem;
                        }
                    }
                }
            }
        }
    }
</style>
