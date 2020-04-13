<template>
  <div>
    <h1>Trainings Types</h1>
    <ul>
      <li v-for="type in types" :key="type">
        <nuxt-link :to="type.path">{{ type.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: [
        { name: 'Fullbody', path: 'types/fullbody' },
        { name: 'Upper-Lower', path: 'types/upperlower' },
        { name: 'Push-Pull-Leg', path: 'types/pushpullleg' }
      ]
    }
  },
  head() {
    return {
      title: 'Training types'
    }
  }
}
</script>

<style lang="scss" scoped></style>
