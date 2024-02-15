export const getIdFromString = (str: string) =>
  str.toLowerCase().split(" ").join("-");
