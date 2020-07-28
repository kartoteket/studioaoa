<template>
  <div
    v-show="exists(tot)"
    class="w-1/3 sm:w-1/5 md:w-1/8 xl:w-1/13 mb-12 px-4"
  >
    <div class="p-4 crosshairs">
      <nuxt-link :to="`/material/${tot.id}`">
        <img
          :src="`${tot.imageUrl}?w=512`"
          :alt="`Tot #${tot.id}`"
          class="block mx-auto max-h-full"
        />
      </nuxt-link>
    </div>
    <div class="text-xs text-center">
      {{ tot.id }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tot',
  props: {
    tot: {
      type: Object,
      default: null
    }
  },
  methods: {
    exists(tot) {
      return tot.text || tot.imageUrl
    }
  }
}
</script>
