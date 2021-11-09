<script setup>
import { onMounted, ref } from "@vue/runtime-core";

const windWidth = ref(null);
const desktopNav = ref(null);
const mobileNav = ref(null);
const mySidepanel = ref(null);

const openNav = () => {
  mySidepanel.value = {
    width: "250px",
  };
};

const closeNav = () => {
  mySidepanel.value = {
    width: "0",
  };
};

onMounted(() => {
  windWidth.value = window.innerWidth;
  if (windWidth.value > 900) {
    desktopNav.value = {
      display: "block",
    };

    mobileNav.value = {
      display: "none",
    };
  } else if (900 > windWidth.value) {
    desktopNav.value = {
      display: "none",
    };
    mobileNav.value = {
      display: "block",
    };
  }
  console.log(windWidth.value);
});
</script>

<template>
  <div class="desktop-nav" :style="desktopNav">
    <nav
      class="
        flex
        nav-desktop
        flex-row
        justify-around
        items-center
        h-36
        bg-yellow
      "
    >
      <section class="first">
        <img src="../assets/ij_logo_negate.svg" class="w-32" alt="" />
      </section>
      <section class="second">
        <ul class="flex flex-row">
          <li><a class="nm-1" href="#ABout">ABOUT</a></li>
          <li><a class="nm-2" href="#FEatures">FEATURES</a></li>
          <li><a class="nm-3" href="#ICRoadmap">ROADMAP</a></li>
          <li><a class="nm-4" href="#Team">TEAM</a></li>
          <li><a class="nm-5" href="#FAQ">FAQ</a></li>
          <!-- <li><a class="nm-6" href="#contact">CONTACT</a></li> -->
        </ul>
      </section>
      <section class="third flex flex-row">
        <a
          class="
            icon-cover
            ml-8
            p-3
            transition
            duration-300
            hover:bg-pink-800
            cursor-pointer
          "
          href="https://www.instagram.com/insidiousjokers/"
          target="_blank"
        >
          <i
            class="fab fa-instagram text-white text-xl font-bold cursor-pointer"
          ></i>
        </a>
        <a
          class="
            icon-cover
            ml-2.5
            p-3
            transition
            duration-300
            hover:bg-pink-800
            cursor-pointer
          "
          href="https://twitter.com/InsidiousJokers"
          target="_blank"
        >
          <i
            class="fab fa-twitter text-white text-xl font-bold cursor-pointer"
          ></i>
        </a>
        <a
          class="
            icon-cover
            ml-2.5
            transition
            duration-300
            hover:bg-pink-800
            cursor-pointer
          "
          href="https://opensea.io/collection/insidious-jokers-collection"
          target="_blank"
        >
          <img src="../assets/Logomark-Transparent.svg" class="" alt="" />
        </a>
      </section>
      <section class="last">
        <form class="mt-3">
          <button
            class="
              bg-white
              transition
              duration-300
              mr-3
              mb-3
              text-sm
              font-bold
              rounded-lg
              hover:bg-pink-700 hover:text-white
              w-52
              h-10
              mr-11
              join
            "
            type="submit"
            formaction="https://discord.gg/fYbdMA5fxX"
          >
            JOIN OUR DISCORD
          </button>
        </form>
      </section>
    </nav>
  </div>

  <div class="mobile-nav" :style="mobileNav">
    <div class="nav-mobile-cover flex flex-row justify-between items-center">
      <img
        src="../assets/ij_logo_negate.svg"
        class="w-16 m-2.5"
        alt="Insidious Jokers"
      />
      <a
        class="
          icon-cover
          ml-8
          p-3
          transition
          duration-300
          hover:bg-pink-800
          cursor-pointer
        "
        href="https://www.instagram.com/insidiousjokers/"
        target="_blank"
      >
        <i
          class="fab fa-instagram text-white text-xl font-bold cursor-pointer"
        ></i>
      </a>
      <a
      style="margin-left:2px;"
        class="
          icon-cover
          p-3
          transition
          duration-300
          hover:bg-pink-800
          cursor-pointer
        "
        href="https://twitter.com/InsidiousJokers"
        target="_blank"
      >
        <i
          class="fab fa-twitter text-white text-xl font-bold cursor-pointer"
        ></i>
      </a>
      <a
      style="margin-left: 1px;"
        class="
          icon-cover
          transition
          duration-300
          hover:bg-pink-800
          cursor-pointer
        "
                  href="https://opensea.io/collection/insidious-jokers-collection"
          target="_blank"
      >
        <img src="../assets/Logomark-Transparent.svg" class="" alt="" />
      </a>

      <button
        @click="openNav"
        class="
          bg-gray-50
          rounded-lg
          hover:bg-pink-700 hover:text-white
          w-12
          h-10
          ml-6
          mr-4
        "
      >
        <!-- m-3 -->
        <i class="fas fa-bars hover:text-white text-black text-3xl"></i>
      </button>
    </div>
  </div>
  <nav class="nav-mobile sidepanel" id="mySidepanel" :style="mySidepanel">
    <button
      @click="closeNav"
      class="
        bg-gray-50
        ml-48
        rounded-lg
        hover:bg-pink-700 hover:text-white
        w-10
      "
    >
      <i class="fas fa-times hover:text-white text-black text-3xl"></i>
    </button>
    <ul class="flex flex-col">
      <li><a href="#ABout">ABOUT</a></li>
      <li><a href="#FEatures">FEATURES</a></li>
      <li><a href="#ICRoadmap">ROADMAP</a></li>
      <li><a href="#Team">TEAM</a></li>
      <li><a href="#FAQ">FAQ</a></li>
      <!-- <li><a href="#contact">CONTACT</a></li> -->
    </ul>
    <form>
    <button
      class="
        bg-white
        transition
        duration-300
        mr-3
        mb-3
        text-sm
        font-bold
        rounded-lg
        hover:bg-pink-700 hover:text-white
        w-52
        h-10
        mr-11
        join
        ml-7
        mt-5
      "
      formaction="https://discord.gg/fYbdMA5fxX"
    >
      JOIN OUR DISCORD
    </button>
    </form>
  </nav>
