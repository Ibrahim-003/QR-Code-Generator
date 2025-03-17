export const inputFormatter = (value) => {
  return value.replace(/[^a-z0-9A-Z]+/g, "");
};
