<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  url: string;
}>();

const createEmbedYoutubeUrl = (url: string) => {
  const videoId = url.split("v=")[1];

  return `https://www.youtube.com/embed/${videoId}`;
};

</script>

<template>
  <iframe
    class="mt-4"
    width="560"
    height="315"
    :src="createEmbedYoutubeUrl(url)"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>
