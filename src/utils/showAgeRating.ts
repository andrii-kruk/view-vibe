const showAgeRating = (adult: boolean): string => {
  if (adult) return "18+";
  return "13+";
};

export default showAgeRating;
