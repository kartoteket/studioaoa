<template>
  <div>
    <div class="flex justify-between min-h-screen pt-24">
      <!-- Prev Page -->
      <prev-next
        :url="prev"
        class="fixed"
        title="Previous page"
        aria-label="Previous page"
      >
        <path
          d="M9.797 8.5c0 0.125-0.063 0.266-0.156 0.359l-6.141 6.141 6.141 6.141c0.094 0.094 0.156 0.234 0.156 0.359s-0.063 0.266-0.156 0.359l-0.781 0.781c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-7.281-7.281c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l7.281-7.281c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l0.781 0.781c0.094 0.094 0.156 0.219 0.156 0.359z"
        ></path>
      </prev-next>

      <article
        class="min-h-screen flex flex-col flex-grow justify-around items-center"
      >
        <iframe
          v-if="work.embed"
          :src="work.embed"
          width="560"
          height="315"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <video
          v-else-if="work.video"
          :loop="loop"
          autoplay="autoplay"
          preload="auto"
          playsinline
          muted="muted"
          class="video block max-h-60 max-w-60 mb-8 mx-auto"
        >
          <source :src="work.video" type="video/mp4" />
        </video>

        <img
          v-else-if="work.image"
          :src="`${work.image}?w=300`"
          :alt="`Illustration: ${work.title}`"
          class="block max-h-60 max-w-60 mb-8 mx-auto"
        />

        <div
          class="text-center md:text-left w-full w-7/8 sm:w-2/4 xxl:w-2/5 px-8 sm:px-0 pb-32"
        >
          <h1 class="heading-1">{{ work.title }} {{ work.year }}</h1>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <block-content
            v-if="work.body"
            :render-container-on-single-child="true"
            :blocks="work.body"
            class-name="rtf flex flex-col items-center"
          />

          <!-- eslint-disable-next-line vue/no-v-html -->
          <block-content
            v-if="work.content"
            :render-container-on-single-child="true"
            :blocks="work.content"
            :serializers="serializers"
            class-name="rtf flex flex-col items-center"
          />
        </div>
      </article>

      <prev-next
        :url="next"
        class="justify-end fixed right-0"
        title="Next page"
        aria-label="Next page"
      >
        <path
          d="M9.297 15c0 0.125-0.063 0.266-0.156 0.359l-7.281 7.281c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-0.781-0.781c-0.094-0.094-0.156-0.219-0.156-0.359 0-0.125 0.063-0.266 0.156-0.359l6.141-6.141-6.141-6.141c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l0.781-0.781c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l7.281 7.281c0.094 0.094 0.156 0.234 0.156 0.359z"
        ></path>
      </prev-next>
    </div>

    <!-- "Close" -->
    <nuxt-link
      to="/outcome"
      class="fixed bottom-0 right-0 p-4 m-6 text-3xl font-sans"
      title="Close page"
      aria-label="Close page"
    >
      X
    </nuxt-link>
  </div>
</template>

<script>
import PrevNext from '@/components/PrevNext'
import Youtube from '@/components/YouTube'
import ImageTag from '@/components/ImageTag'

export default {
  components: {
    PrevNext
  },
  data() {
    return {
      loop: true,
      id: 1,
      serializers: {
        types: {
          embedUrl: Youtube,
          image: ImageTag
        }
      }
    }
  },
  async asyncData({ $sanity, params }) {
    const query = `{
      "work": *[_type == "work" && slug.current == "${params.id}"][0]{
        _id, title, slug, year, body, content[]{..., "imageUrl": asset->url },
        "embed": asset.embedUrl,
        "image": asset.image.asset->url,
        "video": asset.video.asset->url,
        "categories": categories[]->title
      },
      "entries": *[_type == "work" && defined(slug)]{slug}
      }`
    const { work, entries } = await $sanity.fetch(query)
    let prev = null
    let next = null
    // out pagination
    if (work && entries.length) {
      const slugs = entries.map((d) => d.slug.current)
      const index = slugs.findIndex((s) => s === work.slug.current)
      prev = index - 1 > -1 ? `/outcome/${slugs[index - 1]}` : null
      next = index + 1 < slugs.length ? `/outcome/${slugs[index + 1]}` : null
    }
    return { work, prev, next }
  }
}
</script>
