import Axios from 'axios';
import Cookies from 'js-cookie';
import { DOMAIN, REFRESHTOKEN, TOKEN } from '../utils/config';

class baseService {
  constructor() {
    this.service = Axios.create({
      baseURL: DOMAIN,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get(TOKEN)}`,
      },
    });

    this.service.interceptors.response.use(
      response => response,
      error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          return this.refreshToken().then(access_token => {
            if (access_token) {
              originalRequest.headers.Authorization = `Bearer ${access_token}`;
              return Axios(originalRequest);
            }
          });
        }
        return Promise.reject(error);
      }
    );
  }

  async refreshToken() {
    try {
      const refresh_token = Cookies.get(REFRESHTOKEN);
      const response = await Axios.post(`${DOMAIN}/AccountManagement/token/refresh/`, {
        refresh: refresh_token,
      });
      const { access } = response.data;
      Cookies.set(TOKEN, access); // Set new access token with 15 minutes expiration
      return access;
    } catch (error) {
      console.error('Failed to refresh token', error);
      return null;
    }
  }

  put(url, model) {
    return this.service.put(url, model);
  }

  post(url, model) {
    return this.service.post(url, model);
  }

  get(url, params) {
    return this.service.get(url, { params });
  }

  delete(url) {
    return this.service.delete(url);
  }

  upload(url, model) {
    const formData = new FormData();
    for (let key in model) {
      formData.append(key, model[key]);
    }
    return this.service.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  login(url, model) {
    return Axios.post(`${DOMAIN}${url}`, model, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export const service = new baseService();
