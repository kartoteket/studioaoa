<template>
  <section class="p-12 pt-24">
    <article class="sm:w-4/5 lg:w-3/5 xl:w-1/3 mx-auto my-10">
      <h1 class="heading-1 vibrate">
        Pick one of the Tots!
      </h1>
    </article>
    <div class="tots flex flex-wrap items-start pt-8 container mx-auto">
      <div
        v-for="tot in axis"
        :key="tot.id"
        class="w-1/3 sm:w-1/5 md:w-1/8 xl:w-1/13 mb-12 px-4"
      >
        <div class="p-4 crosshairs">
          <nuxt-link :to="`/hok/tots/${tot.id}`">
            <img
              :src="`${tot.imageUrl}?w=512`"
              :alt="`Tot #${tot.id}`"
              class="block mx-auto max-h-full"
            />
          </nuxt-link>
        </div>
        <div class="text-xs text-center">
          {{ tot.id }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'hok',
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
