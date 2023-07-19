import { getAccessToken } from '@utils/common';

export const getFreeboard = async (
  page: number,
  searchType: string,
  searchKeyword: string,
) => {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_SERVER
    }/freeboard/posts?page=${page}&search=${searchType},${searchKeyword}`,
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

export const getFreeboardPost = async (postId: number) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/freeboard/posts/${postId}`,
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

export const createFreeboardPost = async (
  _id: string,
  title: string,
  content: string,
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/freeboard/posts`,
    {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify({
        _id,
        title,
        content,
      }),
    },
  );

  const data = await res.json();
  return data;
};

export const deleteFreeboardPost = async (postId: number) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/freeboard/posts/${postId}`,
    {
      method: `DELETE`,
      headers: {
        'Content-Type': `application/json`,
      },
    },
  );

  const data = await res.json();
  return data;
};

export const recommendFreeboardPost = async (postId: number) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/freeboard/posts/${postId}/recommend`,
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

export const createFreeboardComment = async (
  postId: number,
  content: string,
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/freeboard/${postId}/comments`,
    {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify({
        content,
      }),
    },
  );

  const data = await res.json();
  return data;
};

export const updateFreeboardComment = async (
  postId: number,
  commentId: number,
  content: string,
) => {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_SERVER
    }/freeboard/${postId}/comments/${commentId}`,
    {
      method: `PATCH`,
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify({
        content,
      }),
    },
  );

  const data = await res.json();
  return data;
};

export const deleteFreeboardComment = async (
  postId: number,
  commentId: number,
) => {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_SERVER
    }/freeboard/${postId}/comments/${commentId}`,
    {
      method: `DELETE`,
      headers: {
        'Content-Type': `application/json`,
      },
    },
  );

  const data = await res.json();
  return data;
};

export const createFreeboardReply = async (
  postId: number,
  commentId: number,
  content: string,
) => {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_SERVER
    }/freeboard/${postId}/comments/${commentId}/replies`,
    {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify({
        content,
      }),
    },
  );

  const data = await res.json();
  return data;
};

export const updateFreeboardReply = async (
  postId: number,
  commentId: number,
  replyId: number,
  content: string,
) => {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_SERVER
    }/freeboard/${postId}/comments/${commentId}/replies/${replyId}`,
    {
      method: `PATCH`,
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify({
        content,
      }),
    },
  );

  const data = await res.json();
  return data;
};

export const deleteFreeboardReply = async (
  postId: number,
  commentId: number,
  replyId: number,
) => {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_SERVER
    }/freeboard/${postId}/comments/${commentId}/replies/${replyId}`,
    {
      method: `DELETE`,
      headers: {
        'Content-Type': `application/json`,
      },
    },
  );

  const data = await res.json();
  return data;
};

export const increaseFreeboardViews = async (postId: number) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/freeboard/posts/${postId}/views`,
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

export const requestPreSignedPostUrl = async (fileName: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/freeboard/posts/presigned-url`,
    {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify({
        fileName,
      }),
    },
  );

  const data = await res.json();
  return data;
};

export const uploadPreSignedPostUrl = async (
  presignedUrl: string,
  fields: any,
  file: Blob,
) => {
  const formdata = new FormData();

  Object.keys(fields).forEach(key => {
    formdata.append(key, fields[key]);
  });
  formdata.append(
    `tagging`,
    `<Tagging><TagSet><Tag><Key>isUnverified</Key><Value>true</Value></Tag></TagSet></Tagging>`,
  );
  formdata.append(`file`, file);

  return fetch(presignedUrl, {
    method: `POST`,
    body: formdata,
  });
};
