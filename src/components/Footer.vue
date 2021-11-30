<template>
  <footer>
    <div class="footer-cover">
      <img
        src="../assets/ij_logo_negate.svg"
        class="w-32 object my-3"
        alt="Insidious Jokers"
      />
      <div class="social-icon my-3">
        <a
          style="padding: 0.8rem"
          class="
            w-12
            h-12
            rounded-full
            icon-cover
            ml-2.5
            transition
            duration-300
            bg-pink-700
            cursor-pointer
            hover:bg-pink-800 hover:text-white
          "
          href="https://opensea.io/collection/insidious-jokers-collection"
          target="_blank"
        >
          <img src="../assets/Logomark-Transparent.svg" alt="" />
        </a>

        <a
          style="padding: 0.8rem"
          class="
            w-12
            h-12
            rounded-full
            icon-cover
            ml-2.5
            transition
            duration-300
            bg-pink-700
            cursor-pointer
            hover:bg-pink-800 hover:text-white
          "
          href="https://discord.gg/fYbdMA5fxX"
          target="_blank"
        >
          <i
            class="
              fab
              fa-discord
              text-gray text-white text-xl
              font-bold
              cursor-pointer
            "
          ></i>
        </a>
        <a
          style="padding: 15px; margin-left: 10px;"
          class="
            w-12
            h-12
            rounded-full
            icon-cover
            bg-pink-700
            hover:text-white
            transition
            duration-300
            hover:bg-pink-800
            cursor-pointer
          "
          href="https://www.instagram.com/insidiousjokers/"
          target="_blank"
        >
          <i
            class="
              fab
              fa-instagram
              text-gray text-white text-xl
              font-bold
              cursor-pointer
            "
          ></i>
        </a>
        <a
          class="
            w-12
            h-12
            p-3
            rounded-full
            icon-cover
            ml-2.5
            bg-pink-700
            transition
            duration-300
            hover:bg-pink-800
            cursor-pointer
            hover:text-white
          "
          href="https://twitter.com/IJ_NFT"
          target="_blank"
        >
          <i
            class="
              fab
              fa-twitter
              text-gray text-white text-xl
              font-bold
              cursor-pointer
            "
          ></i>
        </a>
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
  background-color: #111827;
  height: 28rem;
  box-shadow: 1px 1px 10px 1px #f3f4f644;
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
