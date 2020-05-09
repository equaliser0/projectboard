<template>
  <section class="container mx-auto p-6">
    <div class="">
      <h1>Awesome Technologies</h1>
    </div>
    <div class="flex justify-between py-4">
      <Ark
        class="text-6xl"
        @click.native="openTech('Arkecosystem')"/>
      <Nest
        class="text-6xl"
        @click.native="openTech('NestJS')"/>
      <Nuxt
        class="text-6xl"
        @click.native="openTech('NuxtJS')"/>
      <Socket
        class="text-6xl"
        @click.native="openTech('SocketIO')"/>
      <Tailwind
        class="text-6xl"
        @click.native="openTech('TailwindCSS')"/>
      <Vue
        class="text-6xl"
        @click.native="openTech('VueJS')"/>
    </div>
    <div
      class="bg-gray-700 rounded"
      v-if="tech">
      <div class="p-6">
        <div class="" v-html="renderMarkdown()">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from './Vue'
import Nuxt from './Nuxt'
import Nest from './Nest'
import Socket from './Socket'
import Ark from './Ark'
import Tailwind from './Tailwind'

export default {
  name: 'Technologies',
  data() {
    return {
      tech: null
    }
  },
  methods: {
    openTech(tech) {
      this.tech === tech ? this.tech = null : this.tech = tech;
    },
    renderMarkdown() {
      return this.$marked(`## Awesome ${this.tech}`)
    }
  },
  components: {
    Vue,
    Nuxt,
    Nest,
    Socket,
    Ark,
    Tailwind
  }
}
</script>
