export const getAchievementList = async () => {
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

export const getArcheologyList = async () => {
  const res = await fetch(
    `https://asset.dotols.com/data/content/archeology.json`,
  );

  return res.json();
};
