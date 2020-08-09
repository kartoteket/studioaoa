<template>
  <article class="min-h-screen flex flex-col justify-center items-center">
    <div class="px-8 text-center sm:px-0 w-2/3 md:w-1/2 lg:w-2/5">
      <h1 class="heading-1">
        Molecular Ballet at HOK 23rd of August 2020
      </h1>
      <p class="mb-12">
        How can we enlarge our language to describe<br />
        the territory we have already entered?
      </p>
      <n-link to="/hok/dancers">
        <video
          class="max-h-50 mx-auto"
          autoplay="autoplay"
          preload="auto"
          playsinline
          muted="muted"
          poster
          loop
        >
          <source
            src="~assets/videos/Cheth 13_1_utviklet 2_2_1_1.mp4"
            type="video/mp4"
          />
        </video>
      </n-link>
      <n-link class="block heading-1 mt-8 vibrate" to="/hok/dancers">
        Click to join the dance!
      </n-link>
    </div>
  </article>
</template>

<script>
export default {
  name: 'HOK',
  layout: 'hok',
  mounted() {
    localStorage.clear()
  }
}
</script>
<style></style>
