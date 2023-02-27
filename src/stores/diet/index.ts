import { defineStore } from "pinia";
import { ref } from "vue";
import { MealApiResponse } from "../../common/types/meal";
import axios from "../../utils/axios";

export const useDietStore = defineStore("diet", () => {

const diet = ref(null);

const dietTypes = {
  vegan: {
    textColor: "text-green-500",
    title: "Vegan",
    indicatorColor: "bg-green-500",
  },
  meaty: {
    textColor: "text-red-500",
    title: "Meaty",
    indicatorColor: "bg-red-500",
  },
  dairyFree: {
    textColor: "text-slate-500",
    title: "Dairy Free",
    indicatorColor: "bg-blue-500",
  },
};


const determineDietType = async (mealId: string) => {
  const mealResponse = await axios.get<MealApiResponse>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  const meal = mealResponse.data.meals[0];

  const keys = Object.keys(meal);
  const ingredients = keys
    .filter((key) => key.startsWith("strIngredient"))
    .map((key) => meal[key]).filter(elm => elm)

  if (ingredients.some(ingredient => ingredient.match(/(beef|chicken|pork|lamb|veal|fish)/gi))) {
    diet.value = dietTypes.meaty;
  }

  if (ingredients.some(ingredient => ingredient.match(/(cheese|yogurt|milk|cream|butter|ghee|whey|casein|lactose)/gi))) {
    diet.value = dietTypes.dairyFree;
  }

  if (ingredients.every(ingredient => !ingredient.match(/(beef|chicken|pork|lamb|veal|fish)/gi))) {
    diet.value = dietTypes.vegan;
  }
};
  return {
    diet,
    determineDietType,
  };
});

