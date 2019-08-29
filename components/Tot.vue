<template>
  <div v-show="exists(tot)" class="flex flex-col w-1/4 mb-12 pr-8">
    <div class="h-64 text-center p-4 crosshairs">
      <nuxt-link :to="`/axis/${tot.id}`">
        <img v-if="tot.hasTot > 0" :src="imgSrc(tot.id)" class="max-h-full" />
      </nuxt-link>
    </div>

    <div class="relative p-2 pt-10 pb-4">
      <div class="absolute inset-0 left-0 p-2 text-xs text-grey-darkest">
        #{{ tot.id }}
      </div>

      <p class="leading-normal text-sm text-grey-darkest">
        <span class="whitespace-pre-wrap">{{ tot.text }}</span>
      </p>
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
