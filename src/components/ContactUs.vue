<template>
  <div class="contact-wrap" id="contact">
    <section class="contact">
      <!-- <h1 class="text-white text-3xl font-bold text-center my-20">
        Contact Us
      </h1>

      <div class="card">
        <form @submit.prevent="submitForm">
          <label for="email">Email: </label>
          <input class="email w-48 border rounded mx-2" type="email" id="email" name="email" />
          <label for="texts">Have your say: </label>
          <textarea name="texts" id="texts" cols="5" rows="5"></textarea>
          <button class="submit-btn ">Submit</button>
        </form>
      </div> -->

      <div class="max-w-sm w-full lg:max-w-full lg:flex my-5 justify-center ">
        <div
          class="
            h-48
            lg:h-auto lg:w-1/2
            flex-none
            bg-cover
            rounded-t
            lg:rounded-t-none lg:rounded-l
            text-center
            overflow-hidden
          "
          style="
            background-image: url('https://cdn.pixabay.com/photo/2016/02/07/21/03/computer-1185626_960_720.jpg');
          "
          title="Woman holding a mug"
        ></div>
        <div
          class="
            border-r border-b border-l border-gray-400
            lg:border-l-0 lg:border-t lg:border-gray-400
            bg-white
            rounded-b
            lg:rounded-b-none lg:rounded-r
            p-4
            flex flex-col
            justify-between
            leading-normal
            lg:w-1/3
          "
        >
          <div class="mb-8">
            <p class="text-sm text-gray-600 flex items-center">
              <svg
                class="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                />
              </svg>
              Contact
            </p>
            <div class="text-gray-900 font-bold text-xl mb-2">
              Have your say?
            </div>
            <p class="text-gray-700 text-base">
              Please let us know your experience?
            </p>

            <div class="w-full max-w-xs">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Email
                  </label>
                  <input
                    class="
                      shadow
                      appearance-none
                      border
                      rounded
                      w-full
                      py-2
                      px-3
                      text-gray-700
                      leading-tight
                      focus:outline-none focus:shadow-outline
                    "
                    id="username"
                    type="email"
                    placeholder="email"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                  >
                    Write:
                  </label>
                  <input
                    class="
                      shadow
                      appearance-none
                      border border-red-500
                      rounded
                      w-full
                      py-2
                      px-3
                      text-gray-700
                      mb-3
                      leading-tight
                      focus:outline-none focus:shadow-outline
                    "
                    id="password"
                    type="text"
                    placeholder="please write..."
                    required
                  />
                </div>
                <div class="flex items-center justify-between">
                  <button
                    class="
                      bg-blue-500
                      hover:bg-blue-700
                      text-white
                      font-bold
                      py-2
                      px-4
                      rounded
                      focus:outline-none focus:shadow-outline
                    "
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <p class="text-center text-gray-500 text-xs">
                &copy;2021 Insidious Jokers. All rights reserved.
              </p>
            </div>
          </div>
          <!-- <div class="flex items-center">
      <img class="w-10 h-10 rounded-full mr-4" src="https://cdn.pixabay.com/photo/2016/02/07/21/03/computer-1185626_960_720.jpg" alt="Avatar of Jonathan Reinink">
      <div class="text-sm">
        <p class="text-gray-900 leading-none">Jonathan Reinink</p>
        <p class="text-gray-600">Aug 18</p>
      </div>
    </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
  margin: auto;
}
.contact-wrap {
  margin-top: 100px;
}
.card {
  max-width: 1300px;
  background-color: #2c3e50;
  margin: auto;
}

// form {
//   display: flex;
//   flex-direction: column;
//   input {
//     display: block;
//   }
//   textarea {
//     max-width: 300px;
//   }
// }
</style>
