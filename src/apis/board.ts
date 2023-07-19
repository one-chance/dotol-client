import { getAccessToken } from '@utils/common';

export const getPostList = async (
  category: string,
  page: number,
  searchType: string,
  searchKeyword: string,
) => {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_SERVER
    }/${category}board/posts?page=${page}&search=${searchType},${searchKeyword}`,
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

export const getPost = async (category: string, postId: number) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/${category}board/posts/${postId}`,
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

export const createPost = async (
  category: string,
  _id: string,
  title: string,
  content: string,
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/${category}board/posts`,
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

export const updatePost = async (
  category: string,
  index: number,
  title: string,
  content: string,
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/${category}board/posts/${index}`,
    {
      method: `PATCH`,
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${getAccessToken()}`,
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

export const deletePost = async (category: string, index: number) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/${category}board/posts/${index}`,
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

export const recommendPost = async (category: string, postId: number) => {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_SERVER
    }/${category}board/posts/${postId}/recommend`,
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

export const createComment = async (
  category: string,
  postId: number,
  content: string,
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/${category}board/${postId}/comments`,
    {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify({
        content,
      }),
    },
  );

  const data = await res.json();
  return data;
};

export const updateComment = async (
  category: string,
  postId: number,
  commentId: number,
  content: string,
) => {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_SERVER
    }/${category}board/${postId}/comments/${commentId}`,
    {
      method: `PATCH`,
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify({
        content,
      }),
    },
  );

  const data = await res.json();
  return data;
};

export const deleteComment = async (
  category: string,
  postId: number,
  commentId: number,
) => {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_SERVER
    }/${category}board/${postId}/comments/${commentId}`,
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

export const createReply = async (
  category: string,
  postId: number,
  content: string,
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/${category}board/${postId}/replies`,
    {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify({
        content,
      }),
    },
  );

  const data = await res.json();
  return data;
};

export const increaseViews = async (category: string, postId: number) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/${category}board/posts/${postId}/views`,
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

export const requestPreSignedPostUrl = async (
  category: string,
  fileName: string,
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/${category}board/posts/presigned-url`,
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
