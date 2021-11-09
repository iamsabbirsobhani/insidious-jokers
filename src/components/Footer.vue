<template>
  <footer>
    <div class="footer-cover">
      <img
        src="../assets/ij_logo_negate.svg"
        class="w-32 object my-3"
        alt="Insidious Jokers"
      />
      <div class="social-icon my-3">
        <div
        style="padding: 16px;"
          class="
            w-12
            h-12
            rounded-full
            icon-cover
            bg-gray-600
            hover:text-white
            transition
            duration-300
            hover:bg-pink-700
            cursor-pointer
          "
        >
          <i
            class="
              fab
              fa-instagram
              text-gray
              hover:text-white
              text-xl
              font-bold
              cursor-pointer
            "
          ></i>
        </div>
        <div
          class="
            w-12
            h-12
            p-3
            rounded-full
            icon-cover
            ml-2.5
             bg-gray-600
            transition
            duration-300
            hover:bg-pink-700
            cursor-pointer
            hover:text-white
          "
        >
          <i
            class="
              fab
              fa-twitter
              text-gray
              hover:text-white
              text-xl
              font-bold
              cursor-pointer
            "
          ></i>
        </div>

        <div
        style="padding: 0.8rem;"
          class="
            w-12
            h-12

            rounded-full
            icon-cover
            ml-2.5
            transition
            duration-300
             bg-gray-600
            hover:bg-violet-800
            cursor-pointer
            hover:bg-pink-700
            hover:text-white
          "
        >
          <i
            class="
              fab
              fa-discord
              text-gray
              hover:text-white
              text-xl
              font-bold
              cursor-pointer
            "
          ></i>
        </div>

        <div
        style="padding: 0.8rem;"
          class="
            w-12
            h-12

            rounded-full
            icon-cover
            ml-2.5
            transition
            duration-300
            bg-gray-600
            hover:bg-violet-800
            cursor-pointer
            hover:bg-pink-700
            hover:text-white
          "
        >
         <img src="../assets/Logomark-Transparent.svg" alt="">
        </div>
      </div>
      <!-- <p class="term text-gray-50">Term of Service</p> -->
      <p class="copyright text-pink-700 font-bold">
        Copyright © 2021 Insidious Jokers. All Rights Reserved​
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../scss/variable.scss";

footer {
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  background-color: #33343b;
  height: 28rem;
}

p {
    margin-top: 10px !important;
    font-size: 18px;
    text-align: center;
}

.footer-cover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
    color: gray;
    margin-top: 10px;
    text-align: center;
}
</style>
