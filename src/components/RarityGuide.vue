<template>
  <h1 id="Rarity" class="text-center text-white text-4xl font-bold my-10">
    RARITY OF JOKERS
  </h1>
  <section class="rarity-guide">
    <div class="left">
      <p
        class="
          text-gray-300 text-xl
          mt-5
          leading-9
          tracking-wide
          subpixel-antialiased
        "
      >
        The rarity of Insidious Jokers is determined by the properties they
        have. There are a total of 11 properties that include
        <span class="text-pink-500">
          backgrounds, skin tones, outfits, smiles, noses, eyes, face tattoos,
          hats, glasses, earrings, and chains.</span
        >
        The more attributes your Joker has, the rarer your Joker is. Moreover,
        the rare ones have more exclusive attributes. There are also 30 super
        exclusive Jokers that are totally different from all the others.
      </p>
    </div>
    <div
      class="
        right
        bg-no-repeat bg-top
        md:bg-bottom-center
        bg-auto bg-contain
        rounded-md
      "
      :style="dyImg"
    ></div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
const imgsrc = [3, 6, 23, 196];
let imglength = imgsrc.length - 1;
let newimgsrc = ref(null);
let dyImg = ref(null);
onMounted(() => {
  setInterval(() => {
    if (imglength < 0) {
      imglength = imgsrc.length - 1;
    } else {
      newimgsrc.value = new URL(
        `../assets/RaritySection/${imgsrc[imglength]}.png`,
        import.meta.url
      ).href;
      dyImg.value = {
        backgroundImage: `url("${newimgsrc.value}")`,
        transition: `all 500ms ease-in`,
      };
      imglength--;
    }
  }, 1000);
});
</script>

<style lang="scss" scoped>
#Rarity {
  margin-top: 8rem;
}
.rarity-guide {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1350px;
  margin: auto;
  margin-bottom: 5rem;
}

.left {
  max-width: 520px;
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
  #Rarity {
    margin-top: 8rem;
  }
  .rarity-guide {
    flex-direction: column;
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
