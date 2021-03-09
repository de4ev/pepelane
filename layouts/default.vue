<template>
  <div :class="`${$style.container} ${isPopupOpen ? $style.blur : ''}`">
    <Header :class="$style.header"/>
    <Nuxt :class="$style.stretch"/>
    <Popup v-if="isPopupOpen"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['isPopupOpen'])
  },
}
</script>

<style  lang="scss" module>
.container {
  max-width: 1920px;
  min-width: 375px;
  min-height: 100vh;
  padding: 48px 64px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--theme-page-background);
  transition: .3s;
  & .header {
    margin-bottom: 40px;
  }
  &.blur {
    overflow: hidden;
    & > * {
        // transition: filter 0.2s ease-in-out;
    }
    & > header,
    & > .stretch, {
        // filter: blur(3px);
    }
  }
}
.stretch {
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
@media (max-width: 992px) {
    .container {
      padding: 36px 48px;
      & .header {
        margin-bottom: 30px;
      }
    }
}
@media (max-width: 768px) {
    .container {
      padding: 24px;
      & .header {
        margin-bottom: 24px;
      }
    }
}
@media (max-width: 576px) { 
    .container {
        padding: 0;
        & .header {
          margin-bottom: 8px;
        }
    }
 }
</style>
