<template>
  <div class="flex gap-1 mb-12 px-5">
    <JournalDay v-for="day in sharedState.seedData" :key="day.id" :day="day" />
  </div>
</template>

<script>
import { store } from '../store.js'
import JournalDay from './JournalDay.vue'

export default {
  name: 'JournalWeek',
  data() {
    return {
      sharedState: store.state,
    }
  },
  components: { JournalDay },
}
</script>

<style lang="scss" scoped></style>
