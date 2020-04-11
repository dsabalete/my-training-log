<template>
  <div v-if="rm1 != 0" class="result">
    <h2>1RM: {{ rm1 | twoDecimals }}</h2>
    <h4>2RM: {{ (rm1 * 0.95) | twoDecimals }}</h4>
    <h4>3RM: {{ (rm1 * 0.93) | twoDecimals }}</h4>
    <h4>4RM: {{ (rm1 * 0.9) | twoDecimals }}</h4>
    <h4>5RM: {{ (rm1 * 0.87) | twoDecimals }}</h4>
    <h4>6RM: {{ (rm1 * 0.85) | twoDecimals }}</h4>
    <h4>7RM: {{ (rm1 * 0.83) | twoDecimals }}</h4>
    <h4>8RM: {{ (rm1 * 0.8) | twoDecimals }}</h4>
    <h4>9RM: {{ (rm1 * 0.77) | twoDecimals }}</h4>
    <h4>10RM: {{ (rm1 * 0.75) | twoDecimals }}</h4>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  filters: {
    twoDecimals(value) {
      return value.toFixed(0) + ' Kg'
    }
  },
  computed: {
    ...mapGetters(['rm1'])
  }
}
</script>

<style scoped>
.result {
  margin: 30px;
}
</style>
