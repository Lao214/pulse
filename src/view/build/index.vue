<template>
  <div>
    <Mobile v-if="windowWidth <= 720"></Mobile>
    <PCwin v-if="windowWidth > 720"></PCwin>
  </div>
</template>

<script>
import Mobile from "@/components/Mobile"
import PCwin from "@/components/IndexPC"

export default {
  components: {
    Mobile,
    PCwin
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped>

</style>