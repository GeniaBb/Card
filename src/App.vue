<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Главная страница</router-link> |
      <router-link to="/about">Просмотр карточек</router-link> |
      <router-link to="/forward">Создание/редактирование карточки</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
</style>

<script>
export default {}
</script>
