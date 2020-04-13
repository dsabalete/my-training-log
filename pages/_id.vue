<template>
  <div>
    <h1>A single training: {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'A single training',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'You can see your routine data'
        }
      ]
    }
  }
}
</script>
