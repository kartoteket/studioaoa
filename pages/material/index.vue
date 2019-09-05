<template>
  <section class="p-12 pt-24">
    <article class="sm:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto my-10">
      <h1 class="text-ocher font-bold text-center mb-4">
        The Raw Material : The Tots
      </h1>
      <p>
        The Molecular Ballet project is an ongoing experiment intended to create
        a new language of creative expression. The raw material of the project
        is a set of 256 collected artworks along with corresponding text
        snippets. Each artwork is produced as a collage of found material by
        invited contributors from a wide array of different fields. We call them
        «Tots».
      </p>
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
