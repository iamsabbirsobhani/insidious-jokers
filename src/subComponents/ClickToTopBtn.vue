<template>
  <transition name="fade">
    <a
      id="scroll-top"
      :style="totopStyle"
      v-if="isFade"
      href="#"
      class="
        sticky
        float-right
        text-white text-2xl
        p-2
        bg-pink-700 bg-opacity-50
        hover:bg-opacity-100
        transition
      "
    >
      <i class="fas fa-chevron-up"></i>
    </a>
  </transition>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const totopStyle = ref({
  display: "none",
  zIndex: 30,
});
const isFade = ref(false);
const scrl = ref(null);
let sss = () => {
  scrl.value = window.scrollY;
  if (window.scrollY > 900) {
    totopStyle.value = {
      display: "block",
      zIndex: 500,
    };
    isFade.value = true;
  } else {
    totopStyle.value = {
      display: "none",
      zIndex: 500,
    };
    isFade.value = false;
  }
};
onMounted(() => {
  window.addEventListener("scroll", sss);
});
</script>

<style lang="scss" scoped>
#scroll-top {
  top: 85vh;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  z-index: 500;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
