<template>
  <article
    :class="{ 'flex-row-reverse': index % 2 }"
    class="flex items-center justify-between mb-32"
  >
    <figure class="w-1/2 xl:w-3/5 block">
      <slot name="img"></slot>
    </figure>
    <div class="w-1/2 xl:w-2/5">
      <h1 class="heading-2">
        <slot name="title"></slot>
      </h1>
      <slot></slot>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    }
  }
}
</script>

<style></style>
