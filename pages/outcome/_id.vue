<template>
  <div>
    <div class="flex justify-between min-h-screen pt-24">
      <!-- Prev Page -->
      <prev-next :url="prev" title="Previous page" aria-label="Previous page">
        <path
          d="M9.797 8.5c0 0.125-0.063 0.266-0.156 0.359l-6.141 6.141 6.141 6.141c0.094 0.094 0.156 0.234 0.156 0.359s-0.063 0.266-0.156 0.359l-0.781 0.781c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-7.281-7.281c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l7.281-7.281c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l0.781 0.781c0.094 0.094 0.156 0.219 0.156 0.359z"
        ></path>
      </prev-next>

      <article
        class="h-screen flex flex-col flex-grow justify-around items-center"
      >
        <iframe
          v-if="work.embed"
          width="560"
          height="315"
          :src="work.embed"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <video
          v-else-if="work.video"
          autoplay="autoplay"
          preload="auto"
          playsinline
          muted="muted"
          :loop="loop"
          class="video block max-h-60 max-w-60 mb-8 mx-auto"
        >
          <source :src="work.video" type="video/mp4" />
        </video>

        <img
          v-else-if="work.image"
          :src="work.image"
          class="block max-h-60 max-w-60 mb-8 mx-auto"
          :alt="`Illustration: ${work.title}`"
        />
        <div
          class="text-center md:text-left md:w-3/5 xxl:w-2/5 px-8 sm:px-0 pb-32"
        >
          <h1 class="heading-1">{{ work.title }} {{ work.year }}</h1>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <block-content
            v-if="work.body"
            class-name="rtf"
            :render-container-on-single-child="true"
            :blocks="work.body"
          />
        </div>
      </article>

      <prev-next
        :url="next"
        class="justify-end"
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
      class="absolute bottom-0 right-0 p-4 m-6 text-3xl font-sans"
      title="Close page"
      aria-label="Close page"
    >
      X
    </nuxt-link>
  </div>
</template>

<script>
import PrevNext from '@/components/PrevNext'

