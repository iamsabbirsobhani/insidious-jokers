<template>
  <div class="row" id="FAQ" style="margin-bottom: 10rem;">
  <h1 class="text-center text-white text-4xl font-bold">FAQ</h1>
    <!-- <div class="col">
      <h2>Open <b>multiple</b></h2>
      <div class="tabs">
        <div class="tab">
          <input type="checkbox" id="chck1" />
          <label class="tab-label" for="chck1">Item 1</label>
          <div class="tab-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
            reiciendis!
          </div>
        </div>
        <div class="tab">
          <input type="checkbox" id="chck2" />
          <label class="tab-label" for="chck2">Item 2</label>
          <div class="tab-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
          </div>
        </div>
      </div>
    </div> -->
    <div class="col">
      <div class="tabs">
        <div class="tab">
          <input type="radio" id="rd1" name="rd" />
          <label class="tab-label" for="rd1">What is an NFT? </label>
          <div class="tab-content">
            <p>NFT stands for ‘Non-Fungible Token’. It is a digital asset that links ownership to unique physical or digital items, such as works of art, music, videos, etc. NFTs can be considered modern-day collectibles.</p>
          </div>
        </div>

        <div class="tab">
          <input type="radio" id="rd2" name="rd" />
          <label class="tab-label" for="rd2">Who is behind the Insidious Jokers?</label>
          <div class="tab-content">
            <p>We are a multinational team of 4 representing the following countries: Russia, Canada, UAE, and Pakistan. Each member of our team is truly passionate and dedicated to the Insidious Jokers which will ensure success.</p>
          </div>
        </div>
        <div class="tab">
          <input type="radio" id="rd4" name="rd" />
          <label class="tab-label" for="rd4">How do I get my Joker?</label>
          <div class="tab-content">
            <p>The images as well as the metadata will be listed on OpenSea once our official launch date arrives. To stay updated, check out our social media accounts.</p>
          </div>
        </div>
        <div class="tab">
          <input type="radio" id="rd5" name="rd" />
          <label class="tab-label" for="rd5">What do I get? </label>
          <div class="tab-content">
            <p>You will get a copyrighted material of your Insidious Joker, such as image files. The owner of the Insidious Jokers NFT has exclusive rights to create and distribute materials that are derived from the original work. Moreover, owners of our NFTs will be eligible for a chance to take part in our future airdrops.</p>
          </div>
        </div>
        <div class="tab">
          <input type="radio" id="rd6" name="rd" />
          <label class="tab-label" for="rd6">Is there a presale?</label>
          <div class="tab-content">
            <p>No, for the first collection there is no presale. However, there will be presale for our second collection that will be released once the first collection is sold out. Join our discord and social media to stay updated!</p>
          </div>
        </div>
        <div class="tab">
          <input type="radio" id="rd3" name="rd" />
          <label for="rd3" class="tab-close">Close others &times;</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$midnight: #2c3e50;
$clouds: #ecf0f1;
// General
body {
  color: $midnight;
  background: $clouds;
  padding: 0 1em 1em;
}
h1 {
  margin: 0;
  line-height: 2;
  text-align: center;
}
h2 {
  margin: 0 0 0.5em;
  font-weight: normal;
}
input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
// Layout
.row {
  display: flex;
  .col {
    flex: 1;
    &:last-child {
      margin-left: 1em;
    }
  }
}
/* Accordion styles */
.tabs {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
}
.tab {
  width: 100%;
  color: white;
  overflow: hidden;
  &-label {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: $midnight;
    font-weight: bold;
    cursor: pointer;
    /* Icon */
    &:hover {
      background: darken($midnight, 10%);
    }
    &::after {
      content: "\276F";
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all 0.35s;
    }
  }
  &-content {
    max-height: 0;
    padding: 0 1em;
    color: $midnight;
    background: white;
    transition: all 0.35s;
  }
  &-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    background: $midnight;
    cursor: pointer;
    &:hover {
      background: darken($midnight, 10%);
    }
  }
}

// :checked
input:checked {
  + .tab-label {
    background: darken($midnight, 10%);
    &::after {
      transform: rotate(90deg);
    }
  }
  ~ .tab-content {
    max-height: 100vh;
    padding: 1em;
  }
}

.row {
  max-width: 1300px;
  margin: 100px auto;
}
</style>
