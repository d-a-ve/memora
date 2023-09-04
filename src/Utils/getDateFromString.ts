export default function getDateFromString(birthdayDate:string) {
  const d = new Date();
  const year = d.getFullYear();
  const [day, month] = birthdayDate.split('/').map(date => Number(date));

  return new Date(year, month - 1, day, 5).toISOString();
}
