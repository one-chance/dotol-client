import { LookbookCount } from '@interfaces/costumes';

export const getClothesByName = async (name: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/costumes/${name}`,
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
    `${import.meta.env.VITE_API_SERVER}/costumes?part=${part}&page=${page}`,
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

export const getLookbookCount = async (userId: string): Promise<number> => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/costumes/lookbook/count`,
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

export const decreaseLookbookCount = async (userId: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/costumes/lookbook/count`,
    {
      method: `PATCH`,
      headers: {
        'Content-Type': `application/json`,
      },
    },
  );
  const data = await res.json();
  return data;
};
