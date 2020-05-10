<template>
  <section class="container mx-auto p-6">
    <div class="">
      <h1>Milestones</h1>
      <p>Click on a Milestone to see more information.</p>
    </div>
    <div class="" v-for="(milestone, i) in milestones" :key="i">
      <div class="" @click="openMilestone()">
        <Milestone
        :series="milestone.chartConfig.series"
        :chartOptions="milestone.chartConfig.chartOptions"/>
      </div>
    </div>
    <div class="w-full bg-gray-700 rounded p-6" v-if="openedMilestone">
      <h2>Description</h2>
      <div class="">
        This Projectboard shows the recent state and its milestones of the big network project <span>Awesome Ecosystem</span>. There are several steps to initialize the next components and further steps. 
      </div>
    </div>
  </section>
</template>

<script>
import Milestone from './Milestone'
import * as milestones from '@/assets/database/milestones'
// import Projectboard from '@/assets/database/milestoneDescriptions/Projectboard.md'

export default {
  name: 'Milestones',
  data() {
    return {
      openedMilestone: false,
      milestones,
      // Projectboard
    }
  },
  methods: {
    openMilestone() {
      this.openedMilestone === false ? this.openedMilestone = true : this.openedMilestone = false;
    },
    renderMarkdown() {
      // return this.$marked(this.Projectboard)
    }
  },
  components: {
    Milestone,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
