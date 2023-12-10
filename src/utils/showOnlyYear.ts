const showOnlyYear = (date: string = ""): string => {
  const year = date.split("-")[0];
  return year;
};

export default showOnlyYear;
