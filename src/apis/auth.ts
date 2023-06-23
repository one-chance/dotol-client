export const checkUserId = async (userId: string) => {
  fetch(`${import.meta.env.VITE_API_SERVER}/users/check-id/${userId}`, {
    method: `GET`,
    headers: {
      'Content-Type': `application/json`,
    },
  })
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.error(err));
};
