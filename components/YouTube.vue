<template>
  <youtube
    :video-id="videoId"
    :resize="true"
    :fitParent="true"
    :width="560"
    :height="315"
  ></youtube>
</template>
<script>
import getId from 'get-youtube-id'

export default {
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      videoId: getId(this.url)
    }
  }
}
</script>
