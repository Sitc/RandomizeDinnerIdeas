<script setup lang="ts">
</script>

<template>
  <div
    id="app"
    class="h-screen flex flex-col"
  >
    <nav class="bg-indigo-900 text-white h-15 flex items-center justify-center">
      <ul class="flex items-center">
        <li class="m-4">
          <router-link to="/">
            Home
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="h-80">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
