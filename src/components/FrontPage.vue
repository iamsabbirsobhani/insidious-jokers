<template>
  <section
    class="
      front-page
      bg-no-repeat bg-top bg-auto bg-contain
      md:bg-bottom-center
      bg-front-banner
    "
    :style="dyBanner"
  ></section>
  <ClickToTopBtnVue v-if="isTop" />
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from "@vue/runtime-core";
import ClickToTopBtnVue from "../subComponents/ClickToTopBtn.vue";
const banner = ["ij_banner1", "ij_banner3", "ij_banner2"];
let isTop = ref(true);
let dyBanner = ref(null);
let bannerSrc = ref(null);
onBeforeMount(() => {
  bannerSrc.value = new URL(
    `../assets/banner/${banner[0]}.png`,
    import.meta.url
  ).href;
  dyBanner.value = {
    backgroundImage: `url("${bannerSrc.value}")`,
    transition: `all 0.24s ease-in-out`,
  };
});
onMounted(() => {
  let bannerLength = banner.length - 1;

  if (window.screenX < 900) {
    isTop.value = false;
  } else {
    isTop.value = true;
  }

  setInterval(() => {
    if (bannerLength < 0) {
      bannerLength = banner.length - 1;
    } else {
      bannerSrc.value = new URL(
        `../assets/banner/${banner[bannerLength]}.png`,
        import.meta.url
      ).href;
      dyBanner.value = {
        backgroundImage: `url("${bannerSrc.value}")`,
        transition: `all 10s ease-in-out`,
      };
      console.log(bannerLength);
      bannerLength--;
    }
  }, 30000);
});
</script>

<style lang="scss" scoped>
.front-page {
  height: 100vh;
  // background-image: url("../assets/banner/newOne.png");
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
