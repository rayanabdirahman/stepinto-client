import { axiosInstance } from "../utilities/axiosHelper";
import Config from "../utilities/config";

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      const response = await axiosInstance.post(
        `${Config.API_URL}/accounts/auth/refresh`,
        {}
      );
      if (response.status === 200) {
        return axiosInstance(error.config);
      }
    }
    return Promise.reject(error);
  }
);
