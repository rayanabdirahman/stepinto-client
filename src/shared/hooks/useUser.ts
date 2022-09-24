import axiosHelper from "../utilities/axiosHelper";
import useApi from "./useApi";

type ReturnType = {
  isLoading: boolean;
  isFetching: boolean;
  user: any;
  error: unknown;
};

export default function useUser(): ReturnType {
  const { isLoading, isFetching, data, error } = useApi.get("user", () =>
    axiosHelper.get("/accounts/auth/user")
  );

  return {
    isLoading,
    isFetching,
    user: data?.data?.user,
    error,
  };
}
