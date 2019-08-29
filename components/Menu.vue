<template>
  <nav class="inset-x-0 bottom-0 mb-8 fixed flex justify-center">
    <ul
      class="inline-flex mx-auto justify-center text-xl font-hairline p-8 bg-black"
    >
      <li
        v-if="linkHome"
        class="border-r mr-4 pr-4"
        :class="`border-${textColor}`"
      >
        <nuxt-link to="/" :class="`text-${textColor}`">
          Home
        </nuxt-link>
      </li>

      <li class="border-r mr-4 pr-4" :class="`border-${textColor}`">
        <nuxt-link to="/axis" :class="`text-${textColor}`">
          Process
        </nuxt-link>
      </li>
      <li class="border-r mr-4 pr-4" :class="`border-${textColor}`">
        <nuxt-link to="/dataset" :class="`text-${textColor}`">
          Dataset
        </nuxt-link>
      </li>
      <li class="border-r mr-4 pr-4" :class="`border-${textColor}`">
        <nuxt-link to="/axis" :class="`text-${textColor}`">
          Works
        </nuxt-link>
      </li>
      <li>
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
    textColor: {
      type: String,
      default: 'white'
    },
    linkHome: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style></style>
