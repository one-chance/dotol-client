export const getSkillAbilityList = async () => {
  const res = await fetch(
    `https://asset.dotols.com/data/skill/ability-list.json`,
  );

  return res.json();
};
