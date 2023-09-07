import { IUser, NewUser } from '@interfaces/users';
import { getAccessToken } from '@utils/common';

export const isDuplicatedUserId = async (userId: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/users/check-id/${userId}`,
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

export const isDuplicatedEmail = async (email: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/users/check-email/${email}`,
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

export const sendOTPCode = async (email: string) => {
  const res = await fetch(`${import.meta.env.VITE_API_SERVER}/users/send-otp`, {
    method: `POST`,
    headers: {
      'Content-Type': `application/json`,
    },
    body: JSON.stringify({
      email,
    }),
  });

  const data = await res.json();
  return data;
};

export const verifyOTPCode = async (email: string, OTPCode: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/users/verify-otp`,
    {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify({
        email,
        OTPCode,
      }),
    },
  );

  const data = await res.json();
  return data;
};

export const createUser = async (userInfo: NewUser) => {
  const res = await fetch(`${import.meta.env.VITE_API_SERVER}/users/signup`, {
    method: `POST`,
    headers: {
      'Content-Type': `application/json`,
    },
    body: JSON.stringify({ userInfo }),
  });

  const data = await res.json();
  return data;
};

export const verifyUser = async (userId: string, password: string) => {
  const res = await fetch(`${import.meta.env.VITE_API_SERVER}/users/signin`, {
    method: `POST`,
    headers: {
      'Content-Type': `application/json`,
    },
    body: JSON.stringify({
      userId,
      password,
    }),
  });

  const data = await res.json();
  return data;
};

export const deleteUser = async (email: string, password: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/users/withdrawal`,
    {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify({
        email,
        password,
      }),
    },
  );

  const data = await res.json();
  return data;
};

export const forgotUserId = async (email: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/users/forgot-id`,
    {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify({
        email,
      }),
    },
  );

  const data = await res.json();
  return data;
};

export const forgotPassword = async (userId: string, email: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/users/forgot-password`,
    {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify({
        userId,
        email,
      }),
    },
  );

  const data = await res.json();
  return data;
};

export const resetPassword = async (token: string, newPassword: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/users/reset-password`,
    {
      method: `PATCH`,
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        newPassword,
      }),
    },
  );

  const data = await res.json();
  return data;
};

export const updatePassword = async (
  oldPassword: string,
  newPassword: string,
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/users/change-password`,
    {
      method: `PATCH`,
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify({
        oldPassword,
        newPassword,
      }),
    },
  );

  const data = await res.json();
  return data;
};

export const getMyInfo = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_SERVER}/users/my-info`, {
    method: `GET`,
    headers: {
      'Content-Type': `application/json`,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  const data = await res.json();
  return data;
};

export const updateMyInfo = async (user: IUser) => {
  const res = await fetch(`${import.meta.env.VITE_API_SERVER}/users/my-info`, {
    method: `PATCH`,
    headers: {
      'Content-Type': `application/json`,
      Authorization: `Bearer ${getAccessToken()}`,
    },
    body: JSON.stringify({
      userInfo: user,
    }),
  });

  const data = await res.json();
  return data;
};

export const getUserInfo = async (userId: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/users/user-info`,
    {
      method: `GET`,
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify({
        userId,
      }),
    },
  );

  const data = await res.json();
  return data;
};
