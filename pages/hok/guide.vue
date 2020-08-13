<template>
  <article class="min-h-screen flex flex-col justify-center items-center pt-16">
    <div class="px-8 text-center sm:px-0 sm:w-2/3">
      <div
        class="sm:flex md:justify-center container mx-auto mb-8 text-center relative"
      >
        <img
          :src="`${dancerImage}?w=256`"
          :alt="`#${dancer.title}`"
          class="block max-h-50 sm:max-h-60 self-end mx-auto sm:mx-0 sm:mt-20"
        />
        <div class="relative rtf text-center mr-10 sm:mr-0 sm:ml-24 sm:w-1/5">
          <div class="hidden sm:block drawline" />
          <div v-if="step === 1">
            <h2 class="mb-4">
              Thank you!<br />
              I am {{ dancer.title }}.
            </h2>
            <p class="mb-4">
              <label class="block mb-4">
                What is your name?
              </label>
              <input
                id="name"
                @input="updateName($event.target.value)"
                :value="userName"
                name="userName"
                type="text"
                class="border-black border-dashed  border-b-2 text-center font-sans focus:outline-none mb-6"
                autofocus
                required
              />
            </p>
            <p
              v-if="userName"
              class="font-extrabold text-2xl text-center mb-4 vibrate"
            >
              <button @click="step = 2">>>>>>>>></button>
            </p>
          </div>
          <div v-else-if="step === 2">
            <p class="mb-4">Our language seems to be broken in so many ways!</p>
            <p class="mb-4">
              We have collected 256 symbols to try to make a new one.
            </p>
            <p class="mb-4">We call them TOTS</p>

            <p class="font-extrabold text-2xl text-center mb-4 vibrate">
              <button @click="step = 3">>>>>>>>></button>
            </p>
          </div>
          <div v-else-if="step === 3">
            <p class="mb-8">
              On Sunday we will start dancing the TOTs into reality.
            </p>
            <p class="mb-4">
              Which TOT would you like to see realized, {{ userName }}?
            </p>
            <p>
              <n-link
                class="font-extrabold text-2xl text-center mb-4 vibrate"
                to="/hok/tots"
              >
                >>>>>>>>
              </n-link>
            </p>
          </div>
          <div v-else-if="step === 4">
            <p class="mb-4">Thank you!</p>
            <p class="mb-4">
              I will bring your specific TOT to Høvikodden to dance. Watch out
              for the black box!
            </p>
            <p class="mb-4">
              Please provide your mail adress to register for the live event and
              the stream.
            </p>
            <div>
              <form
                @submit.prevent="handleSubmit"
                name="submissions"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <p class="mb-8">
                  <input type="hidden" name="form-name" value="submissions" />
                  <input :value="userName" type="hidden" name="name" />
                  <input :value="selectedTot" type="hidden" name="tot" />
                  <input
                    id="email"
                    @input="updateEmail($event.target.value)"
                    :value="userEmail"
                    name="email"
                    type="email"
                    class="border-black border-dashed border-b-2 text-center font-sans focus:outline-none"
                    required
                    autofocus
                  />
                </p>
                <button
                  type="submit"
                  class="font-extrabold text-2xl text-center mb-4 vibrate"
                >
                  >>>>>>>>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HOK',
  // layout: 'hok',

  data() {
    return {
      step: 1,
      selectedDancer: null,
      userName: '',
      userEmail: ''
    }
  },

  computed: {
    dancer() {
      if (this.selectedDancer)
        return this.dancers.find((d) => d.slug.current === this.selectedDancer)
      return this.dancers[0] // fallback to first dancer
    },
    dancerImage() {
      if (this.step > 3) return this.dancer.imageUrl_3
      return this.dancer.imageUrl_2
    },
    selectedTot() {
      if (this.step > 3) return localStorage.getItem('tot')
      return null
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
    handleSubmit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      const formData = new FormData()
      formData.append('name', this.userName)
      formData.append('email', this.userEmail)
      formData.append('dancer', this.selectedDancer)
      formData.append('tot', this.selectedTot)
      formData.append('form-name', 'submissions')

      axios
        .post('/hok/form/', formData, axiosConfig)
        .then(() => {
          this.$router.push('/hok/fin')
        })
        .catch(() => {
          this.$router.push('404')
        })
    },

    updateName(value) {
      this.userName = value
      localStorage.setItem('userName', value)
    },

    updateEmail(value) {
      this.userEmail = value
      localStorage.setItem('userEmail', value)
    }
  }
}
</script>
<style>
.drawline {
  position: absolute;
  width: 100px;
  height: 1px;
  background-color: #000;
  transform: rotate(-40deg);
  top: 65px;
  left: -100px;
}
</style>
