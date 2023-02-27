<script setup lang="ts">
import Navbar from './components/Navbar/NavBar.vue';
</script>

<template>
  <div
    id="app"
    class="h-full flex flex-col"
  >
    <navbar />
    <div class="h-80 mt-16">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
