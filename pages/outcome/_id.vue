<template>
  <div>
    <article class="h-screen flex flex-col justify-around items-center pt-24">
      <img
        v-if="content[id].img"
        :src="content[id].img"
        class="block max-h-60 mb-8 mx-auto"
      />
      <div
        class="text-center md:text-left sm:w-2/3 md:w-1/2 lg:w-2/5 px-8 sm:px-0 pb-16"
      >
        <h1 class="heading-1">
          {{ content[id].title }}
        </h1>
        <p class="mb-4"></p>
      </div>
    </article>
    <!-- "Close" -->
    <nuxt-link
      to="/outcome"
      class="absolute bottom-0 right-0 p-4 m-6 text-3xl font-sans"
    >
      X
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      content: [
        {
          title: 'Ballerina',
          text: '',
          img: require('assets/img/works/b/1B_dedication.gif'),
          embed: ''
        },
        {
          title: 'wip',
          text: '111',
          video: 'assets/img/works/b/2B_111.mp4',
          // img: require(''),
          embed: ''
        },
        {
          title: 'wip',
          text: 'Axioman',
          img: require('assets/img/works/b/3B_axioman.jpg'),
          embed: ''
        },
        {
          title: 'wip',
          text: 'Granca',
          img: require('assets/img/works/b/4B_granca.jpg'),
          embed: ''
        },
        {
          title: 'wip',
          text: 'tot25',
          video: 'assets/img/works/b/5B_Tot25_animation.mp4',
          // img: require(''),
          embed: ''
        },
        {
          title: 'wip',
          text: '6',
          img: require('assets/img/works/b/6AB.JPG'),
          embed: ''
        },
        {
          title: 'axis eins',
          text: '',
          // img: require(''),
          embed: ''
        },
        {
          title: 'prints',
          text: '',
          // img: require(''),
          embed: ''
        },
        {
          title: 'Lövaman',
          text: '',
          // img: require(''),
          embed: ''
        },
        {
          title: 'sanit',
          text: '',
          // img: require(''),
          embed: ''
        },
        {
          title: 'wip',
          text: '',
          // img: require(''),
          embed: ''
        },
        {
          title: 'wip',
          text: '',
          // img: require(''),
          embed: ''
        },
        {
          title: 'wip',
          text: '',
          // img: require(''),
          embed: ''
        },
        {
          title: 'wip',
          text: '',
          // img: require(''),
          embed: ''
        }
      ]
    }
  }
}
</script>
