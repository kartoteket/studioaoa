<template>
  <div>
    <section id="stations" class="container mx-auto pt-16 px-8 lg:px-20">
      <header class="grid__header text-center text-ochre pt-16 pb-8">
        <h1 class="text-ocher">Selected works</h1>
      </header>

      <div class="flex flex-wrap justify-between">
        <n-link
          v-for="(item, index) in works"
          :key="index"
          :to="`/outcome/${index}`"
          :index="index"
          class="mb-3"
        >
          <img :src="item" alt="" class="x-height max-w-none" />
        </n-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      works: [
        require('assets/img/works/a/1A_ballerina.gif'),
        require('assets/img/works/a/2A_111.jpg'),
        require('assets/img/works/a/3A_axioman_taz.jpg'),
        require('assets/img/works/a/4A_granca_t.jpg'),
        require('assets/img/works/a/5A_tot25.mp4'),
        require('assets/img/works/a/6AB.JPG'),
        require('assets/img/works/a/7A_signalwork.gif'),
        require('assets/img/works/a/8A_axis eins.gif'),
        require('assets/img/works/a/9A.JPG'),
        require('assets/img/works/a/10A_lövaman.gif'),
        require('assets/img/works/a/11A_sanit.jpg'),
        require('assets/img/works/a/12_A.jpg'),
        require('assets/img/works/a/13a_elementa.jpg'),
        require('assets/img/works/a/14A_derive.jpg'),
        require('assets/img/works/a/16A_information psychologist.gif')
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

<style>
.x-height {
  height: 160px;
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
