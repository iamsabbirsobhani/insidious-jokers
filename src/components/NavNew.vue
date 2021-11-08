<template>
  <div class="desktop-nav" style="display: none;">
    <nav class="navbar">
      <div class="logo-section">
        <img
          src="../assets/ij_logo_negate.svg"
          alt="logo insidious jokers"
          class="logo-img"
        />
      </div>
      <section class="menu">
        <ul class="menu-lists">
          <li class="menu-list"><a href="#">First</a></li>
          <li class="menu-list"><a href="#">Second</a></li>
          <li class="menu-list"><a href="#">Third</a></li>
          <li class="menu-list"><a href="#">Fourth</a></li>
          <li class="menu-list"><a href="#">Fifth</a></li>
        </ul>
      </section>
      <!-- <section class="social-icon"></section> -->
    </nav>
  </div>
  <MobileNav />
</template>

<script setup>
// import { onMounted, ref } from "@vue/runtime-core";
import MobileNav from "../subComponents/MobileNavbar.vue";
// const windWidth = ref(null);
// const desktopNav = ref(null);
// const mobileNav = ref(null);
// const mySidepanel = ref(null);

// const openNav = () => {
//   mySidepanel.value = {
//     width: "250px",
//   };
// };

// const closeNav = () => {
//   mySidepanel.value = {
//     width: "0",
//   };
// };

// onMounted(() => {
//   windWidth.value = window.innerWidth;
//   if (windWidth.value > 900) {
//     desktopNav.value = {
//       display: "block",
//     };

//     mobileNav.value = {
//       display: "none",
//     };
//   } else if (900 > windWidth.value) {
//     desktopNav.value = {
//       display: "none",
//     };
//     mobileNav.value = {
//       display: "block",
//     };
//   }
//   console.log(windWidth.value);
// });
</script>

<style lang="scss" scoped>
.desktop-nav {
  color: #f9fafb;
}
.navbar {
  width: 100%;
  height: 4rem;
  padding: 0.6rem;
  background-color: #1f2937;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-lists {
  display: flex;
}

li {
  margin: 2px;
  padding: 2px;
}

a {
  display: block;
  text-decoration: none;
  color: #d1d5db;
  min-width: 5.25rem;
  min-height: 1.5rem;
  text-align: center;
  transition: all 0.24s;
  padding: 0.3rem;
}
a:hover {
  background: #f9fafb2d;
  color: white;
  border-radius: 7px;
}

.logo-img {
  // padding: 5px;
  margin-left: 20px;
  width: 2.5rem;
}
</style>
