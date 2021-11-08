<template>
  <div class="about-wrapper">
    <section class="about" id="ABout">
      <div class="left w-96 p-5">
        <h1 class="text-4xl font-bold text-gray-50">
          <span class="text-pink-600"
            >Lorem ipsum dolor sit amet consectetur</span
          >
          Consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sit, sed.
        </h1>
        <p class="text-gray-300 text-xl mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          voluptates odio blanditiis fuga, eligendi ullam, modi excepturi
          aliquam suscipit nisi quo sequi
          <span class="text-pink-500"
            >Lorem ipsum dolor sit amet consectetur</span
          >
          sed molestias iusto neque vero repudiandae doloribus pariatur
          laboriosam. Voluptatum voluptate nesciunt, rerum quam laborum unde vel
          suscipit voluptates itaque similique dolore est inventore officiis
          odio autem cupiditate.
        </p>
      </div>
      <div class="right p-5">
        <img class="right-img" src="../assets/battle-apes-gif-.gif" alt="" />
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
