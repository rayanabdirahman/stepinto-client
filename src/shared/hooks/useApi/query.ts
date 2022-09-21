import {
  useQuery as useReactQuery,
  UseQueryOptions,
  QueryFunction,
  UseQueryResult,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export type QueryReturnType = UseQueryResult<AxiosResponse<any, any>, unknown>;

export type QueryTuple = [
  string,
  QueryFunction<AxiosResponse<any, any>, any>,
  UseQueryOptions<any, any, any, string[]>?
];

export default function useQuery(
  key: string,
  queryFunction: QueryFunction<AxiosResponse<any, any>, any>,
  options?: UseQueryOptions<any, any, any, string[]>
) {
  const query = useReactQuery([key], queryFunction, options);
  return query;
}
