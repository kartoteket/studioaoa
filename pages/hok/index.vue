<template>
  <article class="min-h-screen flex flex-col justify-center items-center pt-24">
    <div class="px-8 text-center sm:px-0 sm:w-2/3 md:w-1/2 lg:w-2/5">
      <h1 class="heading-1">
        Molecular Ballet at HOK 23rd of August 2020
      </h1>
      <n-link to="/hok/dancers">
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
      <n-link class="block heading-1 text-2xl vibrate" to="/hok/dancers">
        Join the Dance!
      </n-link>
    </div>
  </article>
</template>

<script>
export default {
  name: 'HOK',
  mounted() {
    localStorage.clear()
  }
}
</script>
<style>
.vibrate {
  animation: 2.5s shake cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite alternate;
  /* animation: shake 0.82s  both; */
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* @keyframes shake {
  0% {
    transform: skewX(-15deg);
  }
  5% {
    transform: skewX(15deg);
  }
  10% {
    transform: skewX(-15deg);
  }
  15% {
    transform: skewX(15deg);
  }
  20% {
    transform: skewX(0deg);
  }
  100% {
    transform: skewX(0deg);
  }
} */
@keyframes shake {
  2%,
  18% {
    transform: translate3d(-1px, -1px, 0);
  }

  4%,
  16% {
    transform: translate3d(2px, 1px, 0);
  }

  6%,
  10%,
  14% {
    transform: translate3d(-4px, -2px, 0);
  }

  8%,
  12% {
    transform: translate3d(4px, 2px, 0);
  }
}
</style>
