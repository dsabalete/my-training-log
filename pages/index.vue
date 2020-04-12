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
        { name: 'Fullbody', path: '/fullbody' },
        { name: 'Upper-Lower', path: '/upperlower' },
        { name: 'Push-Pull-Leg', path: 'pushpullleg' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
