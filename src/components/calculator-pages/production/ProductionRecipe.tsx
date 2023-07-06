import { useEffect, useState } from 'react';

import { getProductionRecipe } from '@apis/production';
import { Chip } from '@components/chip';
import { FlexView } from '@components/common';
import { itemState } from '@states/production';
import { useRecoilValue } from 'recoil';

type Recipe = {
  [key: string]: {
    name: string;
    amount: number;
  }[];
};

export default () => {
  const selectedItem = useRecoilValue(itemState);

  const [recipeList, setRecipeList] = useState<Recipe>({});
  const [ingredients, setIngredients] = useState(new Map());

  const addInGradient = (name: string, amount: number) => {
    const tempMap = new Map(ingredients);
    tempMap.delete(name);

    recipeList[name].map(data => {
      if (tempMap.has(data.name)) {
        return tempMap.set(
          data.name,
          tempMap.get(data.name) + data.amount * amount,
        );
      }
      return tempMap.set(data.name, data.amount * amount);
    });

    setIngredients(tempMap);
  };

  useEffect(() => {
    setIngredients(
      new Map(
        selectedItem.name === ``
          ? new Map()
          : new Map(
              recipeList?.[selectedItem.name].map(obj => [
                obj.name,
                obj.amount * selectedItem.amount,
              ]),
            ),
      ),
    );
  }, [selectedItem]);

  useEffect(() => {
    getProductionRecipe().then(res => {
      setRecipeList(res);
    });
  }, []);

  return (
    <FlexView
      css={{
        alignContent: `flex-start`,
        minHeight: `200px`,
        padding: `20px`,
        border: `1px solid lightgray`,
        borderRadius: `4px`,
      }}
      gap={4}
      row
      wrap
    >
      {Array.from(ingredients.entries()).map(([name, amount]) => (
        <Chip
          key={name}
          clickable={!!recipeList[name]}
          text={`${name} ${amount}`}
          onClick={() => addInGradient(name, amount)}
        />
      ))}
    </FlexView>
  );
};
