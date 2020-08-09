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
          <form
            name="submissions"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="submissions" />
            <div hidden aria-hidden="true">
              <label>
                Don’t fill this out if you're human:
                <input name="bot-field" />
              </label>
            </div>
            <p class="mb-4">
              <label class="block mb-2">
                What is your name?
              </label>
              <input
                id="name"
                @input="updateName($event.target.value)"
                :value="userName"
                name="userName"
                type="text"
                class="border-black border-b-2 text-center font-sans focus:outline-none mb-4"
                autofocus
                required
              />
            </p>
            <p v-if="userName" class="mb-4">
              <label for="email" class="block mb-2"
                >And what is your email?
              </label>
              <input
                id="email"
                @input="updateEmail($event.target.value)"
                :value="userEmail"
                name="userEmail"
                type="email"
                class="border-black border-b-2 text-center font-sans focus:outline-none"
                required
              />
            </p>
            <p v-if="userName && userEmail" class="heading-1 vibrate">
              <button type="submit">NEXT ></button>
            </p>
          </form>
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
            <button @click="step = 3">> NEXT ></button>
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
              > NEXT s>
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
              > NEXT >
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
      userName: '',
      userEmail: ''
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
    // submitToServer() {
    //   return new Promise((resolve, reject) => {
    //     fetch(`/`, {...})
    //       .then((response) => {
    //         resolve(response)
    //       })
    //       .catch((err) => {
    //         reject(err)
    //       })
    //   })
    // },
    // handleSubmit() {
    //   this.submitToServer().then((response) => {
    //     // const body = response.json()
    //     if (Number(response.status) !== 200) {
    //       console.log('Error submitting the form.')
    //     } else {
    //       console.log('Form was submitted!')
    //       this.step = 2
    //       // this.$router.push('/contact/thank-you')
    //     }
    //   })
    // },
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
