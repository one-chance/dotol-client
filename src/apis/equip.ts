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
  const tempType = option.type !== 0 ? `&type=${option.part}&` : ``;
  const tempPart = option.part !== 0 ? `&part=${option.part}&` : ``;
  const tempJob = option.job !== 0 ? `&job=${option.job}` : ``;

  const res = await fetch(
    `${
      import.meta.env.VITE_API_SERVER
    }/equips/item?${tempType}${tempPart}${tempJob}`,
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
