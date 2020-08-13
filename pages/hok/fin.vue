<template>
  <article class="min-h-screen flex flex-col justify-center items-center pt-24">
    <div class="px-8 pb-32 text-center sm:px-0 sm:w-2/3 lg:w-3/5">
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
      <p class="text-ocher mb-4">
        Thank you! That was all.
      </p>
      <p class="text-left mb-4">
        See you at Henie Onstad Kunstsenter, 23rd of August 1200-1500 - or on
        the live stream. We will send you an email with a map, information and a
        link to the live stream should you wish to follow online. Please print
        or screen dump this page for your reference.
      </p>
      <p class="text-ocher mb-4">
        Your name:
      </p>
      <p class="mb-4">
        {{ name }}
      </p>
      <p class="text-ocher mb-4">
        Your Dancer:
      </p>
      <p class="mb-4">
        {{ dancer.title }}
      </p>
      <p class="text-ocher mb-4">
        Your Tot:
      </p>
      <p class="mb-4">
        {{ tot.title }}
      </p>

      <p class="text-ocher mb-4">
        A meditation seed to prepare you for the Dance:
      </p>
      <p class="mb-4">
        Superstitions may be untrue but based on deeper truth—that earth is a
        living being. Science may be true, i.e. effective, while based on a
        deeper untruth—that matter is dead.
      </p>
      <p>
        <n-link to="/" class="underline">Back to ^O^</n-link>
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Fin',
  // layout: 'hok',
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

    // console.log(this.name, this.selectedDancer, this.selectedTot)

    const query = `{
      "tot": *[_type == "axis" && id == ${this.selectedTot}][0] | {_id, id, title, slug, text, "imageUrl": axisTot.asset->url},
      "dancer": *[_type == "dancer" && slug.current == "${this.selectedDancer}"][0] | {_id, title, slug, about, "imageUrl_2": assets.image_2.asset->url, "imageUrl_3": assets.image_3.asset->url},
    }`
    // console.log('query', query)
    const result = await this.$sanity.fetch(query)
    // console.log('result', result)
    this.tot = result.tot
    this.dancer = result.dancer
  }
  // destroyed() {
  //   localStorage.clear()
  // }
}
</script>
