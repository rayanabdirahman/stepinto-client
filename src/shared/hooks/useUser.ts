import axiosHelper from "../utilities/axiosHelper";
import useApi from "./useApi";

type ReturnType = {
  isLoading: boolean;
  user: any;
  error: unknown;
};

export default function useUser(): ReturnType {
  const { isLoading, data, error } = useApi.get("user", () =>
    axiosHelper.get("/accounts/auth/user")
  );

  return {
    isLoading,
    user: data?.data?.user,
    error,
  };
}
