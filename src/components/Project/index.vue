<template>
  <section class="container mx-auto">
    <div class="w-full p-6">
      <!-- <div class="py-6">
        For developing and support the ecosystem, liquidity is essential.
      </div> -->
      <div class="py-6">
        <Pool/>
      </div>
    </div>
  </section>
</template>

<script>
import Pool from './Pool'

export default {
  name: 'Project',
  components: {
    Pool
  }
}
</script>
