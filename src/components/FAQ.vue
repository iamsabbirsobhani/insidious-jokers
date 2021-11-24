<template>
    <h1 id="FAQ" class="text-center text-white text-4xl font-bold my-10">FAQ</h1>
    <div class="faq">
      <div v-for="faqItem in faqItems" :key="faqItem.id" class="faq-body">
        <div
          @click="toggle(faqItem.id)"
          class="faq-title flex justify-between bg-pink-700 hover:bg-pink-800"
        >
          <h1>{{ faqItem.title }}</h1>
          <div v-if="faqItem.id !== id">
            <i class="fas fa-chevron-right"></i>
          </div>
          <div v-if="!faqToggle && faqItem.id === id">
            <i class="fas fa-chevron-right"></i>
          </div>
          <div v-if="faqToggle && faqItem.id === id">
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
        <div
          v-show="faqToggle && faqItem.id === id"
          class="faq-ans bg-gray-200"
        >
          <p>{{ faqItem.ans }}</p>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const faqToggle = ref(false);

const faqItems = ref([
  {
    title: "What is your blockchain?",
    ans: "The Polygon blockchain has been chosen so there will be 0 gas fees for our Insidious investors.",
    id: 1,
  },
  {
    title: "Who is behind the Insidious Jokers?",
    ans: "We are a multinational team of 5 representing the following countries: Russia, Canada, UAE, and Pakistan. Each member of our team is truly passionate and dedicated to the Insidious Jokers which will ensure success.",
    id: 2,
  },
  {
    title: "How do I get my Joker? ",
    ans: "The images as well as the metadata will be listed on OpenSea once our official launch date arrives. Join our Discord and follow our socials for more information.",
    id: 3,
  },
  {
    title: "What do I get?  ",
    ans: "You will get a copyrighted material of your Insidious Joker, such as image files. The owner of the Insidious Jokers NFT has exclusive rights to create and distribute materials that are derived from the original work. Moreover, owners of our NFTs will be invited to grand parties held in Dubai where valuable connections will be found and made, taking your network and net-worth to the next level.",
    id: 4,
  },
  {
    title: "Is there a presale?",
    ans: "Yes, the presale starts on December 1. Join our Discord and follow our socials for more information.",
    id: 5,
  },
]);

const id = ref(null);

const toggle = (fid) => {
  if (fid === id.value) {
    faqToggle.value = !faqToggle.value;
  } else {
    faqToggle.value = true;
  }
  id.value = fid;
};
</script>

<style lang="scss" scoped>
@import "../../scss/variable.scss";

.faq {
  max-width: 1250px;
  margin: auto;
}

.faq-title {
  cursor: pointer;
  padding: 10px;
  font-family: $primary;
  border-bottom: 1px solid #d1d5db3b;
  color: white;
  font-weight: bold;
  letter-spacing: 0.5px;
  padding: 15px;
  font-size: 18px;
  box-shadow: 1px 1px 10px 1px #f3f4f623;
}

.fa-chevron-right {
  display: inline-block;
}

.faq-ans {
  font-family: $secondary;
  color: #1f2937;
  line-height: 2;
  letter-spacing: 0.5px;
  padding: 15px;
}

@media (max-width: 600px) {
  .faq {
    max-width: 350px;
    margin: auto;
  }
}
</style>
