<template>
  <section class="container mx-auto flex flex-col bg-slate-500 justify-center h-screen">
    <JournalWeek />
    <JournalEntry />
  </section>
</template>

<script>
import JournalEntry from './components/JournalEntry.vue'
import JournalWeek from './components/JournalWeek.vue'

export default {
  name: 'App',
  components: { JournalEntry, JournalWeek },
}
</script>

<style lang="scss">
.border-solid {
  border: 1px solid #000;
}
</style>
