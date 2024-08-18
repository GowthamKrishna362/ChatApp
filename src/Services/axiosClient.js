import axios from "axios";
import { getItemFromSessionStorage } from "../utils/globalUtils.js";
import { SESSION_STORAGE_KEYS } from "Constants/globalConstants.js";

const axiosClient = axios.create();

// axiosClient.interceptors.response.use((config) => {
//   if (!config.skipAuthorization) {
//     const token = getItemFromSessionStorage(SESSION_STORAGE_KEYS.JWT_TOKEN);
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//   }
//   return config;
// });

export default axiosClient;
