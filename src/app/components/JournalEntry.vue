<template>
  <div id="journal-entry">
    <div class="journal-entry-note">
      <input type="text" placeholder="New Event" v-model="inputEntry" required />
      <p class="journal-entry-day">
        Day of event: <span class="bold">{{ titleOfActiveDay }}</span>
      </p>
      <a class="button is-primary is-small is-outlined" @click="submitEvent(inputEntry)">
        Submit
      </a>
      <p style="color: red; font-size: 13px" v-if="error">
        You must type something first!
      </p>
    </div>
  </div>
</template>

<script>
import { store } from '../store.js'

export default {
  name: 'JournalEntry',
  data() {
    return {
      inputEntry: '',
      error: false,
    }
  },
  computed: {
    titleOfActiveDay() {
      return store.getActiveDay().fullTitle
    },
  },
  methods: {
    submitEvent(eventDetails) {
      if (eventDetails === '') return (this.error = true)

      store.submitEvent(eventDetails)
      this.inputEntry = ''
      this.error = false
    },
  },
}
</script>

<style lang="scss" scoped>
#journal-entry {
  background: #fff;
  border: 1px solid #42b883;
  border-radius: 10px;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;

  .journal-entry-note {
    input {
      width: 200px;
      font-weight: 600;
      border: 0;
      border-bottom: 1px solid #ccc;
      font-size: 15px;
      height: 30px;
      margin-bottom: 10px;

      &:focus {
        outline: none;
      }
    }

    .journal-entry-day {
      color: #42b883;
      font-size: 12px;
      margin-bottom: 10px;
      padding-bottom: 5px;

      .bold {
        font-weight: 600;
      }
    }

    .submit {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
