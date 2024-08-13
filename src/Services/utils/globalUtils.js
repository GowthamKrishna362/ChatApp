import { SESSION_STORAGE_KEYS } from "Constants/globalConstants.js";
export function getItemFromSessionStorage(id) {
  const item = sessionStorage.getItem(id);
  try {
    return JSON.parse(item);
  } catch (e) {
    return item;
  }
}
export function getUsername(){
  return getItemFromSessionStorage(SESSION_STORAGE_KEYS.USERNAME)
}