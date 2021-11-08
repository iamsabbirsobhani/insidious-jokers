<template>
  <div class="features-wrap" id="FEatures">
    <section class="features">
      <div class="left p-5">
        <img src="../assets/fourphotos.png" alt="" />
      </div>
      <div class="right p-5 text-4xl font-bold text-gray-50">
        <h1>
          Lorem ipsum dolor sit amet consectetur
          <span class="text-pink-600">
            adipisicing elit. Ipsam voluptatem ipsum fuga.</span
          >
        </h1>
        <p class="text-gray-300 text-xl mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          delectus rem, deleniti odio in repellendus aliquam molestias
          voluptatibus nisi illum dolorem laboriosam molestiae perspiciatis
          nobis explicabo possimus soluta alias fugiat quod ducimus ut.
          Aspernatur ad nam aperiam eum cum! Excepturi modi optio nemo autem
          ratione provident, cum porro distinctio hic.
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