</template>

<style lang="scss" scoped>
@import "../../scss/variable.scss";
a {
  color: white;
  font-weight: bold;
  font-family: $primary;
  margin-left: 40px;
  transition: all 0.24s;
}
a:hover {
  color: $secondary-clr;
}

.desktop-nav {
  z-index: 200 !important;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: #1f2128;
  box-shadow: 0px 2px 10px 1px rgba(128, 128, 128, 0.267);
}

.icon-cover {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: $secondary-clr;
  padding: 15px;
}

.mobile-nav {
  z-index: 200 !important;
  height: 95px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: #1f2128;
  box-shadow: 0px 2px 10px 1px rgba(128, 128, 128, 0.267);
}
// .nav-mobile {
//   height: 100%;
//   position: absolute;

//   justify-content: flex-end;
//   background-color: wheat;
// }

.sidepanel {
  width: 0;
  position: fixed;
  z-index: 500 !important;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidepanel a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidepanel a:hover {
  color: #f1f1f1;
}

.sidepanel .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #444;
}

.join {
  color: black;
}
.join:hover {
  background-color: #db2777 !important;
  color: white !important;
}

.nm-1::after {
  content: "";
  display: block;
  position: absolute;
  width: 0px;
  margin-left: 40px;
  height: 4px;
  background-color: #db2777;
  transition: all 0.24s;
}

.nm-1:hover::after {
  content: "";
  display: block;
  position: absolute;
  width: 50px;
  margin-left: 40px;
  height: 4px;
  background-color: #db2777;
  transition: all 0.24s;
}

.nm-2::after {
  content: "";
  display: block;
  position: absolute;
  width: 0px;
  margin-left: 40px;
  height: 4px;
  background-color: #db2777;
  transition: all 0.24s;
}
.nm-2:hover::after {
  content: "";
  display: block;
  position: absolute;
  width: 75px;
  margin-left: 40px;
  height: 4px;
  background-color: #db2777;
  transition: all 0.24s;
}
.nm-3::after {
  content: "";
  display: block;
  position: absolute;
  width: 0px;
  margin-left: 40px;
  height: 4px;
  background-color: #db2777;
  transition: all 0.24s;
}
.nm-3:hover::after {
  content: "";
  display: block;
  position: absolute;
  width: 75px;
  margin-left: 40px;
  height: 4px;
  background-color: #db2777;
  transition: all 0.24s;
}
.nm-4::after {
  content: "";
  display: block;
  position: absolute;
  width: 0px;
  margin-left: 40px;
  height: 4px;
  background-color: #db2777;
  transition: all 0.24s;
}
.nm-4:hover::after {
  content: "";
  display: block;
  position: absolute;
  width: 45px;
  margin-left: 40px;
  height: 4px;
  background-color: #db2777;
  transition: all 0.24s;
}
.nm-5::after {
  content: "";
  display: block;
  position: absolute;
  width: 0px;
  margin-left: 40px;
  height: 4px;
  background-color: #db2777;
  transition: all 0.24s;
}
.nm-5:hover::after {
  content: "";
  display: block;
  position: absolute;
  width: 28px;
  margin-left: 40px;
  height: 4px;
  background-color: #db2777;
  transition: all 0.24s;
}
.nm-6::after {
  content: "";
  display: block;
  position: absolute;
  width: 0px;
  margin-left: 40px;
  height: 4px;
  background-color: #db2777;
  transition: all 0.24s;
}
.nm-6:hover::after {
  content: "";
  display: block;
  position: absolute;
  width: 70px;
  margin-left: 40px;
  height: 4px;
  background-color: #db2777;
}
</style>
