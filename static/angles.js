function calcAngleForSeconds(date) {
  const seconds = date.getSeconds();
  return seconds * 6;
}

function calcAngleForMinutes(date) {
  const minutes = date.getMinutes();
  return minutes * 6;
}

function calcAngleForHours(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return hours * 30 + minutes / 2;
}
