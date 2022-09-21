import axios, { AxiosResponse } from "axios";
import { removeStoredAuthToken } from "./authToken";
import Config from "./config";

interface IAxiosHelper {
  get: (...args: [string, any?]) => Promise<AxiosResponse<any, any>>;
  post: (...args: [string, any]) => Promise<AxiosResponse<any, any>>;
  put: (...args: [string, any]) => Promise<AxiosResponse<any, any>>;
  patch: (...args: [string, any]) => Promise<AxiosResponse<any, any>>;
  delete: (...args: [string, any]) => Promise<AxiosResponse<any, any>>;
}

export const axiosInstance = axios.create({ withCredentials: true });

const defaults = {
  baseURL: process.env.API_URL || Config.API_URL,
  headers: () => ({
    "Content-Type": "application/json",
  }),
  error: {
    code: "INTERNAL_ERROR",
    message:
      "Something went wrong. Please check your internet connection or contact our support.",
    status: 503,
    data: {},
  },
};

function API(
  method: string,
  url: string,
  variables?: any
): Promise<AxiosResponse<any, any>> {
  return new Promise((resolve, reject) => {
    axiosInstance({
      url: `${defaults.baseURL}${url}`,
      method,
      headers: defaults.headers(),
      params: method === "get" ? variables : undefined,
      data: method !== "get" ? variables : undefined,
    }).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        if (error.response) {
          if (error.response.data.code === "INVALID_TOKEN") {
            removeStoredAuthToken();
          } else {
            reject(error.response.data.message);
          }
        } else {
          reject(defaults.error);
        }
      }
    );
  });
}

const axiosHelper: IAxiosHelper = {
  get: (...args) => API("get", ...args),
  post: (...args) => API("post", ...args),
  put: (...args) => API("put", ...args),
  patch: (...args) => API("patch", ...args),
  delete: (...args) => API("delete", ...args),
};

export default axiosHelper;
