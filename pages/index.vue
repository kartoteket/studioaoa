<template>
  <div>
    <transition name="fade">
      <div v-if="!isDone" class="min-h-screen flex justify-center items-center">
        <video
          v-show="isReady"
          id="silensVideo"
          autoplay="autoplay"
          preload="auto"
          playsinline
          muted="muted"
          poster
          @ended="onEnd()"
          @canplay="fadeIn()"
        >
          <source src="~assets/videos/1_silens.mp4" type="video/mp4" />
        </video>
      </div>
    </transition>

    <transition name="slideup">
      <div v-if="isDone" class="min-h-screen flex justify-between items-center">
        <video
          id="silensVideo"
          autoplay="autoplay"
          preload="auto"
          playsinline
          muted="muted"
          poster
          loop
        >
          <source src="~assets/videos/rawmaterial_480.mp4" type="video/mp4" />
        </video>

        <video
          id="silensVideo"
          autoplay="autoplay"
          preload="auto"
          playsinline
          muted="muted"
          poster
          loop
        >
          <source src="~assets/videos/process_480.mp4" type="video/mp4" />
        </video>

        <video
          id="silensVideo"
          autoplay="autoplay"
          preload="auto"
          playsinline
          muted="muted"
          poster
          loop
        >
          <source src="~assets/videos/outcome_480.mp4" type="video/mp4" />
        </video>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isReady: false,
      isDone: false
    }
  },
  methods: {
    onEnd() {
      this.isDone = true
    },
    fadeIn() {
      this.isReady = true
    }
  }
  // computed: {
  //   videoURL() {
  //     const i = Math.floor(Math.random() * 3)
  //     return `video/${this.videos[i]}`
  //   }
  // },
  // transition(to, from) {
  //   if (!from) return 'slide-right'
  //   return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  // }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slideup-enter-active,
.slideup-leave-active {
  transform: translateY(0);
  overflow: hidden;
  transition: transform 3s ease-in-out;
}

.slideup-enter,
.slideup-leave-to {
  transform: translateY(100vh);
}

.Xvideo {
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
