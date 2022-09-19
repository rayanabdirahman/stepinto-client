import { FormikHelpers } from "formik";
import { useRouter } from "next/router";
import { pageUrl } from "../../shared/domain/constants/pageUrl";
import { ISignInModel } from "../../shared/domain/interfaces/auth";
import useApi from "../../shared/hooks/useApi";
import axiosHelper from "../../shared/utilities/axiosHelper";

type ReturnType = {
  errorMessage: string;
  onSubmit: (values: ISignInModel, actions: FormikHelpers<any>) => void;
};

export default function useSignIn(): ReturnType {
  const router = useRouter();
  const { mutate, error } = useApi.post(
    (model: ISignInModel) => axiosHelper.post("/accounts/auth/signin", model),
    { onSuccess: () => router.push(pageUrl.HOME) }
  );

  const onSubmit = (values: ISignInModel, actions: FormikHelpers<any>) => {
    try {
      mutate(values);
      actions.setSubmitting(false);
    } catch (e) {
      console.log(e);
      actions.setSubmitting(false);
    }
  };

  return { errorMessage: error as string, onSubmit };
}
