<template>
  <div>
    <h1>{{ trainingType }} trainings</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: this.$route.params.type
    }
  },
  computed: {
    trainingType() {
      return this.type[0].toUpperCase() + this.type.slice(1)
    }
  },
  head() {
    return {
      title: this.type,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `You can track your ${this.type} routine data`
        }
      ]
    }
  }
}
</script>
