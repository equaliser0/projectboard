export default {
  series: [10],
  chartOptions: {
    labels: ['Projectboard'],
    chart: {
      type: 'radialBar'
    },
    dataLabels: {
      style: {
        colors: ['#fff']
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        }
      },
    },
  },
}
