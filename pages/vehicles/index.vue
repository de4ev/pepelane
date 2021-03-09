<template>
  <div :class="$style.cont">
    <div :class="$style['cards_control']">
      <Dropdown @change="filterBy" :options="getVehicleTypes" :selectedOption="filterOption"/>
      <Button @click="showPopup(true)" text-before="Add new">
        <img src="@/assets/icons/add.svg" alt="add icon">
      </Button>
    </div>
    <div v-if="loading" :class="$style.stretch">Loading...</div>
      <transition-group name="list" v-else :class="$style['cards_wrapper']">
            <Card
              v-for="vehicle in getFilteredVehicles" 
              :key="vehicle.id"
              :item="vehicle"
            />
      </transition-group>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  middleware: 'checkStore',
  transition: 'fade',
  computed: {
    ...mapState(['loading', 'filterOption']),
    ...mapGetters(['getVehicleTypes', 'getFilteredVehicles'])
  },
  methods: {
    ...mapActions(['showPopup', 'filterBy']),
  },
  beforeDestroy() {
    this.showPopup(false)
  },
}
</script>

<style lang="scss" module>
.cont {
  display: flex;
  justify-content: flex-start;
  background-color: var(--theme-container-background);
  border-radius: 48px;
  padding: 56px 64px;
  transition: .3s;
}
.cards_control {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & p {
    font-size: 40px;
    font-weight: 700;
  }
}
.cards_wrapper{
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  grid-gap: 32px;
  margin-top: 40px;
}
.stretch {
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 992px) {
  .cont {
    border-radius: 36px;
    padding: 40px 48px;
  }
}
@media (max-width: 576px) {
  .cont {
    border-radius: 24px;
    padding: 24px 16px;
  }
  .cards_wrapper{
    grid-gap: 12px;
  }
}
</style>
