import { SESSION_STORAGE_KEYS } from '@constants/globalConstants.js';

export function getItemFromSessionStorage(id) {
  const item = sessionStorage.getItem(id);
  try {
    return JSON.parse(item);
  } catch (e) {
    return item;
  }
}
export function getUsername() {
  return getItemFromSessionStorage(SESSION_STORAGE_KEYS.USERNAME);
}

export function getJwtToken() {
  return getItemFromSessionStorage(SESSION_STORAGE_KEYS.JWT_TOKEN);
}

export function getHumanizedMessageTimeStamp() {
  const date = new Date();
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };
  const formattedTime = date.toLocaleTimeString('en-US', options);
  return formattedTime;
}


export function getAuthorizationHeader() {
  const token = getJwtToken();
  return `Bearer ${token}`
}