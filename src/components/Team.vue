<template>
  <div class="team-wrap" id="#TEam">
    <section class="our-team">
      <div class="team-typo">
        <h1 class="text-white text-4xl">OUR TEAM</h1>
        <p class="text-white text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae qui
          voluptatum maiores quia voluptatem neque non? Quis qui veniam optio,
          commodi esse earum eos hic!
        </p>
      </div>
      <div class="team-dp">
        <div class="dp">
          <img
            class="team-img w-72"
            src="../assets/forwebsite/1.png"
            alt="chick"
          />
          <h1>Chick</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="dp">
          <img
            class="team-img w-72"
            src="../assets/forwebsite/2.png"
            alt="enemy"
          />
          <h1>Enemy</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="dp">
          <img
            class="team-img w-72"
            src="../assets/forwebsite/3.png"
            alt="penguin"
          />
          <h1>Penguin</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="dp">
          <img
            class="team-img w-72"
            src="../assets/forwebsite/4.png"
            alt="raphael"
          />
          <h1>Raphael</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.team-wrap {
    margin-top: 6.5rem;
    margin-bottom: 6.5rem;
}

.our-team {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}

.team-dp {
  display: flex;
  h1 {
      margin-top: .1rem;
      color: white;
      font-size: 2rem;
  }
  h1::after{
      content: "";
      display: block;
      width: 150px;
      height: 10px;
      margin-top: .1rem;
      margin-bottom: .8rem;
      background-color: #EC4899;
    }

    p {
        color: white;
        font-size: 1.1rem;
    }

    .dp {
        margin-left: 1.2rem;
    }
}

.team-typo {
  text-align: center;
  max-width: 75rem;

  h1 {
      margin-bottom: 3.8rem;
      font-weight: bold;
      color: #EC4899;
  }

  p {
      margin-bottom: 3.5rem;
  }
}
</style>
