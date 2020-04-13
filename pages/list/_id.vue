<template>
  <div>
    <h1>{{ training.title }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, error, params }) {
    try {
      const { data } = await $axios.get(
        'http://localhost:3000/events/' + params.id
      )
      return {
        training: data
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch event #' + params.id
      })
    }
  },
  head() {
    return {
      title: this.training.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about ' + this.training.title
        }
      ]
    }
  }
}
</script>
