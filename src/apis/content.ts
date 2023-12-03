export const getAchievementJSON = async () => {
  const res = await fetch(
    `https://asset.dotols.com/data/content/achievement.json`,
  );

  return res.json();
};

export const getAdventureList = async () => {
  const res = await fetch(
    `https://asset.dotols.com/data/content/adventure.json`,
  );

  return res.json();
};

export const getArcheologyJSON = async () => {
  const res = await fetch(
    `https://asset.dotols.com/data/content/archeology.json`,
  );

  return res.json();
};

export const getBodyReinforceAbilityJSON = async () => {
  const res = await fetch(
    `https://asset.dotols.com/data/content/body-reinforce-ability.json`,
  );

  return res.json();
};

export const getBodyReinforceRecipeJSON = async () => {
  const res = await fetch(
    `https://asset.dotols.com/data/content/body-reinforce-recipe.json`,
  );

  return res.json();
};

export const getBodyReinforceBonusJSON = async () => {
  const res = await fetch(
    `https://asset.dotols.com/data/content/body-reinforce-bonus.json`,
  );

  return res.json();
};
