<template>
  <div>
    <transition name="fade">
      <div
        v-if="!isDone"
        class="min-h-screen flex justify-center items-center pt-10"
      >
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
      <div
        v-if="isDone"
        class="min-h-screen flex justify-between items-center container mx-auto"
        style="height:100px"
      >
        <article class="text-center w-1/3 px-16">
          <h1 class="mb-4">I</h1>
          <video-component
            file-name="rawmaterial_480.mp4"
            :loop="true"
            poster="rawmaterial_still.jpg"
          />
          <n-link class="mt-4 block" to="/material">Raw Material</n-link>
        </article>
        <article class="text-center w-1/3 px-16">
          <h1 class="mb-4">II</h1>
          <video-component
            file-name="process_480.mp4"
            :loop="true"
            poster="process_still.jpg"
          />
          <n-link class="mt-4 block" to="/process">Process</n-link>
        </article>
        <article class="text-center w-1/3 px-16">
          <h1 class="mb-4">III</h1>
          <video-component
            file-name="outcome_480.mp4"
            :loop="true"
            poster="outcome_still.jpg"
          />
          <n-link class="mt-4 block" to="/outcome">Outcome</n-link>
        </article>
      </div>
    </transition>
  </div>
</template>

<script>
import VideoComponent from '@/components/Video'
export default {
  components: {
    VideoComponent
  },
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
