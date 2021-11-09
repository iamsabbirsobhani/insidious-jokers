<template>
  <div class="contact p-5" id="contact">
    <h1 class="text-white text-center text-2xl my-1 font-bold">The Insidious Jokers</h1>
    <h1 class="text-white text-center text-xl my-1 font-bold">Message Us</h1>
    <form>
      <input
        type="text"
        id="name"
        name="name"
        class="
          name
          h-12
          p-3
          bg-gray-600
          placeholder-white placeholder-bold placeholder-opacity-75
          focus:placeholder-gray-400
          rounded-sm
          border-none
          focus:outline-none
          focus:ring-pink-600
          focus:ring-2
          focus:ring-pink-600
          ring-gray-500
        "
        placeholder="Full Name"
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        class="
          email
          h-12
          p-3
          bg-gray-600
          placeholder-white placeholder-bold placeholder-opacity-75
          focus:placeholder-gray-400
          rounded-sm
          border-none
          focus:outline-none
          focus:ring-pink-600
          focus:ring-2
          focus:ring-pink-600
          ring-gray-500
        "
        placeholder="Email"
        required
      />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="7"
        class="
          message
          p-3 p-3
          bg-gray-600
          placeholder-white placeholder-bold placeholder-opacity-75
          focus:placeholder-gray-400
          rounded-sm
          border-none
          focus:outline-none
          focus:ring-pink-600
          focus:ring-2
          focus:ring-pink-600
          ring-gray-500
        "
        placeholder="Your Message"
        required
      ></textarea>
      <button
        class="
          w-32
          h-12
          bg-pink-600
          text-gray-50
          font-bold
          hover:bg-pink-700
          transition
        "
      >
        SEND
      </button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
  max-width: 1250px;
  margin: 100px auto;
  background-color: #2c3e50;
  border-radius: 8px;
}
form {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.name {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 37.5rem;
  color: white;
}
.email {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 37.5rem;
  color: white;
}
.message {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 37.5rem;
  color: white;
}

@media (max-width: 600px) {
    .contact {
        max-width: 370px;
    }
    .name {
        width: 18.15rem;
    }
    .email {
        width: 18.15rem;
    }
    .message {
        width: 18.15rem;
    }
}
</style>
