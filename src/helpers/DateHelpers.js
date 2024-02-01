
export default function getAgeFrom(birthDate) {

  if (!birthDate) {
    return '?';
  }
  
  const [birthYear, birthMonth, birthDay] = birthDate.split('-');
  let today = new Date();
  let todayYear = today.getFullYear();
  let todayMonth = today.getMonth() + 1;
  let todayDay = today.getDate();
  
  let age = todayYear - +birthYear;

  if (birthMonth > todayMonth) {
    return age - 1;
  }

  if (birthMonth === todayMonth && birthDay > todayDay) {
    return age - 1;
  }

  return age;
}