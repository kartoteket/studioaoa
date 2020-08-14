<template>
  <article class="min-h-screen flex flex-col justify-center items-center">
    <div class="px-8 text-center sm:px-0 w-2/3 md:w-3/4 lg:w-3/5">
      <n-link to="/hok/dancers">
        <video
          :poster="require('~/assets/videos/MolecularArsCombinatoriaHOK.jpg')"
          class="max-h-60 mx-auto my-4"
          autoplay="autoplay"
          preload="auto"
          playsinline
          muted="muted"
          loop
        >
          <source
            src="~assets/videos/MolecularArsCombinatoriaHOK.mp4"
            type="video/mp4"
          />
        </video>
      </n-link>
      <h1 class="heading-1">
        Molecular Ballet at HOK
      </h1>
      <p class="mb-8 text-left">
        How can we expand our language to describe the territory we have already
        entered? On Sunday the 23rd of August at 1200, the sculpture park at
        Henie Onstad Kunstsenter will be transformed into a hieroglyphic dance
        laboratory.
      </p>

      <n-link class="block  mt-8 underline" to="/hok/dancers">
        Join the ballet!
      </n-link>

      <footer>
        <img
          src="~/assets/img/hok/logos.png"
          alt="logo"
          class="block my-4 w-full"
        />

        <!-- <ul class="flex justify-center items-center my-8 Xdebug">
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
        </ul> -->
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
