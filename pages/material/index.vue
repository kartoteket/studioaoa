<template>
  <section class="p-12 pt-24">
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
    <div class="tots flex flex-wrap items-start pt-8 container mx-auto">
      <tot v-for="axis in correspondences" :key="axis.id" :tot="axis"></tot>
    </div>
  </section>
</template>

<script>
import Tot from '~/components/Tot.vue'
export default {
  components: {
    Tot
  },
  computed: {
    // Get all correspondences from store
    correspondences() {
      return this.$store.state.correspondences
    }
  },
  async asyncData({ $sanity }) {
    const query = `{
    "entry": *[_type == "page" && slug.current == "raw-material"][0] | {id, title, slug, text},
    }`
    const result = await $sanity.fetch(query)
    return result
  },
  async fetch({ store, params }) {
    await store.dispatch('fetchCorrespondences')
  }
}
</script>

<style>
/*
Dumbledore just waved his wand in Horace's apartment and "the furniture flew back to its original places; ornaments reformed in midair, feathers zoomed into their cushions; torn books repaired themselves as they landed upon their shelves...".
https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/
*/

/* .tots {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(16, 1fr [row-start]); */
/* grid-row-gap: 2rem; */
/* } */
</style>
