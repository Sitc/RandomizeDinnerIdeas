<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  url: string;
}>();

const createEmbedYoutubeUrl = (url: string) => {
  const videoId = url.split("v=")[1];

  return `https://www.youtube.com/embed/${videoId}`;
};

</script>

<template>
  <div class="mt-4">
    <iframe
      :class="['w-full', 'aspect-w-4', 'aspect-h-3', 'md:w-96']"
      :src="createEmbedYoutubeUrl(url)"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>
