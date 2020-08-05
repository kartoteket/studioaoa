<template>
  <article class="min-h-screen flex flex-col justify-center items-center pt-24">
    <div class="px-8 text-center sm:px-0 sm:w-2/3">
      <div
        class="sm:flex md:justify-center container mx-auto mb-8 text-center Xdebug relative"
      >
        <img
          :src="`${dancerImage}?w=256`"
          :alt="`#${dancer.title}`"
          class="block max-h-50 sm:max-h-70"
        />
        <div
          v-if="step === 1"
          class="sm:absolute top-0 right-0 text-center mr-10 sm:mr-0"
        >
          <h2 class="mb-4">
            Thank you!<br />
            My name is {{ dancer.title }}.
          </h2>
          <p class="mb-4">
            What is your name?
          </p>
          <p class="mb-4">
            <input
              id="name"
              @input="updateName($event.target.value)"
              :value="userName"
              type="text"
              class="border-black border-b-2 text-center font-sans focus:outline-none"
              autofocus
            />
          </p>
          <p v-if="userName" class="heading-1 vibrate">
            <button @click="step = 2">NEXT</button>
          </p>
        </div>
        <div
          v-if="step === 2"
          class="sm:absolute rtf top-0 right-0 text-center mr-10 sm:mr-0"
        >
          <p>
            Our language seems<br />
            broken!
          </p>
          <p>
            We’ve collected 256<br />
            symbols to try to<br />
            make a new one.
          </p>
          <p>We call them TOTS</p>
          <p class="heading-1 vibrate">
            <button @click="step = 3">NEXT</button>
          </p>
        </div>
        <div
          v-if="step === 3"
          class="sm:absolute rtf top-0 right-0 text-center mr-10 sm:mr-0"
        >
          <p>
            Which TOT would<br />
            you like to see danced<br />
            into life, {{ userName }}?
          </p>
          <p>
            <n-link class="heading-1 vibrate" to="/hok/tots">
              NEXT
            </n-link>
          </p>
        </div>
        <div
          v-if="step === 4"
          class="sm:absolute rtf top-0 right-0 text-center mr-10 sm:mr-0"
        >
          <p>
            Thank you! I will bring your<br />
            Tot to Høvikodden where it<br />
            may be picked out to be<br />
            danced into reality. <br />
          </p>
          <p>
            <n-link class="heading-1 vibrate" to="/hok/fin">
              NEXT
            </n-link>
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'HOK',
  data() {
    return {
      step: 1,
      selectedDancer: null,
      userName: ''
    }
  },
  computed: {
    dancer() {
      if (this.selectedDancer)
        return this.dancers.find((d) => d.slug.current === this.selectedDancer)
      return []
    },
    dancerImage() {
      if (this.step > 3) return this.dancer.imageUrl_3
      return this.dancer.imageUrl_2
    }
  },
  async asyncData({ $sanity }) {
    const query = `{
    "dancers": *[_type == "dancer"]{_id, title, slug, about, "imageUrl_2": assets.image_2.asset->url, "imageUrl_3": assets.image_3.asset->url},
    }`
    const result = await $sanity.fetch(query)
    return result
  },
  mounted() {
    this.selectedDancer = localStorage.getItem('dancer')
    this.userName = localStorage.getItem('userName')
    this.step = localStorage.getItem('step') * 1 || 1
  },
  methods: {
    updateName(value) {
      this.userName = value
      localStorage.setItem('userName', value)
    }
  }
}
</script>
