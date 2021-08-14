<template>
  <img class="ui-icon" v-bind="$attrs" :src="imageSrc" />
</template>

<script>
export default {
  name: 'UiIcon',
  props: {
    src: String,
    darkSrc: String
  },
  computed: {
    themeMode () {
      return this.$store.getters.themeMode
    },
    imageSrc () {
      const { themeMode, src, darkSrc } = this
      return themeMode === 'dark' ? (darkSrc || src) : src
    }
  },
}
</script>

<style>

</style>