<template>
  <div class="font-serif min-h-screen">
    <page-header />
    <nuxt class="pt-20" />
  </div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
export default {
  name: 'DefaultLayout',
  components: {
    PageHeader
  }
}
</script>
