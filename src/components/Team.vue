<template>
  <div class="team-wrap">
    <section class="our-team" id="Team">
      <div class="team-typo">
        <h1 class="text-white text-4xl">Meet Our Team</h1>
        <p class="text-white text-2xl">
          Each member of our team is truly passionate and dedicated to the Insidious Jokers which will ensure success
        </p>
      </div>
      <div class="team-dp">
        <div class="dp">
          <img
            class="team-img w-72"
            src="../assets/TeamPictures/Daniil.png"
            alt="Daniel Amegan"
          />
          <h1>Daniil Mikhailov</h1>
          <p>Founder</p>

          <div class="contact-team flex">
             <div
             style="margin-left: 0;"
          class="
            icon-cover
            ml-2.5

            w-12
            h-12
            p-3
            transition
            duration-300
            hover:bg-pink-800
            cursor-pointer
          "
        >
          <i class="fab fa-instagram text-white text-xl font-bold cursor-pointer"></i>
        </div>
             <div
             style="margin-left: 0;"
          class="
            icon-cover
            ml-2.5

            w-12
            h-12
            p-3
            transition
            duration-300
            hover:bg-pink-800
            cursor-pointer
          "
        >
          <i class="fas fa-envelope-square text-white text-xl font-bold cursor-pointer"></i>
        </div>
        </div>
        </div>
        <div class="dp">
          <img
            class="team-img w-72"
            src="../assets/TeamPictures/Matvey.png"
            alt="Matvey Kuzmenko"
          />
          <h1>Matvey Kuzmenko</h1>
          <p>Co-founder</p>


                    <div class="contact-team flex">
             <div
             style="margin-left: 0;"
          class="
            icon-cover
            ml-2.5

            w-12
            h-12
            p-3
            transition
            duration-300
            hover:bg-pink-800
            cursor-pointer
          "
        >
          <i class="fab fa-instagram text-white text-xl font-bold cursor-pointer"></i>
        </div>
             <div
             style="margin-left: 0;"
          class="
            icon-cover
            ml-2.5

            w-12
            h-12
            p-3
            transition
            duration-300
            hover:bg-pink-800
            cursor-pointer
          "
        >
          <i class="fas fa-envelope-square text-white text-xl font-bold cursor-pointer"></i>
        </div>
        </div>
        </div>
        <div class="dp">
          <img
            class="team-img w-72"
            src="../assets/TeamPictures/Shahzain.png"
            alt="Shahzain Gill"
          />
          <h1>Shahzain Gill</h1>
          <p>MD & Content Creator</p>
                    <div class="contact-team flex">
             <div
             style="margin-left: 0;"
          class="
            icon-cover
            ml-2.5

            w-12
            h-12
            p-3
            transition
            duration-300
            hover:bg-pink-800
            cursor-pointer
          "
        >
          <i class="fab fa-instagram text-white text-xl font-bold cursor-pointer"></i>
        </div>
             <div
             style="margin-left: 0;"
          class="
            icon-cover
            ml-2.5

            w-12
            h-12
            p-3
            transition
            duration-300
            hover:bg-pink-800
            cursor-pointer
          "
        >
          <i class="fas fa-envelope-square text-white text-xl font-bold cursor-pointer"></i>
        </div>
        </div>
        </div>
        <div class="dp">
          <img
            class="team-img w-72"
            src="../assets/TeamPictures/DanielAmegan.png"
            alt="Daniel Amegan"
          />
          <h1>Daniel Amegan</h1>
          <p>Head Designer</p>

                    <div class="contact-team flex">
             <div
             style="margin-left: 0;"
          class="
            icon-cover
            ml-2.5

            w-12
            h-12
            p-3
            transition
            duration-300
            hover:bg-pink-800
            cursor-pointer
          "
        >
          <i class="fab fa-instagram text-white text-xl font-bold cursor-pointer"></i>
        </div>
             <div
             style="margin-left: 0;"
          class="
            icon-cover
            ml-2.5

            w-12
            h-12
            p-3
            transition
            duration-300
            hover:bg-pink-800
            cursor-pointer
          "
        >
          <i class="fas fa-envelope-square text-white text-xl font-bold cursor-pointer"></i>
        </div>
        </div>
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
    margin-top: 0.1rem;
    color: white;
    font-size: 1.8rem;
  }
  h1::after {
    content: "";
    display: block;
    width: 150px;
    height: 10px;
    margin-top: 1rem;
    margin-bottom: 0.8rem;
    background-color: #ec4899;
  }

  p {
    color: white;
    font-size: 1.1rem;
  }

  .dp {
    margin-left: 1.2rem;
    img {
      border-radius: 10px;
      transition: all 0.24s;
      box-shadow: 1px 2px 10px 5px rgba(161, 161, 161, 0.158);
    }
    img:hover {
      transform: rotate(3deg);
    }
  }
}

.team-typo {
  text-align: center;
  max-width: 75rem;

  h1 {
    margin-bottom: 3.8rem;
    font-weight: bold;
    color: #ec4899;
  }

  p {
    margin-bottom: 3.5rem;
  }
}
</style>
