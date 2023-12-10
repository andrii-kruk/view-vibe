const capitalizeFirstLetter = (word: string): string => {
  const firstLetter = word[0].toUpperCase();
  const slicedWord = word.slice(1);
  return firstLetter + slicedWord;
};

export default capitalizeFirstLetter;
