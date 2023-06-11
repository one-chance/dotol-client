import { useEffect, useState } from 'react';

import { Chip } from '@components/chip';
import { FlexView } from '@components/common';
import DATA from '@data/production-recipe.json';

type RecipeProps = {
  item: { name: string; amount: number };
};

type INGREDIENT = {
  name: string;
  amount: number;
};

const myData: { [key: string]: INGREDIENT[] } = DATA;

export default ({ item }: RecipeProps) => {
  const [ingredients, setIngredients] = useState(new Map());

  const addInGradient = (name: string, amount: number) => {
    if (myData[name]) {
      const tempMap = new Map(ingredients);
      tempMap.delete(name);
      myData[name].map(data => {
        if (tempMap.has(data.name)) {
          return tempMap.set(
            data.name,
            tempMap.get(data.name) + data.amount * amount,
          );
        }
        return tempMap.set(data.name, data.amount * amount);
      });

      setIngredients(tempMap);
    }
  };

  useEffect(() => {
    setIngredients(
      new Map(
        item.name === ``
          ? new Map()
          : new Map(
              myData[item.name].map(obj => [
                obj.name,
                obj.amount * item.amount,
              ]),
            ),
      ),
    );
  }, [item]);

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
          clickable={!!myData[name]}
          text={`${name} ${amount}`}
          onClick={() => addInGradient(name, amount)}
        />
      ))}
    </FlexView>
  );
};
