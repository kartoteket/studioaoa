<template>
  <article class="min-h-screen flex flex-col justify-center items-center pt-24">
    <div class="px-8 pb-32 text-center sm:px-0 sm:w-2/3 md:w-1/2 lg:w-2/5">
      <div class="flex">
        <img
          v-if="dancer.imageUrl_2"
          :src="`${dancer.imageUrl_2}?w=512`"
          :alt="`Tot #${tot.id}`"
          class="max-h-40 mb-8 mx-auto"
        />
        <img
          v-if="tot.imageUrl"
          :src="`${tot.imageUrl}?w=512`"
          :alt="`Tot #${tot.id}`"
          class="max-h-40 mb-8 mx-auto"
        />
      </div>
      <p class="text-ocher">
        Your name:
      </p>
      <p class="mb-8">
        {{ name }}
      </p>
      <p class="text-ocher">
        Your Dancer:
      </p>
      <p class="mb-8">
        {{ dancer.title }}
      </p>
      <p class="text-ocher">
        Your Tot:
      </p>
      <p class="mb-8">
        {{ tot.title }}
      </p>

      <p class="text-ocher">A meditation seed to prepare you for the Dance:</p>
      <p class="mb-8">
        Superstitions may be untrue but based on deeper truth—that earth is a
        living being. Science may be true, i.e. effective, while based on a
        deeper untruth—that matter is dead.
      </p>

      <p class="text-ocher">See you at:</p>
      <p>Henie Onstad Kunstsenter, 23rd of August</p>
      <p>Or on the online live stream.</p>
      <p>Please photograph this page for reference.</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Fin',
  layout: 'hok',
  data() {
    return {
      name: '',
      selectedDancer: '',
      selectedTot: null,
      dancer: {},
      tot: {}
    }
  },
  async mounted() {
    this.name = localStorage.getItem('userName')
    this.selectedDancer = localStorage.getItem('dancer')
    this.selectedTot = localStorage.getItem('tot') * 1

    console.log(this.name, this.selectedDancer, this.selectedTot)

    const query = `{
      "tot": *[_type == "axis" && id == ${this.selectedTot}][0] | {_id, id, title, slug, text, "imageUrl": axisTot.asset->url},
      "dancer": *[_type == "dancer" && slug.current == "${this.selectedDancer}"][0] | {_id, title, slug, about, "imageUrl_2": assets.image_2.asset->url, "imageUrl_3": assets.image_3.asset->url},
    }`
    console.log('query', query)
    const result = await this.$sanity.fetch(query)
    console.log('result', result)
    this.tot = result.tot
    this.dancer = result.dancer
  }
  // destroyed() {
  //   localStorage.clear()
  // }
}
</script>
