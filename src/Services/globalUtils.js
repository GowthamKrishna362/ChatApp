
export function getItemFromSessionStorage(id) {
  const item = sessionStorage.getItem(id);
  try {
    return JSON.parse(item);
  } catch (e) {
    return item;
  }
}
