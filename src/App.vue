<template>
  <div id="app">
    <HeaderComponent />
    <main>
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ingrid+Darling&display=swap");

#app {
  background: linear-gradient(90deg, #ab66ff 0%, #74b6f7 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  display: flex;
}
</style>
