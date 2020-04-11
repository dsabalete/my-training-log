<template>
  <div v-if="rm1 != 0" class="result">
    <h4 v-for="(coef, index) in coeficients" :key="index">
      {{ index + 1 }}RM: {{ (coef * rm1) | twoDecimals }}
    </h4>
  </div>
</template>

<script>
export default {
  filters: {
    twoDecimals(value) {
      return value.toFixed(0) + ' Kg'
    }
  },
  props: {
    rm1: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      coeficients: [1, 0.95, 0.93, 0.9, 0.87, 0.85, 0.83, 0.8, 0.77, 0.75]
    }
  }
}
</script>

<style scoped>
.result {
  margin: 30px;
}
</style>
