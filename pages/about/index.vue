<template>
  <article class="min-h-screen flex flex-col justify-center items-center pt-24">
    <video
      class="max-h-40 mb-8"
      autoplay="autoplay"
      preload="auto"
      playsinline
      muted="muted"
      poster
      loop
    >
      <source src="~assets/videos/aboutAOA_720.mp4" type="video/mp4" />
    </video>
    <div
      class="px-8 text-center md:text-left sm:px-0 sm:w-2/3 md:w-1/2 lg:w-2/5"
    >
      <h1 class="heading-1">
        {{ entry.title }}
      </h1>
      <block-content
        v-if="entry.text"
        :render-container-on-single-child="true"
        :blocks="entry.text"
        class-name="rtf"
      />
      <p class="my-8 text-center">
        <a href="mailto:info@studioaoa.no" class="underline text-ocher"
          >info@studioaoa.no</a
        >
        |
        <a
          href="http://www.instagram.com/molecularballet/"
          class="underline text-ocher"
          >www.instagram.com/molecularballet</a
        >
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'About',
  async asyncData({ $sanity }) {
    const query = `{
    "entry": *[_type == "page" && slug.current == "about"][0] | {id, title, slug, text},
    }`
    const result = await $sanity.fetch(query)
    return result
  }
}
</script>

<style></style>
