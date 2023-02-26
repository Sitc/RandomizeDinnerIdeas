<script setup lang="ts">
import { ref, watch } from "vue";
import { useMealStore } from "../../stores/meal";

const mealStore = useMealStore();
const { fetchSearchResults, clearSearchResults } = mealStore;
const searchQuery = ref("");

watch(searchQuery, (newVal) => {
  if (newVal.length > 2) {
    fetchSearchResults(newVal);
  }
  if (newVal.length < 2) {
    clearSearchResults();
  }
});

</script>

<template>
  <div id="search">
    <input
      v-model="searchQuery"
      class="w-full bg-white border border-gray-300 rounded-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      placeholder="Search"
    >
  </div>
</template>
