<template>
  <div class="features-wrap" id="FEatures">
    <section class="features">
      <div class="left p-5">
        <img src="../assets/fourphotos.png" alt="" />
      </div>
      <div class="right p-5 text-4xl font-bold text-gray-50">
        <h1>
          <span class="text-pink-600">
            Over 80 hand-drawn items. Your Joker will be one of a kind</span
          >
        </h1>
        <p
          class="
            text-gray-300
            mt-5
            leading-9
            tracking-wide
            subpixel-antialiased
          "
          style="font-weight: normal; font-size: 20px"
        >
          The Insidious Jokers collection has over 80 accessories and 9
          properties which determine the rarity of your joker. Properties
          include<span class="text-pink-600">
            skin tone, backgrounds, outfits, hats, accessories, face tattoos,
            smiles, noses, and eyes.</span
          >
          Each piece was precisely drawn by our talented team of professional
          and highly qualified designers.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.features-wrap {
  margin-top: 100px;
}
.features {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.left {
  img {
    width: 516px;
    border-radius: 10px;
    transition: all 0.24s;
    box-shadow: 1px 2px 10px 5px rgba(161, 161, 161, 0.158);
  }

  img:hover {
    transform: rotate(-1deg);
  }
}
.right {
  max-width: 620px;
}

@media (max-width: 900px) {
  // .right {
  //   max-width: 620px;
  // }
  .features-wrap {
    margin-top: 20px;
  }
  .features {
    flex-direction: column;
  }
  .features-wrap {
    max-width: 400px;
  }
  .right {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 18px;
    }
  }
}
</style>
