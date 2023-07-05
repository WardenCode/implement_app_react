import axios from 'axios';
import { getAccessToken } from "./services/Auth.service";

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(config => {
  config.headers = config.headers || {};

  config.headers["Authorization"] = `Bearer ${getAccessToken()}`;
  config.headers["Accept"] = "application/json";
  config.headers["Content-Type"] = "application/json";

  return config;
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      console.log('Response error:', error.response.status);
      console.log('Response data:', error.response.data);
      console.log('Response headers:', error.response.headers);
    } else if (error.request) {
      console.log('Request error:', error.request);
    } else {
      console.log('Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export function parseDateForRead(date: Date) {
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate
}

