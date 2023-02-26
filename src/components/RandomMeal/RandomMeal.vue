<script setup lang="ts">
import { Meal } from "../../common/types/meal";

const props = defineProps<{
  randomMeal: Meal;
  fetchRandomMeal: () => void;
  viewDetails: () => void;
}>();

</script>

<template>
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

            <p v-if="isLoading">Loading meal...</p>
            <p v-if="error">Something went wrong</p>

            <div class="p-4">
              <div
                class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl max-h-96"
              >
                <div class="md:flex">
                  <div class="md:w-60 md:h-auto md:flex-shrink-0">
                    <img
                      class="w-full h-full object-cover md:rounded-l-xl"
                      :src="randomMeal?.strMealThumb"
                      alt="A beautiful landscape"
                    />
                  </div>
                  <div class="p-6 md:flex-grow">
                    <title-content
                      :title="randomMeal?.strMeal"
                      color="text-red-500"
                    />

                    <p class="text-gray-700 text-base">
                      {{ randomMeal?.strCategory }}
                    </p>
                    <p class="mt-4 text-gray-700 text-base">
                      <table class="table-auto w-full">
                        <div v-for="item in ingredientsWithMeasure">
                          <tr>
                            <span class="font-medium">{{item.ingredient}}:</span>
                            <span class="text-gray-500 ml-2">{{item.measure}}</span>
                          </tr>
                        </div>
                      </table>
                    </p>
                    <a
                      class="self-end mt-4 block text-indigo-700 font-bold hover:text-indigo-900 cursor-pointer text-sm text-right md:text-left"
                      @click="viewDetails"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
