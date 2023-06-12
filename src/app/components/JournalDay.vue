<template>
  <div
    class="flex-[0_1_320px] bg-zinc-700 hover:bg-gray-700 text-white text-base cursor-pointer rounded-md"
    @click="setActiveDay(day.id)">
    <div
      class="uppercase tracking-wider font-semibold text-xs text-white p-2 bg-neutral-800 text-center">
      {{ day.fullTitle }}
    </div>
    <div class="p-3">
      <div class="text-center">{{ day.id }}</div>
      <JournalEvent
        v-for="event in day.events"
        :key="day.events.indexOf(event)"
        :event="event"
        :day="day" />
    </div>
  </div>
</template>

<script>
import { store } from '../store.js'
import JournalEvent from './JournalEvent.vue'

export default {
  name: 'CalendarDay',
  props: ['day'],
  components: {
    JournalEvent,
  },
  methods: {
    setActiveDay(dayId) {
      store.setActiveDay(dayId)
    },
  },
}
</script>
