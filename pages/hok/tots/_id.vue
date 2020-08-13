<template>
  <div>
    <div class="flex justify-between min-h-screen">
      <!-- Prev Axis -->
      <prev-next
        :url="prevPage"
        title="Previous page"
        aria-label="Previous page"
      >
        <svg v-show="!totIsPicked">
          <path
            d="M9.797 8.5c0 0.125-0.063 0.266-0.156 0.359l-6.141 6.141 6.141 6.141c0.094 0.094 0.156 0.234 0.156 0.359s-0.063 0.266-0.156 0.359l-0.781 0.781c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-7.281-7.281c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l7.281-7.281c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l0.781 0.781c0.094 0.094 0.156 0.219 0.156 0.359z"
          ></path>
        </svg>
      </prev-next>

      <!-- Tot image and text -->
      <div
        v-if="entry"
        class="self-center text-center flex flex-col justify-between"
      >
        <h1 v-show="!totIsPicked" class="vibrate text-center mb-8">
          Klick on the TOT to choose it, or use the arrows to navigate the
          collection.
        </h1>
        <a @click.prevent="setTot(entry.id)">
          <img
            v-if="entry.imageUrl"
            :src="`${entry.imageUrl}?w=512`"
            :alt="`Tot #${entry.id}`"
            :class="{ shrink: totIsPicked }"
            class="max-h-60 mb-8 mx-auto tot"
          />
        </a>

        <!-- Correspondence -->
        <div
          v-show="!totIsPicked"
          class="leading-normal text-sm md:w-1/2 mx-auto"
        >
          <span class="text-ocher">{{ entry.title }}. </span>
          <block-content
            v-if="entry.text"
            :render-container-on-single-child="true"
            :blocks="entry.text"
            class-name="rtf text-ocher"
          />
        </div>
      </div>

      <!-- Next Axis -->
      <prev-next
        :url="nextPage"
        class="justify-end"
        title="Next page"
        aria-label="Next page"
      >
        <svg v-show="!totIsPicked">
          <path
            d="M9.297 15c0 0.125-0.063 0.266-0.156 0.359l-7.281 7.281c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-0.781-0.781c-0.094-0.094-0.156-0.219-0.156-0.359 0-0.125 0.063-0.266 0.156-0.359l6.141-6.141-6.141-6.141c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l0.781-0.781c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l7.281 7.281c0.094 0.094 0.156 0.234 0.156 0.359z"
          ></path>
        </svg>
      </prev-next>
    </div>

    <!-- "Close" -->
    <nuxt-link
      v-show="!totIsPicked"
      to="/hok/tots"
      class="absolute bottom-0 right-0 p-4 m-6 text-3xl font-sans z-10"
      title="Close page"
      aria-label="Close page"
    >
      X
    </nuxt-link>

    <!-- Black Box -->
    <cube :class="{ show: totIsPicked }" :spin="totIsPicked" class="cube" />
  </div>
</template>

<script>
import PrevNext from '@/components/PrevNext'
import Cube from '@/components/Cube'

export default {
  // layout: 'hok',
  components: {
    PrevNext,
    Cube
  },
  data() {
    return {
      totIsPicked: false
    }
  },
  computed: {
    prevPage() {
      return `/hok/tots/${this.entry.id - 1}`
      // return this.axis.prev ? `/hok/tots/${this.axis.prev.id}` : null
    },
    nextPage() {
      return `/hok/tots/${this.entry.id + 1}`
      // return this.axis.next ? `/hok/tots/${this.axis.next.id}` : null
    }
  },
  async asyncData({ $sanity, params }) {
    const query = `{
      "entry": *[_type == "axis" && id == ${params.id}][0] | {_id, id, title, slug, text, "imageUrl": axisTot.asset->url},
    }`
    const result = await $sanity.fetch(query)
    return result
  },
  methods: {
    setTot(id) {
      // this.selectedTot = id
      localStorage.setItem('tot', id)
      localStorage.setItem('step', 4)
      this.totIsPicked = true
      setTimeout(() => this.$router.push({ path: '/hok/guide' }), 2900)
    }
  }
}
</script>
<style>
.cube {
  visibility: hidden;
  position: absolute;
  top: 125%;
  left: 50%;
  transform: translateX(-50%) rotateX(-5deg) rotateY(-30deg);
  transition: top 2s;
}

.show {
  visibility: visible;
  top: 50%;
}

.shrink {
  animation: shrink 3s ease-in-out forwards;
}

@keyframes shrink {
  0% {
    transform: translateY(0) scale(1);
  }
  40% {
    transform: translateY(-30%) scale(0.75);
  }
  47% {
    transform: translateY(-30%) scale(0.75);
  }
  80% {
    transform: translateY(10%) scale(0.5);
  }
  100% {
    transform: translateY(20%) scale(0);
  }
}
</style>
