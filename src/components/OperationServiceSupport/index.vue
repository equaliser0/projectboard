<template>
  <section>
    <div class="" v-for="(t, i) in text" :key="i">
      <div class="" v-html="renderMarkdown()">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OperationServiceSupport',
  data() {
    return {
      oss: [
        'CODE_OF_CONDUCT',
        'CONTRIBUTING'
      ],
      text: []
    }
  },
  async created() {
    for (let text of this.oss) {
      fetch(`https://raw.githubusercontent.com/equaliser0/puplicdataset/master/OperationSupportSystem/${text}.md`)
        .then(response => response.text())
        .then(result => this.text.push({
          text,
          result
        }));
    }
  },
  methods: {
    openText(text) {
      this.openedText === text ? this.openedText = false : this.openedText = text;
    },
    renderMarkdown(text) {
      let res = this.text.find(t => t.text === text);
      let text2html = this.$marked(res.result);
      return text2html;
    }
  },
}
</script>

<style lang="css" scoped>
</style>
