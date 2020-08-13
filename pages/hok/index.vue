<template>
  <article class="min-h-screen flex flex-col justify-center items-center">
    <div class="px-8 text-center sm:px-0 w-2/3 md:w-3/4 lg:w-3/5">
      <n-link to="/hok/dancers">
        <video
          class="max-h-70 mx-auto"
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
      <h1 class="heading-1">
        Molecular Ballet at Henie Onstad Art Centre
      </h1>
      <p class="mb-8">
        How can we enlarge our language to describe the territory we have
        already entered?
      </p>
      <p class="mb-8">
        On Sunday the 23rd of August at 1200-1500, the sculpture park at HOK is
        transformed into a laboratory to explore and embody a set of new
        hieroglyphs.
      </p>

      <n-link
        class="block heading-1 mt-8 vibrate text-black underline"
        to="/hok/dancers"
      >
        Click to get your ticket and decide which symbols should be danced into
        reality.
      </n-link>

      <footer>
        <ul class="flex justify-center items-center my-8 Xdebug">
          <li class="block px-4">
            <img
              src="~/assets/img/hok/logo_henie_onstad.png"
              title="^O^ = Studioaoa"
              alt="^O^ = Studioaoa logo"
              class="block"
            />
          </li>
          <li class="block px-8">
            <img
              src="~/assets/img/studioaoa.png"
              title="^O^ = Studioaoa"
              alt="^O^ = Studioaoa logo"
              class="block"
              style="width:300px"
            />
          </li>
          <li class="block px-16">
            <img
              src="~/assets/img/hok/logo_Kulturradet_Endorser_Svart.png"
              title="^O^ = Studioaoa"
              alt="^O^ = Studioaoa logo"
              class="block"
            />
          </li>
          <li class="block px-8">
            <img
              src="~/assets/img/hok/logo_ny_hovik.png"
              title="^O^ = Studioaoa"
              alt="^O^ = Studioaoa logo"
              class="block"
            />
          </li>
        </ul>
      </footer>
    </div>
  </article>
</template>

<script>
export default {
  name: 'HOK',
  // layout: 'hok',
  mounted() {
    localStorage.clear()
  }
}
</script>
<style></style>
