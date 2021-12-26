export const getEmptyRows = () => {
  const height = 25;
  const weight = 25;
  return [...Array(weight)].map(() => [...Array(height)]);
};
