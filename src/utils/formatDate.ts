import dayjs from 'dayjs';

export const formatDate = (date: string) => {
  const formattedDate = dayjs(date).format('YYYY-MM-DD - HH:mm');
  return formattedDate;
};
