<template>
  <JournalEntry />
  <JournalWeek />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #6e6e6e;
  text-align: center;
  // display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
