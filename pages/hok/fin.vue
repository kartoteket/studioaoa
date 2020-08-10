<template>
  <article class="min-h-screen flex flex-col justify-center items-center pt-24">
    <div class="px-8 text-center sm:px-0 sm:w-2/3 md:w-1/2 lg:w-2/5">
      <p class="text-ocher">
        Your name:
      </p>
      <p class="mb-8">
        {{ name }}
      </p>
      <p class="text-ocher">
        Your Dancer:
      </p>
      <p class="mb-8">
        {{ dancer }}
      </p>
      <p class="text-ocher">
        Your Tot:
      </p>
      <p class="mb-8">
        {{ tot }}
      </p>

      <p class="text-ocher">A meditation seed to prepare you for the Dance:</p>
      <p class="mb-8">
        Superstitions may be untrue but based on deeper truth—that earth is a
        living being. Science may be true, i.e. effective, while based on a
        deeper untruth—that matter is dead. Your Dancer: The Information
        Psychologist Your name: Svale See you at: Henie Onstad Kunstsenter, 23rd
        of August Or on the online live stream. Please photograph this page for
        reference.
      </p>

      <p class="text-ocher">See you at:</p>
      <p>Henie Onstad Kunstsenter, 23rd of August</p>
      <p>Or on the online live stream.</p>
      <p>Please photograph this page for reference.</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Fin',
  layout: 'hok',
  data() {
    return {
      name: '',
      dancer: '',
      tot: null
    }
  },
  mounted() {
    this.name = localStorage.getItem('userName')
    this.dancer = localStorage.getItem('dancer')
    this.tot = localStorage.getItem('tot')
  },
  destroyed() {
    localStorage.clear()
  }
}
</script>
