<template>
  <div class="about-wrapper">
    <section class="about" id="ABout">
      <div class="left p-5">
        <h1 class="text-4xl font-bold text-gray-50">
          <span class="text-pink-600">The Insidious Jokers</span>
        </h1>
        <p
          class="
            text-gray-300 text-xl
            mt-5
            leading-9
            tracking-wide
            subpixel-antialiased
          "
        >
          The Insidious Jokers is a collection of 10,000 unique hand-drawn
          characters. What makes us truly unique is that
          <span class="text-pink-500"
            >this is the first collection of jokers on the market.</span
          >
          Join the Insidious Jokers and make history with us. Get jokered with
          us.
        </p>
      </div>
      <div
        class="right bg-no-repeat bg-top md:bg-bottom-center bg-auto bg-contain rounded-md"
        :style="dyImg"
      >
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
const imgsrc = [
  "DanielAmegan.png",
  "Shahzain.png",
  "Matvey.png",
  "Daniil.png",
  "NikolayZhulebin.jpeg",
];
let imglength = imgsrc.length - 1;
let newimgsrc = ref(null);
let dyImg = ref(null);
onMounted(() => {
  setInterval(() => {
    if (imglength < 0) {
      imglength = imgsrc.length - 1;
    } else {
      newimgsrc.value = new URL(
        `../assets/TeamPictures/${imgsrc[imglength]}`,
        import.meta.url
      ).href;
      dyImg.value = {
        backgroundImage: `url("${newimgsrc.value}")`,
        transition: `all 500ms ease-in`,
      };
      imglength--;
    }
  }, 950);
});
</script>

<style lang="scss" scoped>
.about-wrapper {
  margin-top: 5rem;
}
.about {
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.left {
  max-width: 620px;
}

.right {
  position: relative;
  width: 520px;
  height: 520px;
  background-position: top center;
}

.right img {
  width: 516px;
  position: absolute;
  // border-radius: 10px;
  top: 0;
}

.right-img {
  width: 400px;
}

@media (max-width: 900px) {
  .about {
    flex-direction: column;
    margin: 0;
  }
  .about-wrapper {
    margin-top: 0rem;
  }

  .right {
    position: relative;
    width: 310px;
    height: 310px;
  }
  .left {
    width: 360px;
    padding: 20px !important;
    margin-bottom: 50px;
    span {
      text-align: center !important;
    }
  }
}
</style>
