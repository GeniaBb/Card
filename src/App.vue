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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
$main-font-color: #443434;

* {
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: $main-font-color;
}
</style>

<script>
export default {}
</script>
