<template>
  <div class="cards-view">
    <cardDisplay :frontData="front" :backData="back"></cardDisplay>
    <carousel></carousel>
  </div>
</template>

<script>
import CardDisplay from '@/components/CardDisplay.vue'
import Carousel from '@/components/Carousel.vue'
export default {
  name: 'CardsView',
  components: {
    cardDisplay: CardDisplay,
    carousel: Carousel,
  },
  data: () => ({
    front: {
      img:
        'https://englex.ru/wp-content/uploads/how-to-learn-english-at-high-levels.png',
      text: 'Самая важная информация об английском языке',
    },

    back: {
      img:
        'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1101236/e1e09992d39f539b736c891a42960a39/960x540',
      text: 'Cat',
    },
  }),
}
</script>
