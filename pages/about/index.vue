<template>
  <section class="min-h-screen flex flex-col justify-center items-center pt-24">
    <video
      autoplay="autoplay"
      preload="auto"
      playsinline
      muted="muted"
      poster
      loop
    >
      <source src="~assets/videos/aboutAOA_720.mp4" type="video/mp4" />
    </video>
    <article
      class="px-8 text-center md:text-left sm:px-0 sm:w-2/3 md:w-1/2 lg:w-2/5"
    >
      <h1 class="text-ocher font-bold mb-4">
        About Studio ^O^ The Molecular Ballet
      </h1>
      <p class="mb-8">
        Studio ^O^ (AOA) is a multidisciplinary art studio and collective based
        in Oslo, Norway. We work within different fields, spanning from design,
        cinema and theater to music and dance.
      </p>
      <p class="mb-8">
        In the period 2010-2020 we have focused on The Molecular Ballet, a
        project intended to develop a creative methodology based on a set of 256
        "Tots" - image seeds and text snippets collected anonymously from
        artists, researchers, designers and others.
      </p>
      <p class="mb-8">
        From these Tots the parallel universe of the Molecular Ballet is spun,
        with its dancers and inhabitants traversing freely between the imaginal,
        the virtual and the phsyical worlds, as they take the lead in developing
        the ultimate goal of the project: the Ultrahieroglyphic sign language.
      </p>
      <p class="mb-8">
        Studio ^O^ was founded in 2010 by artists Ann Holmgren, Nikolai Aurebekk
        Handeland and Petter Width Kristiansen. Presently the studio is engaged
        as art director of Norwegian design platform Elementa. The autumn of the
        2019 will launch new projects within cinema and theatre, including a
        series of educational films for small children in the Saami language.
      </p>
    </article>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style></style>
