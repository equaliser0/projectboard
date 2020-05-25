<template class="bg-gray-800">
  <div id="app" class="scroller bg-gray-800 h-full text-white" style="scrollbar-color: #123456 #65431;">
    <div class="">
      <t-alert
        base-class="border px-4 py-3 rounded absolut"
        danger-class="bg-red-100 border-red-400 text-red-700"
        variant="danger"
        show>
        <p>This App is under developement!</p>
      </t-alert>
      <Header class="w-full shadow-md"/>
      <Project class="w-full"/>
      <Milestones class="w-full"/>
      <Technologies class="w-full"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Project from './components/Project'
import Milestones from './components/Milestones'
import Technologies from './components/Technologies'

export default {
  name: 'App',
  components: {
    Header,
    Project,
    Milestones,
    Technologies
  }
}
</script>

<style>
</style>
