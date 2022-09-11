import axios from "axios";
import { useRouter } from "next/router";
import { removeStoredAuthToken } from "./authToken";
import Config from "./config";

interface IApi {
  get: (args: any) => Promise<unknown>;
  post: (args: any) => Promise<unknown>;
  put: (args: any) => Promise<unknown>;
  patch: (args: any) => Promise<unknown>;
  delete: (args: any) => Promise<unknown>;
}

const defaults = {
  baseURL: process.env.API_URL || Config.BASE_URL,
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

const APIHelper = (method: string, url: string, variables?: any) => {
  const router = useRouter();

  return new Promise((resolve, reject) => {
    axios({
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
          if (error.response.data.error.code === "INVALID_TOKEN") {
            removeStoredAuthToken();
            router.push("/auth/signin");
          } else {
            reject(error.response.data.error);
          }
        } else {
          reject(defaults.error);
        }
      }
    );
  });
};

const API: IApi = {
  get: (...args) => APIHelper("get", ...args),
  post: (...args) => APIHelper("post", ...args),
  put: (...args) => APIHelper("put", ...args),
  patch: (...args) => APIHelper("patch", ...args),
  delete: (...args) => APIHelper("delete", ...args),
};

export default API;
