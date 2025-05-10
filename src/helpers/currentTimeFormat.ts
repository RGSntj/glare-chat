export function getCurrentTime(messageDate: Date) {
  const date = new Date(messageDate);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${formattedMinutes}`;
}
