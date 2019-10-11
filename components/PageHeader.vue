<template>
  <header class="flex justify-between fixed w-full z-10">
    <h1 class="my-4">
      <a href="/">
        <img
          src="~/assets/img/studioaoa.png"
          title="^O^ = Studioaoa"
          alt="^O^ = Studioaoa logo"
          width="80"
          class="m-8"
        />
      </a>
    </h1>
    <menu-icon :state="isOpen" @state="isOpen = $event" />
    <Menu :state="isOpen" @state="isOpen = $event" />
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
