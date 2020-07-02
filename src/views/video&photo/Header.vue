<template>
     <div class='header'>
        <div class='user' @click='handelUser(headerObj.userSlug)'>
            <img :src='headerObj.userImg'/>
            <div>
                <h3>{{ headerObj.userName }}</h3>
                <p v-if='headerObj.location'>
                    <i class='van-icon van-icon-location-o'></i>
                    <span>{{ headerObj.location }}</span>
                </p>
            </div>
        </div>
        <van-button class='follow' @click='handelFollow' plain hairline :type='isFollow?"info":"default"'
        size='small' :text='isFollow?"已关注":"+关注"'></van-button>
    </div>
</template>

<script>
import Vue from 'vue'
import { Button, Icon } from 'vant'
Vue.use(Button).use(Icon)

export default {
  props: ['headerObj'],
  data () {
    return {
      isFollow: false
    }
  },
  methods: {
    // 是否关注
    handelFollow () {
      this.isFollow = !this.isFollow
    },
    handelUser (slug) {
      this.$router.push(`/users/${slug}`)
    }
  }
}
</script>

<style scoped lang='scss'>
    p,h3{
        margin:0;
    }
    .header{
        display: flex;
        padding: .5rem 2rem;
        justify-content: space-between;
        .user{
            display: flex;
            justify-content: space-between;
            img{
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 50%;
            }
            div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin: 0 1rem;
                h3{
                    font: 1rem/1.5rem '';
                }
                p{
                    color:gray;
                    display: flex;
                    i{
                        align-self: center;
                    }
                    span{
                        margin-left: .3rem;
                        font-size: .75rem;
                        align-self: center;
                    }
                }
            }
        }
        .follow{
            align-self: center;
        }
        .gray{
            color: gray;
        }
    }
</style>
