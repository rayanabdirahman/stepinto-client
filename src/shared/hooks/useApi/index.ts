import mutation, { MutaionReturnType, MutaionTuple } from "./mutation";
import query, { QueryReturnType, QueryTuple } from "./query";

interface IProps {
  get: (...args: QueryTuple) => QueryReturnType;
  post: (...args: MutaionTuple) => MutaionReturnType;
  // put: (...args: [string, any]) => Promise<unknown>;
  // patch: (...args: [string, any]) => Promise<unknown>;
  // delete: (...args: [string, any]) => Promise<unknown>;
}

const useApi: IProps = {
  get: (...args) => query(...args),
  post: (...args) => mutation("post", ...args),
};

export default useApi;
