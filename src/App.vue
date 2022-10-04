<template>
  <section class="container">
    <MainComponent />
    <FooterBar />
  </section>
</template>

<script>
  import MainComponent from './components/MainComponent.vue'
  import FooterBar from './components/FooterBar.vue'

  export default {
    name: 'App',
    components: {
      MainComponent,
      FooterBar
    }
  }
</script>

<style>
:root {
  --dark: #1d1917;
  --light: #f7f2de;
  --cream: #e2d8cc;
  --lighter-accent: #d85a583d;
  --accent: #e7383b;
  --rippleRgb: rgb(238, 238, 238);

  accent-color: var(--accent);
}

html, body {
  background-color: var(--dark);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", 
  Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--light);
  margin: 0;
  padding: 0;
  max-width: 100%;
}

body,#app  {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.container {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
