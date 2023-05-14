export const getItem = (key: string) => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return null;
};

export const setItem = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};
