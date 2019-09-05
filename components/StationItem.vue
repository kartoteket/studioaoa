<template>
  <article
    class="flex items-center float-right mb-32"
    :class="{ 'flex-row-reverse': index % 2 }"
  >
    <figure class="w-3/5 block">
      <slot name="img"></slot>
    </figure>
    <div class="w-2/5">
      <h1 class="text-ocher font-bold">
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