export default {
  components: {
    PrevNext
  },
  data() {
    return {
      loop: true,
      id: 1,
      // id: this.$route.params.id,
      content: [
        {
          id: 1,
          title: 'Axis Coryphee, short film 2016',
          text:
            'Part of The Molecular Cycle series.<br>Directed by Ann Holmgren, produced by Studio ^O^.<br>Premiered at the Norwegian Short Film Festival in Grimstad, 2017. ',
          img: require('assets/img/works/b/1B_dedication.gif'),
          embed: ''
        },
        {
          id: 2,
          title: 'Generative animations, 2017-2019',
          text:
            'Experiments in parametric animation using the set of Tots as input. Produced by Studio ^O^',
          video: require('assets/img/works/b/2B_111.mp4')
        },
        {
          id: 3,
          title: 'TAZ RORA HORA, short film, 2013',
          text:
            'Directed by Ann Holmgren, produced by Studio ^O^ in collaboration with Space Klezmer Goylem<br/>Part of The Molecular Cycle series. <br/>Premiered at Høstutstillingen / The Autumn salon, 2014 <br/>Shown as part the wandering exhibition Sekvenser - New Norwegian Video Art at 30 different locations, 2014.',
          img: require('assets/img/works/b/3B_axioman.jpg'),
          embed: ''
        },
        {
          id: 4,
          title: 'The Generator at Rosendal, 2019-',
          text:
            'Work in progress.<br />Directed by Ann Holmgren, produced by Studio ^O^<br />Part of The Molecular Cycle series.',
          img: require('assets/img/works/b/4B_granca.jpg')
        },
        {
          id: 5,
          title: 'Generative animations, 2017-2019',
          text:
            'Experiments in parametric animation using the set of Tots as input.<br />Produced by Studio ^O^',
          video: require('assets/img/works/b/5B_Tot25_animation.mp4')
        },
        {
          id: 6,
          title: 'Pattern design, 2015-2019',
          text:
            'Studies in pattern design using the Tots as input.<br />Feasability study for the Elementa INN project / The New Book of Patterns.',
          img: require('assets/img/works/b/6AB.JPG')
        },
        {
          id: 7,
          title: 'Isomorfik, 2019',
          text:
            'Short film &/ Music video for Norwegian band Space Klezmer Goylem -  set in the universe of The Molecular Ballet, featuring Dancers Axis Eins, The Signal Workers. Part of the Molecular Cycle series.<br />Competed for Best Music Video at the Short Film Festival in Grimstad, 2019<br />Directed by Ann Holmgren, produced by Studio ^O^ and Goylem.<br />Supported by The Norwegian Art Council.',
          embed: 'https://www.youtube.com/embed/FV2PpdnOcCY?controls=0'
        },
        {
          id: 8,
          title: 'Culture Is An Operating System, short film, 2014.',
          text:
            'Directed by Ann Holmgren, produced by Studio ^O^.<br />Part of The Molecular Cycle series.',
          img: require('assets/img/works/b/8B_axis eins.gif')
        },
        {
          id: 9,
          title: 'Prints, 2012-2017',
          text:
            'Series of prints, 20 x 30 cm glicee print on 320g aquarel paper. Edition of 10.',
          img: require('assets/img/works/b/9B_prints.jpg')
        },
        {
          id: 10,
          title: 'Lövaman',
          text:
            'Series of performances and collaborations with Swedish artist Roberto Peyre.',
          img: require('assets/img/works/b/10B_lövaman.gif')
        },
        {
          id: 11,
          title: 'Sanit, films for small children.',
          text:
            'Series of 8 educational films for small children (1-3 years) in the Saami Language, set in the universe of the Molecular Ballet.',
          img: require('assets/img/works/b/11B_sanit.jpg'),
          embed: ''
        },
        {
          id: 12,
          title: 'Imaginal Machines, 2018-',
          text:
            'Animations, studies in fictive machines constructed parametrrically from the Tots.',
          video: require('assets/img/works/b/12_B_.mp4')
        },
        {
          id: 13,
          title: 'Art direction and photography for Elementa, 2010-2019',
          text:
            'Studio ^O^ is engaged as the art director for Norwegian design platform Elementa.',
          img: require('assets/img/works/b/13B_elementa.jpg')
        },
        {
          id: 14,
          title: 'Derive, 2018',
          text:
            'Designed by Emma Staubo and Jomi Evers in collaboration with Studio ^O^. Produced by Elementa. Connected to a listening station placed deep inside the forest, the Derive streams real time sound from nature.',
          video: require('assets/img/works/b/14B_derive.mp4')
        },
        {
          id: 15,
          title: 'Spegel, short film, 2019',
          text:
            'Vignett for BUFF Malmø Film Festival.<br />Directed by Ann Holmgren, produced by Studio ^O^.',
          img: require('assets/img/works/b/15B_axioman_.jpg')
        },
        {
          id: 16,
          title: 'Axis Clip Up, short film, 2013',
          text:
            'Directed by Ann Holmgren, produced by Studio ^O^.<br />Part of the Molecular Cycle series.', // img: require(''),
          img: require('assets/img/works/b/16B_cultureisyouroperatingsystem.gif')
        }
      ]
    }
  },
  async asyncData({ $sanity, params }) {
    const query = `{ 
      "work": *[_type == "work" && slug.current == "${params.id}"][0]{
        _id, title, slug, year, body,
        "embed": asset.embedUrl,
        "image": asset.image.asset->url,
        "video": asset.video.asset->url,
        "categories": categories[]->title
      },
      "entries": *[_type == "work"]{slug}
      }`
    const { work, entries } = await $sanity.fetch(query)

    // out pagination
    const slugs = entries.map((d) => d.slug.current)
    const index = slugs.findIndex((s) => s === work.slug.current)
    const prev = index - 1 > -1 ? `/outcome/${slugs[index - 1]}` : null
    const next =
      index + 1 < slugs.length ? `/outcome/${slugs[index + 1]}` : null
    return { work, prev, next }
  }
}
</script>
