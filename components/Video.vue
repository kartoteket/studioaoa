<template>
  <video
    autoplay="autoplay"
    preload="auto"
    playsinline
    muted="muted"
    :poster="posterSrc"
    :loop="loop"
    class="video inline-block"
  >
    <source :src="src" type="video/mp4" />
  </video>
</template>

<script>
export default {
  name: 'VideoComponent',
  props: {
    fileName: {
      type: String,
      required: true
    },
    poster: {
      type: String,
      default: null
    },
    loop: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    src() {
      return require(`assets/videos/${this.fileName}`)
    },
    posterSrc() {
      if (this.poster) {
        return require(`assets/videos/${this.poster}`)
      }
      return ''
    }
  }
}
</script>

<style>
.video {
  height: 50%;
}
</style>
