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


export function makePostRequest(url, payload, options = {}) {
  console.log(url);

  const { throwError, onError, setLoader = () => {} } = options;
  return axiosClient
    .post(url, payload)
    .then((res) => res)
    .catch((err) => errorHandler(err, onError, throwError));
}
