import { getIngredientsWithMeasure } from '../../utils/getIngredientsWithMeasure';
describe('getIngredientsWithMeasure', () => {
  it('should return an array of objects with ingredients and measures', () => {
    const recipe = {
      strIngredient1: 'chicken',
      strIngredient2: 'potatoes',
      strIngredient3: 'carrots',
      strMeasure1: '1 lb',
      strMeasure2: '2 cups',
      strMeasure3: '1 cup',
    };
    const result = getIngredientsWithMeasure(recipe);
    expect(result).toEqual([
      { ingredient: 'chicken', measure: '1 lb' },
      { ingredient: 'potatoes', measure: '2 cups' },
      { ingredient: 'carrots', measure: '1 cup' },
    ]);
  });

  it('should filter out ingredients without measures', () => {
    const recipe = {
      strIngredient1: 'chicken',
      strIngredient2: 'potatoes',
      strMeasure1: '1 lb',
    };
    const result = getIngredientsWithMeasure(recipe);
    expect(result).toEqual([{ ingredient: 'chicken', measure: '1 lb' }]);
  });

  it('should return an empty array if no ingredients are provided', () => {
    const recipe = {};
    const result = getIngredientsWithMeasure(recipe);
    expect(result).toEqual([]);
  });
});