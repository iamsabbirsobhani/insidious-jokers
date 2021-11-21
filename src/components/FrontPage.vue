<template>
  <section
    class="
      front-page
      bg-no-repeat bg-top bg-auto bg-contain
      md:bg-bottom-center
      bg-front-banner
    "
  >
    <!-- <img src="" alt=""> -->
  </section>
  <ClickToTopBtnVue />
</template>

<script setup>
import ClickToTopBtnVue from "../subComponents/ClickToTopBtn.vue";
</script>

<style lang="scss" scoped>
.front-page {
  height: 100vh;
  background-image: url("../assets/banner/newOne.png");
  background-position: top center;
}

@media (max-width: 900px) {
  .front-page {
    background: none;
    margin: 0px;
    height: 0px;
  }
}
</style>
