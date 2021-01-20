<template>
  <div class="main-page">
    <search @search="onSearch"></search>
  </div>
</template>

<style lang="scss">
.main-page {
  padding: 0 15%;
}
</style>
<script>
import Search from '@/components/Search.vue'

export default {
  name: 'MainPage',
  components: {
    search: Search,
  },
  methods: {
    onSearch(event) {
      console.log(event)
    },
  },
}
</script>
