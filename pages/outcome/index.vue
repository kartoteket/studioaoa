<template>
  <section class="p-12 pt-24">
    <!-- TODO: Perhaps extract to re-usable sub component -->
    <article class="sm:w-4/5 lg:w-3/5 xl:w-1/3 mx-auto my-10">
      <h1 class="heading-1">
        {{ entry.title }}
      </h1>
      <block-content
        v-if="entry.text"
        :render-container-on-single-child="true"
        :blocks="entry.text"
        class-name="rtf"
      />
    </article>

    <div
      class="flex flex-wrap justify-between pt-8 px-8 lg:px-20 container mx-auto"
    >
      <n-link
        v-for="(item, index) in works"
        :key="index"
        :to="`/outcome/${item.slug.current}`"
        :index="index"
        class="mb-3 max-w-40 md:max-w-none"
      >
        <img
          :src="item.imageUrl"
          :alt="`Illustration: ${item.title}`"
          class="x-height max-w-none"
        />
      </n-link>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $sanity }) {
    const query = `{
    "entry": *[_type == "page" && slug.current == "outcome"][0] | {id, title, slug, text},
    "works": *[_type == "work" && defined(coverImage)]{_id, title, slug, "imageUrl": coverImage.asset->url},
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

<style>
.x-height {
  height: 150px;
}
.grid {
  display: inline-grid;
  grid-template-columns: auto;
  grid-template-rows: 100px;
  grid-auto-rows: 50px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
</style>
