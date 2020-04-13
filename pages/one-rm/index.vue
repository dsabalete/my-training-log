<template>
  <div class="calculator">
    <h1>1RM Calculator</h1>
    <form class="row">
      <div class="form-group col-sm">
        <label for="weight">Weight</label>
        <input
          id="weight"
          v-model="weight"
          type="number"
          class="form-control"
          placeholder="Weight"
        />
      </div>
      <div class="form-group col-sm">
        <label for="reps">Reps</label>
        <input
          id="reps"
          v-model="reps"
          type="number"
          class="form-control"
          placeholder="Max reps"
        />
      </div>
    </form>

    <button class="btn btn-primary" @click.prevent="saveSettings">
      Save default settings
    </button>

    <ResultsRM :rm1="rm1" />
  </div>
</template>

<script>
import ResultsRM from '~/components/ResultsRM.vue'

export default {
  components: {
    ResultsRM
  },
  data() {
    return {
      weight: 50,
      reps: 5
    }
  },
  computed: {
    rm1() {
      return +this.weight / (1.0278 - 0.0278 * +this.reps)
    }
  },
  created() {
    if (process.client) {
      const defaultState = JSON.parse(localStorage.getItem('defaultState')) || {
        weight: this.weight,
        reps: this.reps
      }
      this.weight = defaultState.weight
      this.reps = defaultState.reps
    }
  },
  methods: {
    saveSettings() {
      if (process.client) {
        const settings = JSON.stringify({
          weight: this.weight,
          reps: this.reps
        })
        localStorage.setItem('defaultState', settings)
      }
    }
  },
  head() {
    return {
      title: '1RM Calculator',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'You can calculate your 1RM based on the weight and number of reps'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
