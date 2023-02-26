<script setup lang="ts">
import { useMealStore } from "../stores/meal";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import TitleContent from "../common/Title/TitleContent.vue";
import IngredientsList from "../components/IngredientList/index.vue";
import VideoPlayer from "../components/VideoPlayer/index.vue";

const route = useRouter();
const mealStore = useMealStore();

const { fetchMealById } = mealStore;
const { meal } = storeToRefs(mealStore);

onMounted(() => {
  fetchMealById(route.currentRoute.value.params.id as string);
});

if (!meal) {
  route.push({ name: "home" });
}

</script>

<template v-if="meal">
  <div id="app" class="min-h-screen bg-gray-100">
    <main class="flex-grow">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-8 pt-8">
          <div class="flex flex-col items-center justify-center">
            <img
              class="w-full h-full object-cover rounded-lg"
              :src="meal?.strMealThumb"
              alt="meal"
            />
          </div>
          <div class="flex flex-col justify-center">
            <title-content :title="meal?.strMeal" color="text-red-500" />
            <ingredients-list :meal="meal" />
          </div>
        </div>
        <div v-if="meal?.strYoutube" class="py-8">
          <div class="flex flex-col items-center justify-center">
            <h1 class="text-4xl font-bold text-center text-gray-800">
              Video
            </h1>
              <video-player
                :url="meal?.strYoutube"
              />
          </div>
        </div>
        <div class="py-8">
          <h1 class="text-4xl font-bold text-center text-gray-800">
            Instructions
          </h1>
          <p class="mt-4 text-xl font-medium text-gray-700">
            {{ meal?.strInstructions }}
          </p>
        </div>
      </div>
    </main>
  </div>
</template>
