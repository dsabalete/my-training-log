<template>
  <div>
    <h1>A single training: {{ id }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  head() {
    return {
      title: 'Training #' + this.id,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about training #' + this.id
        }
      ]
    }
  }
}
</script>
