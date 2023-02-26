import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "../../utils/axios";
import { Meal, MealApiResponse } from "../../common/types/meal";
import { AxiosError } from "axios";

export const useMealStore = defineStore("meal", () => {
  const randomMeal = ref<Meal | undefined>(undefined);
  const meal = ref<Meal | undefined>(undefined);
  const isLoading = ref(false);
  const error = ref<AxiosError | undefined>(undefined);
  const searchResults = ref<Meal[] | undefined>(undefined);

  const fetchMealById = async (id: string) => {
    isLoading.value = true;
    try {
      const response = await axios.get<MealApiResponse>(`/lookup.php?i=${id}`);
      meal.value = response.data.meals[0];
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false;
    }
  };

  const fetchRandomMeal = async () => {
    isLoading.value = true;
    try {
      const response = await axios.get<MealApiResponse>("/random.php");
      randomMeal.value = response.data.meals[0];
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false;
    }
  };

  const fetchSearchResults = async (query: string): Promise<void> => {
    isLoading.value = true;
    try {
      const response = await axios.get<MealApiResponse>(
        `/search.php?s=${query}`
      );
      searchResults.value = response.data.meals;
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false;
    }
  };

  const clearSearchResults = () => {
    searchResults.value = undefined;
  };

  return {
    meal,
    randomMeal,
    isLoading,
    error,
    fetchMealById,
    fetchRandomMeal,
    fetchSearchResults,
    searchResults,
    clearSearchResults,
  };
});
