<template>
  <nuxt-link v-if="axis" :to="`/material/${axis.id}`" class="prevnext">
    <svg
      class="fill-current text-ocher inline-block h-12 w-12"
      viewBox="0 0 11 28"
    >
      <slot />
    </svg>
  </nuxt-link>
  <div v-else class="prevnext"></div>
</template>

<script>
export default {
  props: {
    axis: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>
.prevnext {
  transition: opacity 0.3s ease;
  @apply w-1/5 inline-flex items-center p-4 opacity-25;
}
.prevnext:hover {
  @apply opacity-100;
}
</style>
