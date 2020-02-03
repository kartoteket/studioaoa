<template>
  <section class="p-12 pt-24">
    <article class="sm:w-4/5 lg:w-3/5 xl:w-1/3 mx-auto my-10">
      <h1 class="heading-1">
        Selected works
      </h1>
      <p>
        The 10 years 2010-2019 have been dedicated to collecting the Tots, and
        setting up the experimental methodology of interpretation. The study of
        the Tots, their texts and the Dancers of the Molecular Ballet, has
        resulted in collaborations and manifestations in fields, such as cinema
        and animation, music, photography, theatre and design - all towards the
        development of the Ultrahieroglyphic.
      </p>
    </article>

    <div
      class="flex flex-wrap justify-between pt-8 px-8 lg:px-20 container mx-auto"
    >
      <n-link
        v-for="(item, index) in works"
        :key="index"
        :to="`/outcome/${item.slug.current}`"
        :index="index"
        class="mb-3 max-w-40 md:max-w-none"
      >
        <img
          :src="item.imageUrl"
          :alt="`Illustration: ${item.title}`"
          class="x-height max-w-none"
        />
      </n-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      works_temp: [
        require('assets/img/works/a/1A_ballerina.gif'),
        require('assets/img/works/a/2A_111.jpg'),
        require('assets/img/works/a/3A_axioman_taz.jpg'),
        require('assets/img/works/a/4A_granca_t.jpg'),
        require('assets/img/works/a/5A_tot25.jpg'),
        require('assets/img/works/a/6AB.JPG'),
        require('assets/img/works/a/7A_signalwork.gif'),
        require('assets/img/works/a/8A_axis eins.gif'),
        require('assets/img/works/a/9A.JPG'),
        require('assets/img/works/a/10A_lövaman.gif'),
        require('assets/img/works/a/11A_sanit.jpg'),
        require('assets/img/works/a/12_A.jpg'),
        require('assets/img/works/a/13a_elementa.jpg'),
        require('assets/img/works/a/14A_derive.jpg'),
        require('assets/img/works/a/15A_axioman.jpg'),
        require('assets/img/works/a/16A_information psychologist.gif')
      ]
    }
  },
  async asyncData({ $sanity }) {
    const query =
      '{ "works": *[_type == "work" && defined(coverImage)]{_id, title, slug, "imageUrl": coverImage.asset->url} }'
    const { works } = await $sanity.fetch(query)
    //    console.log(works)
    return { works }
  },
  head() {
    return {
      htmlAttrs: {
        class: 'smooth-scroll'
      }
    }
  },
  mounted() {
    console.log(this.works)
  }
}
</script>

<style>
.x-height {
  height: 150px;
}
.grid {
  display: inline-grid;
  grid-template-columns: auto;
  grid-template-rows: 100px;
  grid-auto-rows: 50px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
</style>
