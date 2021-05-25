<template>
  <section class="bg-gray-900">
    <div class="container mx-auto p-6">
      <div class="flex w-full pt-6">
        <button class="flex mt-4 pt-4" @click="$router.push('/')">
          <img class="rounded-full h-16 mr-4" src="http://ecosis.io/_nuxt/client/assets/icons/ecosis/ecosis.png" alt="">
          <h1>ecosis</h1>
        </button>
      </div>
      <div class="w-full pb-6">
        <p>
          We combine the best technologies of today to build the best ecosystem of tomorrow.
        </p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Header',
  components: {
  }
}
</script>
