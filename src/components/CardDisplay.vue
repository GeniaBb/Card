<template>
  <div class="card" :class="{ active: isActive }" @click="rotation">
    <div class="front-card">
      <img
        v-if="hasImage(frontData)"
        :src="frontData.img"
        alt="decorate-photo"
        class="decorate-photo"
      />
      <p class="card__text">{{ frontData.text }}</p>
    </div>
    <div class="back-card">
      <img
        v-if="hasImage(backData)"
        :src="backData.img"
        alt="decorate-photo"
        class="decorate-photo"
      />
      <p class="card__text">{{ backData.text }}</p>
    </div>
  </div>
  <!-- <div class="btn">
        <button class="btn__change">Изменить</button>
        <button class="btn__delete">Удалить</button>
      </div> -->
</template>

<style lang="scss">
$white-color: #ffffff;

.decorate-photo {
  width: 100%;
  height: 224px;
}

.card {
  width: 412px;
  height: 476px;
  position: relative;
  perspective: 1000px;

  &__text {
    padding: 36px;
    font-size: 24px;
    text-align: center;
  }
}
.front-card {
  width: 412px;
  height: 476px;
  background-color: $white-color;
  box-shadow: 11px 11px 26px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  position: relative;
  perspective: 1000px;
}

.back-card {
  width: 412px;
  height: 476px;
  background-color: $white-color;
  box-shadow: 11px 11px 26px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  position: relative;
  perspective: 1000px;
}
// .btn {
//   &__change {
//     background-color: $white-color;
//     width: 177px;
//     height: 47px;
//     border-radius: 25px;
//     border: none;
//     outline: none;
//   }
// }

.front-card,
.back-card {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: 0.6s;
  backface-visibility: hidden;
  background-color: $white-color;
}
.back-card {
  transform: rotateY(180deg);
}
.card.active .front-card {
  transform: rotateY(180deg);
}
.card.active .back-card {
  transform: rotateY(360deg);
}
</style>
<script>
export default {
  name: 'CardDisplay',
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    rotation() {
      this.isActive = !this.isActive
    },
    hasImage(data) {
      const imgUrl = data.img
      return imgUrl && imgUrl.startsWith('https://')
    },
  },
  props: ['frontData', 'backData'],
}
</script>