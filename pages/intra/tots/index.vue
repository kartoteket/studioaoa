<template>
  <section class="p-12 pt-24">
    <p class="font-sans text-sm lg:fixed z-50 right-0 m-5 lg:w-1/5">
      Images can be manipulated by URL parameteres (eg
      <code>w=512</code>
      sets width to 512 px). See
      <a
        class="underline"
        href="https://www.sanity.io/docs/image-urls#the-url-parameters-BhPyF4m0"
        >all possible options here</a
      >
    </p>
    <table>
      <thead>
        <th>id</th>
        <th>tot</th>
        <th>url</th>
      </thead>
      <tbody>
        <tr v-for="tot in axis" :key="tot.id">
          <td>{{ tot.id }}</td>
          <td>
            <img
              :src="`${tot.imageUrl}?w=48`"
              :alt="`Tot #${tot.id}`"
              class="block mx-auto max-h-full"
            />
          </td>
          <td class="font-sans text-xs">
            {{ `${tot.imageUrl}?w=512` }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  async asyncData({ $sanity }) {
    const query = `{
    "entry": *[_type == "page" && slug.current == "raw-material"][0] | {id, title, slug, text},
    "axis": *[_type == "axis" && defined(axisTot)] | order(id) | {_id, id, title, slug, text, "imageUrl": axisTot.asset->url},
    }`
    const result = await $sanity.fetch(query)
    return result
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
