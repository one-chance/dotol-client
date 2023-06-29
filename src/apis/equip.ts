import { EquipOption } from '@interfaces/equip';

export const getEquipByName = async (name: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/equips/item/${name}`,
    {
      method: `GET`,
      headers: {
        'Content-Type': `application/json`,
      },
    },
  );
  const data = await res.json();
  return data;
};

export const getEquipByOption = async (option: EquipOption) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/equips/item?type=${option.type}&part=${
      option.part
    }&job=${option.job}`,
    {
      method: `GET`,
      headers: {
        'Content-Type': `application/json`,
      },
    },
  );
  const data = await res.json();
  return data;
};
