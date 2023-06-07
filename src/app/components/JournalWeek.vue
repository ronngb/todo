<template>
  <div id="journal-week" class="container">
    <div class="columns is-mobile">
      <!-- <CalendarDay v-for="day in sharedState.seedData" :key="day.id" :day="day" /> -->
    </div>
  </div>
</template>

<script>
import { store } from '../store.js'
// import CalendarDay from './CalendarDay.vue';

export default {
  name: 'JournalWeek',
  data() {
    return {
      sharedState: store.state,
    }
  },
  components: {},
}
</script>

<style lang="scss" scoped>
#journal-week {
  margin-bottom: 50px;
  .column {
    padding: 0 0 0 0;
  }
}
</style>
