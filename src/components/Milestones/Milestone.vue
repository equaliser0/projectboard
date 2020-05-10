<template>
  <div class="">
    <apexchart
      type="radialBar"
      height="250"
      :options="chartOptions"
      :series="series">
    </apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'Milestone',
  props: {
    series: Array,
    chartOptions: Object
  },
  components: {
    apexchart: VueApexCharts,
  },
}
</script>
