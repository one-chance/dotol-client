export const getIngredients = async () => {
  const res = await fetch(
    `https://asset.dotols.com/data/production/grade-ingredient.json`,
  );

  return res.json();
};

export const getProductionItems = async () => {
  const res = await fetch(
    `https://asset.dotols.com/data/production/item-list.json`,
  );

  return res.json();
};

export const getProductionRecipe = async () => {
  const res = await fetch(
    `https://asset.dotols.com/data/production/recipe.json`,
  );

  return res.json();
};
