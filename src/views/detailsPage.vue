<script setup lang="ts">
import { useMealStore } from "../stores/meal";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import TitleContent from "../common/Title/TitleContent.vue";
import IngredientsList from "../components/IngredientList/IngredientList.vue";
import SubTitle from "../common/Title/SubTitle.vue";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer.vue";
import { Meal } from "../common/types/meal";

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
  <div
    id="app"
    class="min-h-screen bg-gray-100"
  >
    <main class="flex-grow">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-8 pt-8">
          <div class="flex flex-col items-center justify-center">
            <img
              class="w-full h-full object-cover rounded-lg"
              :src="meal?.strMealThumb"
              alt="meal"
            >
          </div>
          <div class="flex flex-col justify-center">
            <title-content
              v-if="meal?.strMeal"
              :title="meal?.strMeal as string"
              :color="'text-red-500'"
            />
            <ingredients-list :meal="meal as Meal" />
          </div>
        </div>
        <div
          v-if="meal?.strYoutube"
          class="py-8"
        >
          <div class="flex flex-col items-center justify-center">
            <sub-title
              :title="'Watch the video to see how to make this meal'"
              :color="'text-gray-800'"
            />
            <video-player
              :url="meal?.strYoutube"
            />
          </div>
        </div>
        <div class="py-8">
          <sub-title
            :title="'Instructions'"
            :color="'text-gray-800'"
            class="mt-4 text-xl font-medium text-gray-700"
          >
            {{ meal?.strInstructions }}
          </sub-title>
          <p>
            {{ meal?.strInstructions }}
          </p>
        </div>
      </div>
    </main>
  </div>
</template>
