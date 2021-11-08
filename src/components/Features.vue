<template>
  <div class="features-wrap" id="FEatures">
    <section class="features">
      <div class="left p-5">
        <img src="../assets/fourphotos.png" alt="" />
      </div>
      <div class="right p-5 text-4xl font-bold text-gray-50">
        <h1>
          <span class="text-pink-600">
            Over 80 hand-drawn items. Your Joker will be unique.</span
          >
        </h1>
        <p class="text-gray-300 text-xl mt-5">
          The Insidious Jokers collection has over 80 various items – <span class="text-pink-600">different backgrounds, outfits, hats, accessories, face patterns, smiles, eyes,</span> and many more. Each single item was carefully drawn by our professional designers.
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
  }
}
.right {
  max-width: 620px;
}
</style>
