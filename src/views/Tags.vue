<template>
  <div>
    <tags :datalist="taglist" :carlist="carlist" :showNav='showNav' @event='handleClick'></tags>
  </div>
</template>

<script>
import tags from '@/components/TagsModule'
export default {
  data () {
    return {
      taglist: [],
      carlist: [],
      ulHeight: 4000,
      flag: false,
      inow: 0,
      showNav: false
    }
  },
  components: {
    tags
  },
  methods: {
    scrollGet () {
      if (this.carlist) {
        window.onscroll = () => {
          var num = 0
          const menu = document.querySelector('.menu')
          if (document.documentElement.scrollTop > (menu.offsetTop - 10)) {
            this.showNav = true
          } else {
            this.showNav = false
          }
          if (document.documentElement.scrollTop > this.ulHeight) {
            num = parseInt(document.documentElement.scrollTop / this.ulHeight)
            if (num > this.inow) {
              this.flag = true
            }
            if (this.flag) {
              this.flag = false
              this.inow = num
              this.$axios({
                url: `/api/v2/tags/f82f77f3-933e-4e3a-b3a0-0ddd11ab6969/works?lang=zh-Hans&platform=web&device=mobile&sort=hot&limit=15&offset=${16 * num}`
              }).then(res => {
                if (this.carlist) {
                  this.carlist = [...this.carlist, ...res.data.data.items]
                }
              })
            }
          }
        }
      }
    },
    handleClick (data) {
      console.log(data)
      this.$axios({
        url: `/api/v2/tags//${this.$route.params.id}/${data}?lang=zh-Hans&platform=web&device=mobile&sort=hot&limit=15&offset=0`
      }).then(res => {
        this.carlist = res.data.data.items
      })
    }
  },
  mounted () {
    this.$axios({
      url: `/api/v2/tags/${this.$route.params.id}?lang=zh-Hans&platform=web&device=mobile`
    }).then(res => {
      this.taglist = res.data.data.item
    })
    this.$axios({
      url: `/api/v2/tags//${this.$route.params.id}/works?lang=zh-Hans&platform=web&device=mobile&sort=hot&limit=15&offset=0`
    }).then(res => {
      this.carlist = res.data.data.items
    })
    this.scrollGet()
  },
  destroyed () {
    window.onscroll = null
  }
}
</script>
