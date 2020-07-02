<template>
  <div>
      <photo :datalist='datalist' :pages='pages'></photo>
  </div>
</template>
<script>
import photo from '@/components/Photographers'
export default {
  components: {
    photo
  },
  props: ['datalist', 'pages']
}
</script>
