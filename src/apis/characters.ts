import { getAccessToken } from '@utils/index';

export const getCharacterList = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_SERVER}/characters`, {
    method: `GET`,
    headers: {
      'Content-Type': `application/json`,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  const data = await res.json();
  return data;
};

export const registerCharacter = async (character: string) => {
  const res = await fetch(`${import.meta.env.VITE_API_SERVER}/characters`, {
    method: `POST`,
    headers: {
      'Content-Type': `application/json`,
      Authorization: `Bearer ${getAccessToken()}`,
    },
    body: JSON.stringify({
      character,
    }),
  });

  const data = await res.json();
  return data;
};

export const deleteCharacter = async (character: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/characters/${character}`,
    {
      method: `DELETE`,
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    },
  );

  const data = await res.json();
  return data;
};

export const updateMainCharacter = async (character: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/characters/main`,
    {
      method: `PATCH`,
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify({
        character,
      }),
    },
  );

  const data = await res.json();
  return data;
};

export const getCharacterInfo = async (character: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/characters/${character}/info`,
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
