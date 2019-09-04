<template>
  <header class="flex justify-center fixed w-full">
    <h1 class="my-4">
      <a href="/">
        <img
          src="~/assets/img/studioaoa.png"
          title="^O^ = Studioaoa"
          width="80"
          class="mt-5"
        />
      </a>
    </h1>
    <menu-icon @state="isOpen = $event" />
    <Menu :state="isOpen" />
  </header>
</template>

<script>
import Menu from '~/components/Menu.vue'
import MenuIcon from '@/components/MenuIcon'
export default {
  name: 'Pageheader',
  components: {
    Menu,
    MenuIcon
  },
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style></style>
