import { getAccessToken } from '@utils/index';

export const getPostList = async (
  board: string,
  page: number,
  searchType: string,
  searchKeyword: string,
) => {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_SERVER
    }/${board}/posts?page=${page}&search=${searchType},${searchKeyword}`,
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

export const getAnnouncementList = async (board: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/${board}/announcements`,
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

export const getPost = async (board: string, postId: number) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/${board}/${postId}`,
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
  board: string,
  _id: string,
  title: string,
  content: string,
) => {
  const res = await fetch(`${import.meta.env.VITE_API_SERVER}/${board}/posts`, {
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
  });

  const data = await res.json();
  return data;
};

export const updatePost = async (
  board: string,
  index: number,
  title: string,
  content: string,
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/${board}/${index}`,
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

export const deletePost = async (board: string, index: number) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/${board}/${index}`,
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

export const recommendPost = async (board: string, postId: number) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/${board}/${postId}/recommends`,
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

export const viewPost = async (board: string, postId: number) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/${board}/${postId}/views`,
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

export const createComment = async (
  board: string,
  postId: number,
  content: string,
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/${board}/${postId}/comments`,
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

export const deleteComment = async (
  board: string,
  postId: number,
  commentId: number,
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/${board}/${postId}/comments`,
    {
      method: `PATCH`,
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify({
        commentId,
      }),
    },
  );

  const data = await res.json();
  return data;
};

export const createReply = async (
  board: string,
  postId: number,
  commentId: number,
  content: string,
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/${board}/${postId}/replies`,
    {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify({
        content,
        commentId,
      }),
    },
  );

  const data = await res.json();
  return data;
};

export const deleteReply = async (
  board: string,
  postId: number,
  commentId: number,
  replyId: number,
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/${board}/${postId}/replies`,
    {
      method: `PATCH`,
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify({
        commentId,
        replyId,
      }),
    },
  );

  const data = await res.json();
  return data;
};

export const requestPreSignedPostUrl = async (
  board: string,
  fileName: string,
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_SERVER}/${board}/presigned-url`,
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
