<template>
  <article class="min-h-screen flex flex-col justify-center items-center pt-24">
    <div class="px-8 text-center sm:px-0 sm:w-2/3 md:w-1/2 lg:w-2/5">
      <h1 class="heading-1">
        FIN<br />
        (Her kommer siste siden)
      </h1>
    </div>
  </article>
</template>

<script>
export default {
  name: 'HOK',
  destroyed() {
    localStorage.clear()
  }
}
</script>
