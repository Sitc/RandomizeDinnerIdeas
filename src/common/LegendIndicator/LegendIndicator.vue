<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  textColor: {
    type: String,
    default: "text-black",
  },
  title: {
    type: String,
    required: true,
  },
  indicatorColor: {
    type: String,
    default: "bg-red-500",
  },
});
</script>

<template>
  <span
    class="flex items-center text-sm font-medium text-gray-900"
    :class="textColor"
  >
    <span
      class="flex w-2.5 h-2.5 rounded-full mr-1.5 flex-shrink-0"
      :class="indicatorColor"
    />
    {{ title }}
  </span>
</template>