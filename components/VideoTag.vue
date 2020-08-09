<template>
  <video
    :loop="loop"
    autoplay="autoplay"
    preload="auto"
    playsinline
    muted="muted"
    class="video block max-h-60 max-w-60 mb-8 mx-auto"
  >
    <source :src="video" type="video/mp4" />
  </video>
</template>
<script>
export default {
  props: {
    video: {
      type: String,
      default: ''
    },
    loop: {
      type: Boolean,
      default: true // currently all videos always run in loop by default
    }
  }
}
</script>
