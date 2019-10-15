<template>
  <div>
    <div class="flex justify-between min-h-screen pt-24">
      <!-- Prev Axis -->
      <prev-next
        :url="prevPage"
        title="Previous page"
        aria-label="Previous page"
      >
        <svg>
        <path
          d="M9.797 8.5c0 0.125-0.063 0.266-0.156 0.359l-6.141 6.141 6.141 6.141c0.094 0.094 0.156 0.234 0.156 0.359s-0.063 0.266-0.156 0.359l-0.781 0.781c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-7.281-7.281c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l7.281-7.281c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l0.781 0.781c0.094 0.094 0.156 0.219 0.156 0.359z"
        ></path>
        </svg>
      </prev-next>

      <!-- Tot image and text -->
      <div
        v-if="axis.current"
        class="self-center text-center flex flex-col justify-between"
      >
        <img
          v-if="axis.current.hasTot > 0"
          :src="imgSrc(axis.current)"
          class="max-h-60 mb-8 mx-auto"
          :alt="`Tot #${axis.current.id}`"
        />
        <!-- Correspondence -->
        <p class="leading-normal text-sm md:w-1/2 mx-auto">
          <span class="whitespace-pre-wrap text-ocher"
            >#{{ axis.current.id }}. {{ axis.current.text }}</span
          >
        </p>
      </div>

      <!-- Next Axis -->
      <prev-next
        :url="nextPage"
        class="justify-end"
        title="Next page"
        aria-label="Next page"
      >
        <svg>
        <path
          d="M9.297 15c0 0.125-0.063 0.266-0.156 0.359l-7.281 7.281c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-0.781-0.781c-0.094-0.094-0.156-0.219-0.156-0.359 0-0.125 0.063-0.266 0.156-0.359l6.141-6.141-6.141-6.141c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l0.781-0.781c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l7.281 7.281c0.094 0.094 0.156 0.234 0.156 0.359z"
        ></path>
        </svg>
      </prev-next>
    </div>

    <!-- "Close" -->
    <nuxt-link
      to="/material"
      class="absolute bottom-0 right-0 p-4 m-6 text-3xl font-sans"
      title="Close page"
      aria-label="Close page"
    >
      X
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PrevNext from '@/components/PrevNext'

export default {
  components: {
    PrevNext
  },
  computed: {
    ...mapState({
      axis: 'currentCorrespondences'
    }),
    prevPage() {
      return this.axis.prev ? `/material/${this.axis.prev.id}` : null
    },
    nextPage() {
      return this.axis.next ? `/material/${this.axis.next.id}` : null
    }
  },
  async fetch({ store, params, payload }) {
    if (payload) {
      store.commit('setCurrentCorrespondences', payload)
    } else {
      await store.dispatch('fetchCorrespondenceById', params.id)
    }
  },
  methods: {
    imgSrc(tot) {
      // console.log(tot)
      if (tot.image || tot.id) {
        const fileName = tot.image || `Axis%20${tot.id}.jpg`
        return `https://tots.imgix.net/${fileName}?w=512`
      }
      return false
    }
  }
}
</script>
