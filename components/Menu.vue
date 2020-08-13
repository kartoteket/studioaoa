<template>
  <nav :class="{ 'is-open': state }" class="menu">
    <ul class="bg-white p-4 pr-0 z-10">
      <li v-if="linkHome" class="menu__item">
        <nuxt-link
          @click.native="toggleMenu()"
          :class="`text-${textColor}`"
          to="/"
        >
          Home
        </nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link
          @click.native="toggleMenu()"
          :class="`text-${textColor}`"
          to="/hok"
        >
          HOK 23/8
        </nuxt-link>
      </li>

      <li class="menu__item">
        <nuxt-link
          @click.native="toggleMenu()"
          :class="`text-${textColor}`"
          to="/material"
        >
          Raw Material
        </nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link
          @click.native="toggleMenu()"
          :class="`text-${textColor}`"
          to="/process"
        >
          Process
        </nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link
          @click.native="toggleMenu()"
          :class="`text-${textColor}`"
          to="/outcome"
        >
          Outcome
        </nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link
          @click.native="toggleMenu()"
          :class="`text-${textColor}`"
          to="/about"
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
  @apply overflow-hidden block top-0 right-0 mt-20 mr-8 pr-3 absolute text-right text-xl leading-normal;

  &.is-open {
    max-height: 500px;
  }

  &__item {
    @apply py-2;
  }
}
</style>
