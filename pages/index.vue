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
          class="max-h-60 border-0"
          @ended="onEnd()"
          @canplay="fadeIn()"
        >
          <source src="~assets/videos/silens.mp4" type="video/mp4" />
        </video>
      </div>
    </transition>

    <transition name="slideup">
      <div
        v-if="isDone"
        class="min-h-101 flex justify-between items-center container mx-auto"
      >
        <article class="text-center w-1/3 px-4 md:px-8 lg:px-16">
          <h1 class="mb-4">I</h1>
          <video-component file-name="rawmaterial_480.mp4" :loop="true" />
          <n-link class="link mt-4 block" to="/material">Raw Material</n-link>
        </article>
        <article class="text-center w-1/3 px-4 md:px-8 lg:px-16">
          <h1 class="mb-4">II</h1>
          <video-component file-name="process_480.mp4" :loop="true" />
          <n-link class="mt-4 block" to="/process">Process</n-link>
        </article>
        <article class="text-center w-1/3 px-4 md:px-8 lg:px-16">
          <h1 class="mb-4">III</h1>
          <video-component file-name="outcome_480.mp4" :loop="true" />
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
      isReady: true, // ! buggy - seems to sometimes fail
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
