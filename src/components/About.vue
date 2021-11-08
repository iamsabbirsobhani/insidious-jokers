<template>
  <div class="about-wrapper">
    <section class="about" id="ABout">
      <div class="left w-96 p-5">
        <h1 class="text-4xl font-bold text-gray-50">
          <span class="text-pink-600">The Insidious Jokers</span>
        </h1>
        <p class="text-gray-300 text-xl mt-5">
          The Insidious Jokers is a collection of 10,000 unique hand-drawn
          jokers.<span class="text-pink-500">There is no other collection of jokers or clowns on the
          market.</span>  We are the first to launch the product in this niche. The
          Insidious Jokers will make history.
          <br>
          Join our ambitious community by connecting to our discord server now.
        </p>
      </div>
      <div class="right p-5">
        <img class="right-img" src="../assets/forwebsite/6.png" alt="" />
      </div>
    </section>
  </div>
</template>

<script>
export default {};
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
  width: 620px;
}
.right-img {
  width: 516px;
}

@media (max-width: 800px) {
  .about {
    flex-direction: column;
  }
}
</style>
