<template>
  <div v-show="exists(tot)" class="w-1/12 mb-12 pr-8">
    <div class="p-4 crosshairs">
      <nuxt-link :to="`/material/${tot.id}`">
        <img
          v-if="tot.hasTot > 0"
          :src="imgSrc(tot.id)"
          class="block mx-auto max-h-full"
        />
      </nuxt-link>
    </div>

    <div class="relative p-2 pt-10 pb-4 text-center">
      <div class="absolute inset-0 left-0 p-2 text-xs text-grey-darkest">
        {{ tot.id }}
      </div>

      <!-- <p class="leading-normal text-sm text-grey-darkest">
        <span class="whitespace-pre-wrap">{{ tot.text }}</span>
      </p> -->
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
      return tot.text || tot.hasTot
    },
    imgSrc(id) {
      if (id) {
        return `http://tots.imgix.net/Axis%20${id}.jpg?w=256`
      }
      return false
    }
  }
}
</script>
