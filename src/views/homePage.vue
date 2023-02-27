<script setup lang="ts">
import { useMealStore } from "../stores/meal";
import { storeToRefs } from "pinia";
import TitleContent from "../common/Title/TitleContent.vue";
import { onMounted } from "vue";
import SearchInput from "@/components/Search/SearchInput.vue";

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

  <div id="home">
    <div v-if="!searchResults">
      <main class="flex-grow">
        <div
          class="container mx-auto px-4 flex items-center justify-center h-full"
        >
          <div
            v-if="randomMeal"
            class="w-full flex flex-col flex flex-col items-center justify-center"
          >
            <div class="pb-4">
              <h1 class="text-4xl font-bold text-center text-gray-800">
                Random Meal
              </h1>
            </div>

            <button
              class="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded-lg"
              @click="fetchRandomMeal"
            >
              Surprise me &#127881;
            </button>

            <p v-if="isLoading">
              Loading meal...
            </p>
            <p v-if="error">
              Something went wrong
            </p>

            <div class="p-4">
              <router-link
                :to="{ name: 'details', params: { id: randomMeal?.idMeal } }"
              >
                <div
                  class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl max-h-96 cursor-pointer"
                >
                  <div class="md:flex">
                    <div class="xs:h-10 sm:h-30 md:w-60 md:h-50 md:flex-shrink-0">
                      <img
                        class="w-full h-full object-cover md:rounded-l-xl"
                        :src="randomMeal?.strMealThumb"
                        alt="A beautiful landscape"
                      >
                    </div>
                    <div class="sm:px-4 sm:py-1 md:px-6 md:py-2 sm:p-2 md:p-6 md:flex-grow">
                      <title-content
                        v-if="randomMeal?.strMeal"
                        :title="randomMeal?.strMeal as string"
                        :color="'text-red-500'"
                      />

                      <p class="text-gray-700 text-base">
                        {{ randomMeal?.strCategory }}
                      </p>
                      <a
                        class="self-end mt-4 block text-indigo-700 font-bold hover:text-indigo-900 cursor-pointer text-sm text-right md:text-left"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </router-link>
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
            <div class="bg-white rounded-lg shadow-lg overflow-hidden h-full">
              <div class="md:h-48 overflow-hidden">
                <img
                  class="w-full h-full object-cover"
                  :src="meal?.strMealThumb"
                  alt="meal"
                >
              </div>
              <div class="sm:px-4 sm:py-1 md:px-6 md:py-2 flex flex-col justify-between">
                <div>
                  <title-content
                    v-if="meal?.strMeal"
                    :title="meal?.strMeal as string"
                    color="text-red-500"
                  />
                  <p class="text-gray-700 text-base">
                    {{ meal?.strCategory }}
                  </p>
                </div>
                <div class="mt-4">
                  <router-link
                    :to="{ name: 'details', params: { id: meal?.idMeal } }"
                    class="block text-indigo-700 font-bold hover:text-indigo-900 cursor-pointer text-sm text-right md:text-left"
                  >
                    Read More
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
