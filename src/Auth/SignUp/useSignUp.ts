import { FormikHelpers } from "formik";
import { useRouter } from "next/router";
import { pageUrl } from "../../shared/domain/constants/pageUrl";
import { ISignUpModel } from "../../shared/domain/interfaces/auth";
import useApi from "../../shared/hooks/useApi";
import axiosHelper from "../../shared/utilities/axiosHelper";

type ReturnType = {
  errorMessage: string;
  onSubmit: (values: ISignUpModel, actions: FormikHelpers<any>) => void;
};

export default function useSignUp(): ReturnType {
  const router = useRouter();
  const { mutate, error } = useApi.post(
    (model: ISignUpModel) => axiosHelper.post("/accounts/auth/signup", model),
    { onSuccess: () => router.push(pageUrl.HOME) }
  );

  const onSubmit = (values: ISignUpModel, actions: FormikHelpers<any>) => {
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
