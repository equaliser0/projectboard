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
      v-if="openedTech">
      <div class="p-6">
        <div class="" v-html="renderMarkdown(openedTech)">
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
      openedTech: null,
      techs: [
        'Arkecosystem',
        'NestJS',
        'NuxtJS',
        'SocketIO',
        'TailwindCSS',
        'VueJS'
      ],
      text: []
    }
  },
  async created() {
    for (let tech of this.techs) {
      fetch(`https://raw.githubusercontent.com/equaliser0/puplicdataset/master/AwesomeEcosystem/Technologies/${tech}.md`)
        .then(response => response.text())
        .then(result => this.text.push({
          tech,
          result
        }));
    }
    console.log(this.text);
  },
  methods: {
    openTech(tech) {
      this.openedTech === tech ? this.openedTech = null : this.openedTech = tech;
    },
    renderMarkdown(tech) {
      console.log(tech);
      let res = this.text.find(t => t.tech === tech);
      console.log(res.result);
      let text2html = this.$marked(res.result);
      return text2html;
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
