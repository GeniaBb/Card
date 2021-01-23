<template>
  <button class="btn-carousel">
    <svg
      width="80"
      height="80"
      viewBox="0 0 47 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45.7232 36.8784L10.1222 1.27804C9.29879 0.45398 8.19961 0 7.02759 0C5.85556 0 4.75638 0.45398 3.93298 1.27804L1.31121 3.89916C-0.394793 5.60711 -0.394793 8.38302 1.31121 10.0884L31.2063 39.9834L1.27804 69.9116C0.45463 70.7357 0 71.8342 0 73.0056C0 74.1783 0.45463 75.2768 1.27804 76.1015L3.89981 78.722C4.72386 79.546 5.82239 80 6.99442 80C8.16644 80 9.26562 79.546 10.089 78.722L45.7232 43.0891C46.5486 42.2624 47.0019 41.1587 46.9993 39.9854C47.0019 38.8075 46.5486 37.7044 45.7232 36.8784Z"
        fill="white"
      />
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="200%" height="200%">
          <feDropShadow
            dx="13"
            dy="4"
            stdDeviation="5"
            flood-color="rgba(0, 0, 0, 0.25)"
          />
        </filter>
      </defs>
    </svg>
  </button>
</template>

<style lang="scss">
.btn-carousel {
  width: 80px;
  height: 80px;
  border: none;
  outline: none;
  background-color: transparent;
}
path {
  filter: url(#shadow);
}
</style>

<script>
export default {
  name: 'BtnCarousel',
}
</script>