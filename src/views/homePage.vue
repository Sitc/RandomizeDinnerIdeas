<script setup lang="ts">
import { useMealStore } from "../stores/meal";
import { storeToRefs } from "pinia";
import TitleContent from "../common/Title/TitleContent.vue";
import { onMounted } from "vue";
import SearchInput from "@/components/Search/SearchInput.vue";
import CardRandom from "@/components/CardRandom/CardRandom.vue";
import CardSearchResult from "@/components/CardSearchResult/CardSearchResult.vue";

const mealStore = useMealStore();
const { fetchRandomMeal } = mealStore;
const { randomMeal, isLoading, error, searchResults } = storeToRefs(mealStore);

onMounted(() => {
  if (!randomMeal.value) {
    fetchRandomMeal();
  }
});

</script>

<template>
  <div class="p-4">
    <SearchInput />
  </div>

  <div
    id="home"
    class="h-full bg-gray-700 flex flex-col"
  >
    <div v-if="!searchResults">
      <main class="flex-grow">
        <div
          class="container mx-auto px-4 flex items-center justify-center h-full"
        >
          <div
            v-if="randomMeal"
            class="w-full flex flex-col flex flex-col items-center justify-center"
          >
            <div class="pb-2">
              <title-content
                :title="'Randomize your meal'"
                color="text-red-500"
              />
            </div>

            <button
              class="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded-lg"
              @click="fetchRandomMeal"
            >
              Surprise me &#127881;
            </button>

            <p v-if="error">
              Something went wrong
            </p>

            <div class="p-4">
              <card-random
                v-if="randomMeal"
                :id="randomMeal?.idMeal as string"
                :title="randomMeal?.strMeal as string"
                :src="randomMeal?.strMealThumb as string"
                :alt="randomMeal?.strMeal as string"
                :href="`/details/${randomMeal?.idMeal}`"
                :is-loading="isLoading"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
    <div v-if="searchResults">
      <main class="container mx-auto px-4">
        <div class="flex flex-wrap -mx-2">
          <div
            v-for="meal in searchResults"
            :key="meal.idMeal"
            class="my-2 px-2 w-full sm:my-4 sm:px-4 sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <card-search-result
              :title="meal.strMeal as string"
              :src="meal.strMealThumb as string"
              :alt="meal.strMeal as string"
              :href="`/details/${meal.idMeal}`"
              :is-loading="isLoading"
            />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
