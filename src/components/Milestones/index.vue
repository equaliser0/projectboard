<template>
  <section class="container mx-auto p-6">
    <div class="" v-for="(milestone, i) in milestones" :key="i">
      <Milestone
        :series="milestone.series"
        :chartOptions="milestone.chartOptions"/>
    </div>
  </section>
</template>

<script>
import Milestone from './Milestone'
import * as milestones from '@/assets/database/milestones'

export default {
  name: 'Milestones',
  data() {
    return {
      milestones
    }
  },
  components: {
    Milestone
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
