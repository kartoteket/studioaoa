<template>
  <div class="prevnext w-1/5 inline-flex items-center p-4 my-32 opacity-25">
    <nuxt-link v-if="url" :to="url">
      <svg
        class="fill-current text-ocher inline-block h-12 w-12"
        viewBox="0 0 11 28"
      >
        <slot />
      </svg>
    </nuxt-link>
    <div v-else class="prevnext"></div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: null
    }
  }
}
</script>

<style>
.prevnext {
  transition: opacity 0.3s ease;
}
.prevnext:hover {
  @apply opacity-100;
}
</style>
