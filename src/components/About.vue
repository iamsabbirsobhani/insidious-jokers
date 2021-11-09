<template>
  <div class="about-wrapper">
    <section class="about" id="ABout">
      <div class="left w-96 p-5">
        <h1 class="text-4xl font-bold text-gray-50">
          <span class="text-pink-600">The Insidious Jokers</span>
        </h1>
        <p class="text-gray-300 text-xl mt-5">
          The Insidious Jokers is a collection of 10,000 unique hand-drawn
          characters. What makes us truly unique is that
          <span class="text-pink-500"
            >this is the first collection of jokers on the market.</span
          >
          Join the the Insidious Jokers and make history with us. Get jokered
          with us.
        </p>
      </div>
      <div class="right p-5">
        <img
          class="right-img"
          id="f1"
          src="../assets/forwebsite/1.png"
          alt=""
        />
        <img
          class="right-img"
          id="f2"
          src="../assets/forwebsite/2.png"
          alt=""
        />
        <img
          class="right-img"
          id="f3"
          src="../assets/forwebsite/3.png"
          alt=""
        />
        <img
          class="right-img"
          id="f4"
          src="../assets/forwebsite/4.png"
          alt=""
        />
        <img
          class="right-img"
          id="f5"
          src="../assets/forwebsite/5.png"
          alt=""
        />
        <img
          class="right-img"
          id="f6"
          src="../assets/forwebsite/6.png"
          alt=""
        />
        <img
          class="right-img"
          id="f7"
          src="../assets/forwebsite/9.png"
          alt=""
        />
        <img
          class="right-img"
          id="f8"
          src="../assets/forwebsite/8.png"
          alt=""
        />
        <img
          class="right-img"
          id="f9"
          src="../assets/forwebsite/10.png"
          alt=""
        />
        <img
          class="right-img"
          id="f10"
          src="../assets/forwebsite/11.png"
          alt=""
        />
        <img
          class="right-img"
          id="f11"
          src="../assets/forwebsite/12.png"
          alt=""
        />
        <img
          class="right-img"
          id="f12"
          src="../assets/forwebsite/13.png"
          alt=""
        />
        <img
          class="right-img"
          id="f13"
          src="../assets/forwebsite/14.png"
          alt=""
        />
        <img
          class="right-img"
          id="f14"
          src="../assets/forwebsite/15.png"
          alt=""
        />
        <img
          class="right-img"
          id="f15"
          src="../assets/forwebsite/16.png"
          alt=""
        />
        <img
          class="right-img"
          id="f16"
          src="../assets/forwebsite/17.png"
          alt=""
        />
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

.right {
  position: relative;
  width: 520px;
  height: 520px;
  margin-right: 100px;
}

.right img {
  width: 516px;
  // opacity: 0;
  position: absolute;
  border-radius: 10px;
  top: 0;
  -webkit-animation-name: fade;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-duration: 6s;
  animation-name: fade;
  animation-iteration-count: infinite;
  animation-duration: 6s;
}

@-webkit-keyframes fade {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  33% {
    opacity: 1;
  }
  53% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

#f1 {
  background-color: lightblue;
}
#f2 {
  -webkit-animation-delay: -16s;
  background-color: yellow;
}
#f3 {
  -webkit-animation-delay: -15s;
  background-color: lightgreen;
}
#f4 {
  -webkit-animation-delay: -14s;
  background-color: lightgreen;
}
#f5 {
  -webkit-animation-delay: -13s;
  background-color: lightgreen;
}
#f6 {
  -webkit-animation-delay: -12s;
  background-color: lightgreen;
}
#f7 {
  -webkit-animation-delay: -11s;
  background-color: lightgreen;
}
#f8 {
  -webkit-animation-delay: -10s;
  background-color: lightgreen;
}
#f9 {
  -webkit-animation-delay: -9s;
  background-color: lightgreen;
}
#f10 {
  -webkit-animation-delay: -8s;
  background-color: lightgreen;
}
#f11 {
  -webkit-animation-delay: -7s;
  background-color: lightgreen;
}
#f12 {
  -webkit-animation-delay: -6s;
  background-color: lightgreen;
}
#f13 {
  -webkit-animation-delay: -5s;
  background-color: lightgreen;
}
#f14 {
  -webkit-animation-delay: -4s;
  background-color: lightgreen;
}
#f15 {
  -webkit-animation-delay: -3s;
  background-color: lightgreen;
}
#f16 {
  -webkit-animation-delay: -2s;
  background-color: lightgreen;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  33% {
    opacity: 1;
  }
  53% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
// @keyframes cf4FadeInOut {
//   0% {
//     opacity: 1;
//   }
//   17% {
//     opacity: 1;
//   }
//   25% {
//     opacity: 0;
//   }
//   92% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// }

// .right-img img:nth-of-type(1) {
//   animation-delay: 6s;
// }
// .right-img img:nth-of-type(2) {
//   animation-delay: 4s;
// }
// .right-img img:nth-of-type(3) {
//   animation-delay: 2s;
// }
// .right-img img:nth-of-type(4) {
//   animation-delay: 0;
// }
@media (max-width: 800px) {
  .about {
    flex-direction: column;
  }
}
</style>
