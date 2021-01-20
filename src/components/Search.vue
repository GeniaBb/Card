<template>
  <div class="search">
    <input
      type="text"
      class="search__input"
      v-model="message"
      @keydown.enter="trigger"
    />
    <button class="search__btn" @click="trigger"></button>
  </div>
</template>

<style lang="scss">
$white-color: #ffffff;

.search {
  display: flex;
  position: relative;
  &__input {
    width: 100%;
    height: 46px;
    background-color: $white-color;
    border-radius: 5px;
    outline: none;
    border: none;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.25);
  }

  &__btn {
    width: 32px;
    height: 32px;
    background-image: url('../assets/search.svg');
    background-color: transparent;
    outline: none;
    border: none;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
}
</style>

<script>
export default {
  name: 'Search',
  data: () => ({
    message: '',
  }),
  methods: {
    trigger() {
      this.$emit('search', this.message)
    },
  },
}
</script>