<template>
  <section class="container mx-auto p-6">
    <div class="">
      <h1 class="text-xl font-semibold">Awesome Technologies</h1>
    </div>
    <div class="flex justify-between p-4">
      <Vue class="text-6xl"/>
      <Nuxt class="text-6xl"/>
      <Nest class="text-6xl"/>
      <Socket class="text-6xl"/>
      <Ark class="text-6xl"/>
    </div>
  </section>
</template>
<script>
import Vue from './Vue'
import Nuxt from './Nuxt'
import Nest from './Nest'
import Socket from './Socket'
import Ark from './Ark'

export default {
  name: 'Technologies',
  data() {
    return {
    }
  },
  components: {
    Vue,
    Nuxt,
    Nest,
    Socket,
    Ark
  }
}
</script>
