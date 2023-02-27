<script setup lang="ts">
import { defineProps } from "vue";
import LoadingSpinner from "@/common/LoadingSpinner/LoadingSpinner.vue";
import DietType from "../DietType/DietType.vue";

defineProps({
  alt: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    default: "text-black",
  },
  href: {
    type: String,
    default: "/",
  },
  title: {
    type: String,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    required: true,
  },
});

</script>

<template>
  <router-link
    v-if="!isLoading"
    :to="href"
    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <img
      class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      :src="src"
      :alt="alt"
    >
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ title }}
      </h5>
      <diet-type :meal-id="id" />
    </div>
  </router-link>
  <div
    v-if="isLoading"
    class="flex flex-col items-center justify-center w-full h-full"
  >
    <loading-spinner />
  </div>
</template>
