<template>
  <div class="cover">
    <video
      autoplay="autoplay"
      preload="auto"
      playsinline
      muted="muted"
      loop="loop"
      poster
      class="video"
    >
      <source :src="videoURL" type="video/mp4" />
    </video>
    <Menu />
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
export default {
  components: {
    Menu
  },
  data() {
    return {
      videos: [
        'Axis-111-_3_Splurge-Qoma-Aleph-2_444.mp4',
        'Axis-111 _2_Splurge-Qoma-Aleph-2_444.mp4',
        'Qoma-Aleph_W2_onsdag_sett6.mp4'
      ]
    }
  },
  computed: {
    videoURL() {
      const i = Math.floor(Math.random() * 3)
      return `video/${this.videos[i]}`
    }
  },
  transition(to, from) {
    if (!from) return 'slide-right'
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  }
}
</script>

<style>
.video {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: 100%;
  min-height: 100%;
  max-width: none;
  max-height: none;
  width: auto;
  height: auto;
  z-index: -1;
  overflow: hidden;
}
</style>
