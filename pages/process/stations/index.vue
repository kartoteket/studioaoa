<template>
  <div>
    <section id="stations" class="container mx-auto px-8 lg:px-20">
      <header class="grid__header text-center text-ochre pt-16 pb-8">
        <h1 class="text-xl text-ocher">8 Stations of work</h1>
      </header>

      <station-item
        v-for="(item, index) in stations"
        :key="item.title"
        :index="index"
      >
        <template v-slot:title>{{ item.title }}</template>
        <template v-slot:img>
          <img :src="item.img" :alt="item.title" />
        </template>
        <p>{{ item.text }}</p>
      </station-item>
    </section>

    <!-- "Close" -->
    <nuxt-link
      to="/process"
      class="fixed bottom-0 right-0 p-4 m-6 text-3xl font-sans"
    >
      X
    </nuxt-link>
  </div>
</template>

<script>
import StationItem from '@/components/StationItem'
export default {
  components: {
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
