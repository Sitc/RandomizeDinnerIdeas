export function getIngredientsWithMeasure(recipe: any) {
  const keys = Object.keys(recipe);
  const ingredients = keys
    .filter((key) => key.startsWith("strIngredient"))
    .map((key) => recipe[key]);
  const measures = keys
    .filter((key) => key.startsWith("strMeasure"))
    .map((key) => recipe[key]);
  const ingredientsWithMeasure = ingredients.map((ingredient, index) => {
    const measure = measures[index] || "";
    return {
      ingredient: ingredient.trim(),
      measure: measure.trim(),
    };
  });
  return ingredientsWithMeasure.filter(
    (item) => item.ingredient && item.measure
  );
}
