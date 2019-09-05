<template>
  <nav class="menu" :class="{ 'is-open': state }">
    <ul class="bg-white p-4 pr-0 z-10">
      <li v-if="linkHome" class="menu__item">
        <nuxt-link
          to="/"
          :class="`text-${textColor}`"
          @click.native="toggleMenu()"
        >
          Home
        </nuxt-link>
      </li>

      <li class="menu__item">
        <nuxt-link
          to="/material"
          :class="`text-${textColor}`"
          @click.native="toggleMenu()"
        >
          Raw Material
        </nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link
          to="/process"
          :class="`text-${textColor}`"
          @click.native="toggleMenu()"
        >
          Process
        </nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link
          to="/outcome"
          :class="`text-${textColor}`"
          @click.native="toggleMenu()"
        >
          Outcome
        </nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link
          to="/about"
          :class="`text-${textColor}`"
          @click.native="toggleMenu()"
        >
          About
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
  },
  methods: {
    toggleMenu() {
      this.$emit('state', !this.state)
    }
  }
}
</script>

<style lang="scss">
.menu {
  max-height: 0px;
  transition: max-height 0.3s;
  @apply overflow-hidden block top-0 right-0 mt-20 mr-12 absolute text-right text-2xl leading-normal;

  &.is-open {
    max-height: 500px;
  }

  &__item {
    @apply uppercase py-2;
  }
}
</style>
