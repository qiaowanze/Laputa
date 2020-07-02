<template>
    <div class='share'>
        <div class='thumb'>
            <div class='left'>
                <Praise :cardata='shareObj' :commentHeight='1100'></Praise>
            </div>
            <div class='right'>
                <i @click='handelCollect' class='iconfont' :class='isCollect?"icon-icon_favorite":"icon-shoucang"'></i>
            </div>
        </div>
    </div>
</template>

<script>
import Praise from '@/components/Dianzan'

export default {
  props: ['shareObj'],
  data () {
    return {
      ispraise: false,
      isCollect: false,
      praiseNum: 0
    }
  },
  components: {
    Praise
  },
  methods: {
    // 收藏
    handelCollect () {
      this.isCollect = !this.isCollect
    }
  }
}
</script>

<style scoped lang='scss'>
        p,h3{
            margin:0;
        }
        .share{
            text-align: center;
            padding: 0 2rem;
        i{
          align-self: center;
        }
        .thumb{
            padding: 1rem 0;
            border-bottom: .1rem solid rgb(236, 236, 236);
            display: flex;
            justify-content: space-between;
        }
    }
</style>
