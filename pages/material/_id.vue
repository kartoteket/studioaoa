<template>
  <div>
    <div class="flex justify-between jus min-h-screen pt-24">
      <!-- Prev Axis -->
      <prev-next :axis="axis.prev">
        <path
          d="M9.797 8.5c0 0.125-0.063 0.266-0.156 0.359l-6.141 6.141 6.141 6.141c0.094 0.094 0.156 0.234 0.156 0.359s-0.063 0.266-0.156 0.359l-0.781 0.781c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-7.281-7.281c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l7.281-7.281c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l0.781 0.781c0.094 0.094 0.156 0.219 0.156 0.359z"
        ></path>
      </prev-next>

      <!-- Tot image and text -->
      <div class="self-center text-center">
        <img
          v-if="axis.current.hasTot > 0"
          :src="imgSrc(axis.current.id)"
          class="max-h-60 mb-8 mx-auto"
        />
        <!-- Correspondence -->
        <p class="leading-normal text-sm text-grey-darkest md:w-1/2 mx-auto">
          <span class="whitespace-pre-wrap text-ocher"
            >#{{ axis.current.id }}. {{ axis.current.text }}</span
          >
        </p>
      </div>

      <!-- Next Axis -->
      <prev-next :axis="axis.next" class="justify-end">
        <path
          d="M9.297 15c0 0.125-0.063 0.266-0.156 0.359l-7.281 7.281c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-0.781-0.781c-0.094-0.094-0.156-0.219-0.156-0.359 0-0.125 0.063-0.266 0.156-0.359l6.141-6.141-6.141-6.141c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l0.781-0.781c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l7.281 7.281c0.094 0.094 0.156 0.234 0.156 0.359z"
        ></path>
      </prev-next>
    </div>

    <!-- "Close" -->
    <nuxt-link
      to="/material"
      class="absolute bottom-0 right-0 p-4 m-6 text-3xl font-sans"
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
    })
  },
  async fetch({ store, params, payload }) {
    if (payload) {
      store.commit('setCurrentCorrespondences', payload)
    } else {
      await store.dispatch('fetchCorrespondenceById', params.id)
    }
  },
  methods: {
    imgSrc(id) {
      if (id) {
        return `http://tots.imgix.net/Axis%20${id}.jpg?w=512`
      }
      return false
    }
  }
}
</script>
