<template>
  <section class="p-12 pt-20">
    <div class="tots flex flex-wrap items-start">
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
