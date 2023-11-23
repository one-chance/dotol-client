import { getAccessToken } from '@utils/index';

export const getClothesList = async (
  keyword: string,
  part: number,
  page: number,
) => {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_SERVER
    }/costumes/item?keyword=${keyword}&part=${part}&page=${page}`,
    {
      method: `GET`,
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${getAccessToken()}`,
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
  return data;
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
