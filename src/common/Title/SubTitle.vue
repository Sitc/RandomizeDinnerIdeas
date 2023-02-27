<script setup lang="ts">
defineProps<{
  title: string;
  color: string;
}>();
</script>

<template>
  <h2
    class="font-bold sm:mb-2 md:mb-4 text-md sm:text-medium md:text-xl"
    :class="color"
  >
    {{ title }}
  </h2>
</template>