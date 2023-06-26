export const getFreeboard = async (
  page: number,
  searchType: string,
  searchKeyword: string,
) => {
  const search = `${searchType}, ${searchKeyword}`;

  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/freeboard/posts?page=${page}${search}`,
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

export const updateFreeboardPost = async (
  postId: number,
  title: string,
  content: string,
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/freeboard/posts/${postId}`,
    {
      method: `PATCH`,
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify({
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
