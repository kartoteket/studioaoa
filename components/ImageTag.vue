<template>
  <img
    :src="`${imageUrl}?w=400`"
    alt="Illustration"
    class="block w-full mb-8 mx-auto"
  />
</template>
<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: ''
    }
  }
}
</script>
