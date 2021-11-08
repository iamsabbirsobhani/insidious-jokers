<template>
  <!-- mobile navbar -->
  <div class="mobile-nav">
    <nav>
      <section class="nav-button">
        <button v-if="active" @click="openNav" :style="buttonStyle"><i class="fas fa-bars"></i></button>
        <button v-else @click="closeNav" :style="buttonStyle"><i class="fas fa-times"></i></button>
      </section>
      <section class="logo-img"></section>
      <section class="social-icon"></section>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
const active = ref(true);
const buttonStyle = ref(null);

const openNav = () => {
    active.value = false;
    buttonStyle.value = {
        border: `2px solid white`,
        borderRadius: `7px`
    }
};
const closeNav = () => {
    active.value = true;
};

</script>

<style lang="scss" scoped>
.nav-button {
  button {
    width: 2.5rem;
    height: 2.4rem;
    color: #d1d5db;
  }
  button:hover {
    background: #f9fafb2d;
    color: white;
    border-radius: 7px;
  }
  button:focus {
      border: 2px solid white;
      border-radius: 7px;
  }
  button:active {
      border: 2px solid white;
      border-radius: 7px;
  }
  .fa-bars {
    font-size: 1.2rem;
    text-align: center;
  }
  .fa-bars:hover {
      color: white;
  }
}
</style>
