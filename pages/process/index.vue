<template>
  <div>
    <section class="h-screen flex flex-col justify-around items-center pt-24">
        <video
          class="max-h-half-screen"
          autoplay="autoplay"
          preload="auto"
          playsinline
          muted="muted"
          poster
          loop
        >
          <source src="~assets/videos/process_loop.mp4" type="video/mp4" />
        </video>
      <article
        class="text-center md:text-left sm:w-2/3 md:w-1/2 lg:w-2/5 px-8 sm:px-0 pb-16"
      >
        <h1 class="text-ocher font-bold text-center mb-4">Process</h1>
        <p class="mb-4">
          The artistic study of the "Tots», has inspired different methods of
          interpretation and transmutation. To carry out the work, a series of
          imaginal characters have emerged, The Dancers. Each of them represent
          a specific operation that the set of 256 Tots must undergo to reach
          their final form as the Ultrahieroglyphic Language.
        </p>
      </article>
      <span class="absolute inset-x-0 bottom-0 text-center">
        <a href="#stations">
          <scroll-hint />
        </a>
      </span>
    </section>

    <section id="stations" class="XXXgrid container mx-auto p-20">
      <header class="grid__header text-center text-ochre pt-16 pb-8">
        <h1 class="text-xl uppercase">The 8 Stations of Work</h1>
      </header>

      <station-item
        v-for="(item, index) in stations"
        :key="item.title"
        :index="index"
      >
        <template v-slot:title>{{ item.title }}</template>
        <template v-slot:img>
          <img :src="item.img" />
        </template>
        <p>{{ item.text }}</p>
      </station-item>
    </section>
  </div>
</template>

<script>
import ScrollHint from '@/components/ScrollHint'
import StationItem from '@/components/StationItem'
export default {
  components: {
    ScrollHint,
    StationItem
  },
  data() {
    return {
      stations: [
        {
          title: 'Station I : Silens',
          img: require('assets/img/process/silens.jpg'),
          text:
            'Contemplating the Tots and their texts in silence - and interpreting them as 256 meditations to make the experience of silence available to everone.'
        },
        {
          title: 'Station II: Tazen',
          img: require('assets/img/process/taz.jpg'),
          text:
            'Setting up a physical infrastructure for our work on the Tots - and interpreting them as 256 strategies to make real autonomy and dignity  available to every being.'
        },
        {
          title: 'Station III: The Information Psychologist',
          img: require('assets/img/process/information_psychologist.jpg'),
          text:
            'Digitizing the Tots - and interpreting them as a collection of 256 ways to live with integrity alongside advanced Technology and Artificial Intelligence. '
        },
        {
          title: 'Station IV:  Lövaman',
          img: require('assets/img/process/lovaman.jpg'),
          text:
            'Bringing the Tots into Nature and Nature into the Tots - and interpreting them as a series of projects to help restitute an honourable relationship to nature.  '
        },
        {
          title: 'Station III: The Axioman',
          img: require('assets/img/process/axioman.jpg'),
          text:
            'Opening up for anyone who would like to contribute to the work with the Tots  - and interpreting the set of Tots as 256 conversations to open hearts.'
        },
        {
          title: 'Station V: Nefer',
          img: require('assets/img/process/nefer.jpg'),
          text:
            'Expanding the visual dimension of the Tots  - and interpreting the set of Tots as the 256 pages of a special book teaching the Language of Patterns.'
        },
        {
          title: 'Station VII: The Signal Workers',
          img: require('assets/img/process/signal_workers.jpg'),
          text:
            'Exploring the sound-dimension of the Tots and interpreting them as 256 evolving musical pieces to open new dimensions of musical appreciation.  '
        },
        {
          title: 'Station VIII : The Molecular Ballet',
          img: require('assets/img/process/molecular_ballet.jpg'),
          text:
            'Bringing each of the above interpretations of the set of 256 Tots together - in a dance practice, The Molecular Ballet - and making any benefit from our process available to everybody.'
        }
      ]
    }
  },
  head() {
    return {
      htmlAttrs: {
        class: 'smooth-scroll'
      }
    }
  }
}
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 50vh;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  grid-template-areas:
    'header header'
    'left right';

  &__header {
    grid-area: header;
  }
}

.smooth-scroll {
  scroll-behavior: smooth;
}
</style>
