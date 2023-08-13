export const getIPAddress = async () => {
  const res = await fetch(`https://api64.ipify.org?format=json`);
  const data = await res.json();

  return data.ip;
};

export const checkNewVisitor = async (ip: string) => {
  const res = await fetch(`${import.meta.env.VITE_API_SERVER}/visit/new`, {
    method: `POST`,
    headers: {
      'Content-Type': `application/json`,
    },
    body: JSON.stringify({
      ip,
    }),
  });

  const data = await res.json();
  return data;
};

export const getTotalVisitor = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_SERVER}/visit/total`);

  const data = await res.json();
  return data;
};

export const getTodayVisitor = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_SERVER}/visit/today`);

  const data = await res.json();
  return data;
};
