export const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1)) / 4) * 4;
  let y = Math.floor((Math.random() * (max - min + 1)) / 4) * 4;

  return [x, y];
};
