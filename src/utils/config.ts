// import {store} from '@redux/store';
import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "./helpers";

const HTTP_CLIENT: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

const initializeConfig = (store: any) => {
  setupAxios(store);
};

const setupAxios = (store: any) => {
  HTTP_CLIENT.interceptors.request.use(
    (config: any) => {
      const { user } = store?.getState()?.root?.user;
      config.headers["app-key"] = `${process.env["REACT_APP_KEY"]}`;
      if (user) {
        config.headers.Authorization = `Bearer ${user?.token}`;
      }
      return config;
    },
    (err: any) => {
      return Promise.reject(err);
    }
  );

  HTTP_CLIENT.interceptors.response.use(
    (sucs) => {
      return sucs;
    },
    (err) => {
      if (err?.response?.status === 401 || err?.status === 401) {
        let { user } = store.getState().root?.user;
      }
      return Promise.reject(err);
    }
  );
};
export { HTTP_CLIENT, initializeConfig };

//" for handling response "//

// HTTP_CLIENT.interceptors.response.use(
//   response => {
//       return response;
//   },
//   error => {
//       let originalRequest = error.config;
//       let refreshToken = localStorage.getItem('refreshToken');
//       const username = EmailDecoder(); // decode email from jwt token subject
//       if (
//           refreshToken &&
//           error.response.status === 403 &&
//           !originalRequest._retry &&
//           username
//       ) {
//           originalRequest._retry = true;
//           return axios
//               .post(`${API_URL}/authentication/refresh`, {
//                   refreshToken: refreshToken,
//                   username,
//               })
//               .then(res => {
//                   if (res.status === 200) {
//                       localStorage.setItem(
//                           'accessToken',
//                           res.data.accessToken
//                       );
//                       localStorage.setItem(
//                           'refreshToken',
//                           res.data.refreshToken
//                       );

//                       originalRequest.headers[
//                           'Authorization'
//                       ] = `Bearer ${res.data.accessToken}`;

//                       return axios(originalRequest);
//                   }
//               })
//               .catch(() => {
//                   localStorage.clear();
//                   location.reload();
//               });
//       }
//       return Promise.reject(error.response || error.message);
//   }
// );
