<template>
  <article class="min-h-screen flex flex-col justify-center items-center pt-24">
    <div class="px-8 text-center sm:px-0 sm:w-2/3">
      <div class="flex flex-wrap container mx-auto mb-8 Xdebug">
        <div
          v-for="dancer in listOfDancers"
          :key="dancer._id"
          class="w-1/4 px-12"
        >
          <h2 class="hidden">{{ dancer.title }}</h2>
          <img
            :src="`${dancer.imageUrl}?w=256`"
            :alt="`#${dancer.title}`"
            @click="setDancer(dancer.slug.current)"
            class="block"
          />
        </div>
      </div>
      <h1 class="heading-1 text-2xl">
        Pick one of us!
      </h1>
    </div>
  </article>
</template>

<script>
export default {
  name: 'HOK',
  data() {
    return {
      selectedDancer: null
    }
  },
  computed: {
    listOfDancers() {
      if (this.selectedDancer)
        return this.dancers.filter(
          (d) => d.slug.current === this.selectedDancer
        )
      return this.dancers
    }
  },
  async asyncData({ $sanity }) {
    const query = `{
    "dancers": *[_type == "dancer"]{_id, title, slug, about, "imageUrl": assets.image_1.asset->url},
    }`
    const result = await $sanity.fetch(query)
    return result
  },
  // mounted() {
  //   this.selectedDancer = localStorage.getItem('dancer')
  // },
  methods: {
    setDancer(id) {
      this.selectedDancer = id
      localStorage.setItem('dancer', id)
      this.$router.push({
        path: '/hok/guide'
      })
    }
  }
}
</script>
