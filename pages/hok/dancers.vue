<template>
  <article class="min-h-screen flex flex-col items-center pt-24">
    <div class="px-8 text-center sm:px-0 sm:w-2/3">
      <h1 class="mb-8">
        Pick your guide to the world of the Molecular Ballet!
      </h1>
      <div class="flex flex-wrap container mx-auto mb-8">
        <div
          v-for="dancer in listOfDancers"
          :key="dancer._id"
          class="sm:w-1/2 md:w-1/4 px-8 lg:px-16 mb-10 mx-auto"
        >
          <h2 class="hidden">{{ dancer.title }}</h2>
          <a @click.prevent="setDancer(dancer.slug.current)">
            <img
              :src="`${dancer.imageUrl}?w=256`"
              :alt="`#${dancer.title}`"
              class="block max-h-40 mx-auto"
            />
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'HOK',
  // layout: 'hok',
  data() {
    return {
      selectedDancer: null
    }
  },
  computed: {
    listOfDancers() {
      // if (this.selectedDancer)
      //   return this.dancers.filter(
      //     (d) => d.slug.current === this.selectedDancer
      //   )
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
