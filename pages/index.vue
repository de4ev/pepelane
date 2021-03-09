<template>
  <div :class="$style.cont">
    <div v-if="loading">Loading...</div>
    <div v-else-if="fetchError" :class="$style.error">
      <p :class="$style['error-title']">An error has occurred</p>
      <span>Please refresh the page</span>
      <Button @click="refresh" :wide="true">Reload page</Button>
    </div>
    <NuxtChild v-else/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    mounted() {
        this.goToVehicles()
    },
  computed: {
    ...mapState(['vehicles', 'loading', 'fetchError'])
  },
  methods: {
      refresh() {
          this.$store.dispatch('nuxtClientInit')
      },
      goToVehicles() {
          if (!this.loading && !this.fetchError) {
              this.$router.push('/vehicles')
          }
      }
  },
  watch: {
      loading: function() {
          this.goToVehicles()
      }
  }
}
</script>

<style lang="scss" module>
.cont {
  background-color: var(--theme-container-background);
  border-radius: 48px;
  padding: 56px 64px;
}
.cards_control {
  display: flex;
  justify-content: space-between;
}
.cards_wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  margin-top: 40px;
}
.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  & .error-title {
    color: var(--theme-bold-text-color);
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 24px;
  }
  & span {
    display: block;
    color: var(--theme-text-color);
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;
    margin-bottom: 40px;
  }
}
</style>