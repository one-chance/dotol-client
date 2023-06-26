import { getAccessToken } from '@utils/common';

export const getClothesByName = async (name: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/costumes/item/${name}`,
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

export const getClothesByPart = async (part: number, page: number) => {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_SERVER
    }/costumes/item?part=${part}&page=${page}`,
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

export const getLookbookCount = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/costumes/lookbook/count`,
    {
      method: `GET`,
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    },
  );
  const data = await res.json();

  return data.count;
};

export const decreaseLookbookCount = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/costumes/lookbook/count`,
    {
      method: `PATCH`,
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    },
  );
  const data = await res.json();
  return data;
};
