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
          @input="calculate"
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
          @input="calculate"
        />
      </div>
    </form>

    <button class="btn btn-primary" @click.prevent="saveSettings">
      Save default settings
    </button>

    <ResultsRM />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ResultsRM from '~/components/ResultsRM.vue'

export default {
  name: 'OneRm',
  components: {
    ResultsRM
  },
  data() {
    return {
      weight: 80,
      reps: 0
    }
  },
  created() {
    if (process.client) {
      const defaultState = JSON.parse(localStorage.getItem('defaultState')) || {
        weight: 80,
        reps: 10
      }
      this.weight = defaultState.weight
      this.reps = defaultState.reps
      this.calculate()
    }
  },
  methods: {
    ...mapActions(['updateValue']),
    calculate() {
      const params = {
        weight: this.weight,
        reps: +this.reps
      }
      this.updateValue({ params })
    },
    saveSettings() {
      if (process.client) {
        const settings = JSON.stringify({
          weight: this.weight,
          reps: this.reps
        })
        localStorage.setItem('defaultState', settings)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
