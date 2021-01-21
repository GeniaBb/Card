<template>
  <div class="main-page">
    <search @search="onSearch"></search>
    <div class="wrapper">
      <stack cardsetname="JaJaJa"></stack>
      <stack></stack>
      <stack></stack>
      <stack></stack>
      <stack></stack>
      <stack></stack>
    </div>
  </div>
</template>

<style lang="scss">
.main-page {
  padding: 0 15%;
}

.wrapper {
  display: grid;
  grid-template-columns: 152px 152px 152px;
  justify-content: space-between;
  grid-row-gap: 34px;
}
</style>
<script>
import Search from '@/components/Search.vue'
import StackOfCards from '@/components/StackOfCards.vue'

export default {
  name: 'MainPage',
  components: {
    search: Search,
    stack: StackOfCards,
  },
  methods: {
    onSearch(event) {
      console.log(event)
    },
  },
}
</script>
