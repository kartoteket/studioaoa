<template>
  <img
    :src="`${imageUrl}?w=800&fit=max&auto=format&quality=100`"
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
