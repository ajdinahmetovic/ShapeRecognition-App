import axios from 'axios';

export const initializeAxios = () => {
  axios.defaults.baseURL = 'https://YOUR_API_URL.io';

  return Promise.resolve();
};

export const assignTokenHeader = (token) => {
  axios.interceptors.request.use(
    async (config) => {
      let bearerToken = 'Bearer ' + token;
      config.headers.common.Authorization = bearerToken;
      config.headers.common.Accept = 'application/json';
      config.headers.common['Access-Control-Allow-Origin'] = '*';

      return config;
    },
    (error) => {
      //return promise.reject(error);
    },
  );
};
