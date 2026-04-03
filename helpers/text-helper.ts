export const capitalFirstLetter = (word: string) => {
  const firstChar = word.slice(0, 1).toUpperCase();
  const allCharsExcept1st = word.slice(1);
  return firstChar + allCharsExcept1st;
};
