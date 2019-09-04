<template>
  <nav class="menu" :class="{ 'is-open': state }">
    <ul>
      <li v-if="linkHome" class="menu__item">
        <nuxt-link to="/" :class="`text-${textColor}`">
          Home
        </nuxt-link>
      </li>

      <li class="menu__item">
        <nuxt-link to="/axis" :class="`text-${textColor}`">
          Process
        </nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link to="/dataset" :class="`text-${textColor}`">
          Dataset
        </nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link to="/axis" :class="`text-${textColor}`">
          Works
        </nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link to="/axis" :class="`text-${textColor}`">
          Contact
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    state: {
      type: Boolean,
      default: false
    },
    textColor: {
      type: String,
      default: 'black'
    },
    linkHome: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.menu {
  max-height: 0px;
  transition: max-height 0.3s;
  @apply .overflow-hidden .block .top-0 .right-0 .mt-20 .mr-12 .fixed .text-right .text-2xl .leading-loose;

  &.is-open {
    max-height: 500px;
  }

  &__item {
    @apply uppercase py-2;
  }
}
</style>
