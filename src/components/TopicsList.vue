<template>
  <div>
    <div class="list">
      <ul>
        <li v-for="(data,index) in myData" :key="index">
          <!-- <img :src="data.image.small" alt /> -->
          <!-- <p>{{data.title}}</p> -->
          <carbar v-for="data in myData" :key="data.slug" :cardata="data" :noTags="false"></carbar>
          <router-view></router-view>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import carbar from '@/components/CardBar'
export default {
  components: {
    carbar
  },
  props: ['myData']
}
</script>

<style lang="scss" scoped>
// img {
//   width: 100%;
//   height: 12.5rem;
// }

// ul {
//   li {
//     margin-bottom: 20px;
//     position: relative;
//     .te {
//       position: absolute;
//       top: 5px;
//       left: 5px;
//       height: 1rem;
//       width: 1rem;
//     }
//     .te2 {
//       position: absolute;
//       top: 5px;
//       left: 25px;
//       height: 1rem;
//       width: 1rem;
//     }
//   }
// }
// .list {
//   p {
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     overflow: hidden;
//     font-size: 14px;
//     font-weight: 500;
//     line-height: 16px;
//     color: #333;
//     margin-left: 15px;
//   }
//   div {
//     margin-left: 15px;
//     span {
//       color: #838385;
//       display: inline-block;
//       line-height: 16px;
//       font-size: 14px;
//       margin: 0 10px;
//     }
//     .lz {
//       vertical-align: middle;
//       color: #838385;
//     }
//   }
// }
</style>
