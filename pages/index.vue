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
        class="min-h-101 flex flex-col md:flex-row justify-center md:justify-between items-center container mx-auto"
      >
        <article
          class="flex items-center md:block text-center w-4/6 md:w-1/3 md:px-4 md:px-8 lg:px-16 mb-10 mt-10 md:mb-0 md:mt-0"
        >
          <h1 class="md:mb-4 w-1/4 md:w-auto">I</h1>
          <n-link class="link md:mt-4 block w-2/4 md:w-auto" to="/material">
            <video-component file-name="rawmaterial_480.mp4" :loop="true" />
          </n-link>
          <n-link
            class="link md:mt-4 block w-1/4 flex-grow md:w-auto"
            to="/material"
            >Raw Material</n-link
          >
        </article>

        <article
          class="flex items-center md:block text-center w-4/6 md:w-1/3 md:px-4 md:px-8 lg:px-16 mb-10 md:mb-0"
        >
          <h1 class="md:mb-4 w-1/4 md:w-auto">II</h1>
          <n-link class="link md:mt-4 block w-2/4 md:w-auto" to="/process">
            <video-component file-name="process_480.mp4" :loop="true" />
          </n-link>
          <n-link
            class="link md:mt-4 block w-1/4 flex-grow md:w-auto"
            to="/process"
            >Process</n-link
          >
        </article>

        <article
          class="flex items-center md:block text-center w-4/6 md:w-1/3 md:px-4 md:px-8 lg:px-16 mb-0"
        >
          <h1 class="md:mb-4 w-1/4 md:w-auto">III</h1>
          <n-link class="link md:mt-4 block w-2/4 md:w-auto" to="/outcome">
            <video-component file-name="outcome_480.mp4" :loop="true" />
          </n-link>
          <n-link
            class="link md:mt-4 block w-1/4 flex-grow md:w-auto"
            to="/outcome"
            >Outcome</n-link
          >
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
