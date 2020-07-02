<template>
    <div v-if='videoUrl'>
        <myheader :headerObj='headerObj'></myheader>
        <myvideo :videoUrl='videoUrl' :posterUrl='posterUrl'></myvideo>
        <share :shareObj='shareObj'></share>
        <introduce :introduceObj='introduceObj'></introduce>
        <div class='banner'>
            <a>
              <img src='https://sp-webfront-cn.oss-cn-hangzhou.aliyuncs.com/skypixel/v2/public/website/assets/1583222779701-66b90de327d828b2003a99f11289421a.jpg'/>
            </a>
        </div>
        <love></love>
        <comment :count='comment_count'></comment>
    </div>
</template>

<script>
import myvideo from '@/components/Video'
import { mapState } from 'vuex'
import myheader from './video&photo/Header'
import share from './video&photo/Share'
import introduce from './video&photo/Introduce'
import love from './video&photo/Love'
import comment from './video&photo/Comment'

export default {
  data () {
    return {
      headerObj: {},
      videoUrl: '',
      posterUrl: '',
      shareObj: {},
      introduceObj: {},
      comment_count: 0
    }
  },
  components: {
    myheader,
    myvideo,
    share,
    introduce,
    love,
    comment
  },
  mounted () {
    this.$axios.get(`/api/v2/videos/${this.$route.params.id}?lang=zh-Hans&platform=web&device=mobile`)
      .then(res => {
        this.videoUrl = res.data.data.item.cdn_url.medium
        this.posterUrl = res.data.data.item.image.medium

        this.headerObj = {
          userSlug: res.data.data.item.user.slug,
          userName: res.data.data.item.user.name,
          userImg: res.data.data.item.user.avatar.small,
          location: res.data.data.item.location ? res.data.data.item.location.label : ''
        }

        this.shareObj = res.data.data.item

        this.introduceObj = {
          title: res.data.data.item.title,
          view_count: res.data.data.item.view_count,
          equipment: res.data.data.item.equipment.name,
          description: res.data.data.item.description,
          created_at: res.data.data.item.created_at,
          tags: res.data.data.item.tags
        }

        this.comment_count = res.data.data.item.comment_count
      })
  },
  computed: {
    ...mapState('video', ['videoId'])
  }
}
</script>

<style lang="scss" scoped>
   .banner{
      a{
        display: block;
        img{
            display:block;
            width: 100%;
            height: 100%;
          }
      }
   }

</style>
