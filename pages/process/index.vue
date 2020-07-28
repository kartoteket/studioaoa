<template>
  <div>
    <section class="h-screen flex flex-col justify-around items-center pt-24">
      <n-link to="/process/stations">
        <video
          class="max-h-70"
          autoplay="autoplay"
          preload="auto"
          playsinline
          muted="muted"
          poster
          loop
        >
          <source src="~assets/videos/process_loop.mp4" type="video/mp4" />
        </video>
      </n-link>
      <article
        class="text-center md:text-left sm:w-2/3 md:w-1/2 lg:w-2/5 px-8 sm:px-0 pb-16"
      >
        <h1 class="heading-1">
          {{ entry.title }}
        </h1>
        <block-content
          v-if="entry.text"
          :render-container-on-single-child="true"
          :blocks="entry.text"
          class-name="rtf mb-4"
        />
        <p class="text-center underline">
          <a href="/process/stations">The 8 Stations of Work</a>
        </p>
      </article>
      <!-- <span class="absolute inset-x-0 bottom-0 text-center">
      </span> -->
    </section>
  </div>
</template>

<script>
export default {
  name: 'Process',
  async asyncData({ $sanity }) {
    const query = `{
    "entry": *[_type == "page" && slug.current == "process"][0] | {id, title, slug, text},
    }`
    const result = await $sanity.fetch(query)
    return result
  }
}
</script>
