<template>
  <div class="font-serif min-h-screen">
    <header class="flex justify-between items-center fixed w-full z-10">
      <h1 class="my-4">
        <a href="/">
          <img
            src="~/assets/img/studioaoa.png"
            title="^O^ = Studioaoa"
            alt="^O^ = Studioaoa logo"
            width="80"
            class="m-8"
          />
        </a>
      </h1>
      <a href="http://hok.no/">
        <img
          src="~/assets/img/hok/logo_henie_onstad.png"
          title="^O^ = Studioaoa"
          alt="^O^ = Studioaoa logo"
          width="80"
          class="m-8"
        />
      </a>
    </header>
    <nuxt />
    <footer class="flex justify-between items-center fixed w-full z-10 -mt-20">
      <a href="https://www.kulturradet.no/">
        <img
          src="~/assets/img/hok/logo_Kulturradet_Endorser_Svart.png"
          title="^O^ = Studioaoa"
          alt="^O^ = Studioaoa logo"
          width="120"
          class="m-8"
        />
      </a>
      <a href="http://annchristinkongsness.com/Ny-Hovik-Ballett">
        <img
          src="~/assets/img/hok/logo_ny_hovik.png"
          title="^O^ = Studioaoa"
          alt="^O^ = Studioaoa logo"
          width="100"
          class="m-8"
        />
      </a>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'HOKLayout'
}
</script>
