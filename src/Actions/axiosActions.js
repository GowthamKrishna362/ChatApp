import axiosClient from "Services/axiosClient.js";

function errorHandler(err, onError, throwError) {
  if (onError) {
    return onError(err);
  }
  if (throwError) {
    throw new Error(err);
  }
  return err;
}

export function makeGetRequest(url, options = {}) {
  const { throwError, onError } = options;

  return axiosClient
    .get(url)
    .then((res) => res)
    .catch((err) => errorHandler(err, onError, throwError));
}

export function makePostRequest(url, payload, options = {}) {
  const { throwError, onError } = options;

  return axiosClient
    .post(url, payload)
    .then((res) => res)
    .catch((err) => errorHandler(err, onError, throwError));
}