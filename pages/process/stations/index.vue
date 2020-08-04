<template>
  <div>
    <section class="container mx-auto px-8 lg:px-20 pt-16">
      <header class="pt-16 pb-8">
        <h1 class="heading-1">8 Stations of work</h1>
      </header>

      <station-item
        v-for="(item, index) in stations"
        :key="item.title"
        :index="index"
      >
        <template v-slot:title>{{ item.title }}</template>
        <template v-slot:img>
          <img :src="`${item.imageUrl}?w=512`" :alt="item.title" />
        </template>
        <block-content
          v-if="item.text"
          :render-container-on-single-child="true"
          :blocks="item.text"
          class-name="rtf"
        />
      </station-item>
    </section>

    <!-- "Close" -->
    <nuxt-link
      to="/process"
      class="fixed bottom-0 right-0 p-4 m-6 text-3xl font-sans"
    >
      X
    </nuxt-link>
  </div>
</template>

<script>
import StationItem from '@/components/StationItem'
export default {
  components: {
    StationItem
  },
  async asyncData({ $sanity }) {
    const query = `{
    "stations": *[_type == "station"]|order(title)|{_id, title, slug, text, "imageUrl": image.asset->url},
    }`
    const result = await $sanity.fetch(query)
    return result
  },
  head() {
    return {
      htmlAttrs: {
        class: 'smooth-scroll'
      }
    }
  }
}
</script>
