<template>
    <div class='introduce'>
        <div class='title'>
            <img src='//spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/ordinary-s.25f33d98.svg'/>
            <p>{{ introduceObj.title }}</p>
        </div>
        <div class='browse'>
            <p><span>{{ introduceObj.view_count }}</span><span>次浏览</span></p>
            <p><span>使用</span><span class='equipment'>{{ introduceObj.equipment }}</span><span>拍摄</span></p>
        </div>
        <div class='describe' :class='isOpen?"spread":""'>
            <p class='description'>{{ introduceObj.description }}</p>
            <p class='time'>{{ introduceObj.created_at | filterDate}}</p>
            <div class='content'>
                <ul class='tag'>
                    <li v-for='data in introduceObj.tags' :key='data.name' @click='handelTag(data.slug)'>
                    {{ data.name }}
                    </li>
                </ul>
            </div>
        </div>
        <div class='open' @click='isOpen = !isOpen'>
            <i class='iconfont' :class='isOpen?"icon-icon-test58":"icon-icon-test60"'></i>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
// 时间戳过滤
Vue.filter('filterDate', (date) => {
  return moment(date).format('YYYY-MM-DD  h:mm')
})

export default {
  props: ['introduceObj'],
  data () {
    return {
      isOpen: false,
      wrapperWidth: ''
    }
  },
  methods: {
    handelTag (slug) {
      this.$router.push(`/tags/${slug}`)
    }
  },
  mounted () {

  }
}
</script>

<style scoped lang='scss'>
    p,h3{
            margin:0;
    }
    .introduce{
        padding: 1rem;
        .title{
                display: flex;
            img{
                width: 1.5rem;
            }
            p{
                margin-left: .5rem;
                font-size: 1rem
            }
        }
        .browse{
            padding: .5rem 0;
            display: flex;
            p{
            margin-right: 2rem;
            font-size: .9rem;
            color: gray;
                span.equipment{
                    color: blue;
                }
            }
        }
    }
    .describe{
        height: 3rem;
        overflow: hidden;
        .description{
            font-size: .9rem;
            padding: .5rem 0;
            color: gray;
        }
        .time{
            font: .8rem/2 '';
            color: rgb(190, 190, 190);
        }
        .content{
            overflow-y: hidden;
            overflow-x: auto;
            ul.tag{
            padding: .5rem 0;
            display: flex;
                li{
                    font: .9rem/2 '';
                    padding: 0 .5rem;
                    margin: .1rem .5rem;
                    background:rgb(240, 238, 238);
                    color: gray;
                    white-space: nowrap;
                }
            }
        }
    }
    .open{
        text-align: center;
    }
    .spread{
        overflow:hidden;
        height:auto;
    }
</style>
