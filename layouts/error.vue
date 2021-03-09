<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>{{error.message}}</h1>
    <Button to="/" :wide="true">Home page</Button>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'default'
  }
</script>

<style lang="scss" module>
    h1 {
        margin-bottom: 30px;
    }
</style>
