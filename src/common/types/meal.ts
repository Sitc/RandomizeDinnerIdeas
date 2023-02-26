export interface MealApiResponse {
  meals: Meal[];
}

export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  [key: string]: string;
}
