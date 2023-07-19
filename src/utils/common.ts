export function decodeJWT(token: string) {
  const base64Url = token.split(`.`)[1];
  const base64 = base64Url.replace(/-/g, `+`).replace(/_/g, `/`);
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split(``)
      .map(c => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join(``),
  );

  return JSON.parse(jsonPayload);
}

export function getAccessToken() {
  const token = sessionStorage.getItem(`accessToken`);

  if (!token) {
    return null;
  }

  return token;
}

export function convertDateFormat(inputDate: string) {
  const utcDate = new Date(inputDate);
  const timezoneOffset = new Date().getTimezoneOffset() * 60000;
  const date = new Date(utcDate.getTime() - timezoneOffset);

  const today = new Date();

  if (date.getFullYear() !== today.getFullYear())
    return `${(date.getMonth() + 1).toString().padStart(2, `0`)}.${date
      .getDate()
      .toString()
      .padStart(2, `0`)}`;

  if (date.getMonth() !== today.getMonth())
    return `${(date.getMonth() + 1).toString().padStart(2, `0`)}.${date
      .getDate()
      .toString()
      .padStart(2, `0`)}`;

  if (date.getDate() !== today.getDate())
    return `${(date.getMonth() + 1).toString().padStart(2, `0`)}.${date
      .getDate()
      .toString()
      .padStart(2, `0`)}`;

  if (date.getDate() === today.getDate())
    return `${date.getHours().toString().padStart(2, `0`)}:${date
      .getMinutes()
      .toString()
      .padStart(2, `0`)}`;
}
