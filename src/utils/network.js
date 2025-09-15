import axios from 'axios';

import session from './session';

const network = axios.create({
  baseURL: 'http://103.49.239.40:3030/',
});

// modify each request to include token in header
network.interceptors.request.use(
  (config) => {
    const token = session.getSession();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// handle when token is expired
network.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      session.clearSession();
      //   window.location.href = '/login';
    }

    return Promise.reject(error);
  },
);

export default network;
