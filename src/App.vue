<template>
  <div class="container">
    <Channels/>
  </div>
</template>

<script>
import Channels from "./components/Channels/Channels";

export default {
  name: 'App',
  components: {
    Channels,
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: $font, $font2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
  min-width: 360px;
  padding: 0;
  margin: 0;
}
</style>
