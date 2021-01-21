<template>
  <div class="stack">
    <div class="stack__card"></div>
    <div class="stack__card"></div>
    <div class="stack__card">
      <span class="card-text">{{ cardsetname }}</span>
    </div>
  </div>
</template>

<style lang="scss">
$white-color: #ffffff;
.stack {
  position: relative;
  width: 152px;
  height: 176px;
  &__card {
    width: 146px;
    height: 170px;
    border-radius: 5px;
    background-color: $white-color;
    box-shadow: 4px 4px 11px rgba(0, 0, 0, 0.25);
    position: absolute;

    &:nth-child(1) {
      top: 6px;
      left: 6px;
    }

    &:nth-child(2) {
      top: 3px;
      left: 3px;
    }
    &:nth-child(3) {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-text {
      font-size: 18px;
    }
  }
}
</style>

<script>
export default {
  name: 'StackOfCards',
  props: {
    cardsetname: {
      default: 'Без имени',
    },
  },
}
</script>