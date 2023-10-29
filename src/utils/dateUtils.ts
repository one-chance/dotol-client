export const convertDateFormat = (inputDate: string) => {
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
};
