import mutation, { MutaionReturnType, MutaionTuple } from "./useMutation";

interface IProps {
  // get: (...args: [string, any]) => Promise<unknown>;
  post: (...args: MutaionTuple) => MutaionReturnType;
  // put: (...args: [string, any]) => Promise<unknown>;
  // patch: (...args: [string, any]) => Promise<unknown>;
  // delete: (...args: [string, any]) => Promise<unknown>;
}

const useApi: IProps = {
  post: (...args) => mutation("post", ...args),
};

export default useApi;
