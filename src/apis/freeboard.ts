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

export const requestPreSignedPostUrl = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_SERVER}/aws/test`, {
    method: `POST`,
    headers: {
      'Content-Type': `application/json`,
    },
  });

  const data = await res.json();
  return data;
};

export const upload = async (key: string, fileName: string) => {
  const data: FormData = new FormData();

  data.append(
    `key`,
    `<your folder path in aws s3>/sample_1624816164229_3e01f5e9-89b0-4a85-a648-fa278ce11a08.jpg`,
  );
  data.append(`X-Amz-Algorithm`, `AWS4-HMAC-SHA256`);
  data.append(
    `X-Amz-Credential`,
    `xxxxxxxxxxxx/20210608/ap-south-1/s3/aws4_request`,
  );
  data.append(`X-Amz-Date`, `20210608T093333Z`);
  data.append(`Policy`, `jwt-token`);
  data.append(`X-Amz-Signature`, `xxxxxx`);
  data.append(`x-amz-meta-file_id`, `12345`);
  data.append(
    `Tagging`,
    `<Tagging><TagSet><Tag><Key>isUnverified</Key><Value>true</Value></Tag></TagSet></Tagging>`,
  );
  data.append(`Content-Type`, `image/png`);
  data.append(`Cache-Control`, `max-age=86400`);
  // data.append(
  //   `file`,
  //   fs.createReadStream(`/home/ramprakash/Downloads/sample.jpeg`),
  // );

  const res = await fetch(
    `https://<your bucket name>.s3.ap-south-1.amazonaws.com/baram`,
    {
      method: `POST`,
      headers: {
        'Content-Type': `multipart/form-data`,
      },
      body: data,
    },
  );

  const resData = await res.json();
  return resData;
};
