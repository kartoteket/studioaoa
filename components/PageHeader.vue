<template>
  <header>
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
