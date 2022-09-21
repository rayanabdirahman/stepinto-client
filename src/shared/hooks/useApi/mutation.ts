import {
  MutationFunction,
  useMutation as useQueryMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export type MutaionReturnType = UseMutationResult<
  AxiosResponse<any, any>,
  unknown,
  any,
  unknown
>;

export type MutaionTuple = [
  MutationFunction<AxiosResponse<any, any>, any>,
  UseMutationOptions?
];

export default function useMutation(
  method: string,
  mutationFunction: MutationFunction<AxiosResponse<any, any>, any>,
  options?: UseMutationOptions
) {
  const mutation = useQueryMutation(mutationFunction, options);
  return mutation;
}

// export type MutaionTuple = [any, UseMutationOptions?];

// export default function useMutation(
//   method: string,
//   url: string,
//   mutationData: any,
//   options?: UseMutationOptions
// ) {
//   const mutation = useQueryMutation((mutationData) =>
//     APIHelper[method as keyof typeof APIHelper](url, mutationData)
//   );

//   return mutation;
// }
