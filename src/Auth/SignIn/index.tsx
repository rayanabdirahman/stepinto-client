import * as Yup from "yup";
import { Center } from "@chakra-ui/react";
import { AuthTemplate } from "../../shared/components/templates";
import { SocialAuth } from "../../shared/components/UI/organisms";
import { Divider, Link } from "../../shared/components/UI/atoms";
import SignInForm from "./SignInForm";
import { pageUrl } from "../../shared/domain/constants/pageUrl";
import APIHelper from "../../shared/utilities/apiHelper";
import { ISignInModel } from "../../shared/domain/interfaces/auth";
import { FormikHelpers } from "formik";

const SignInValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .required("Password required")
    .min(8, "Password is too short - must be 8 characters minimum"),
});

const SignIn: React.FC = () => {
  const onSubmit = async (
    values: ISignInModel,
    actions: FormikHelpers<any>
  ) => {
    try {
      const response = await APIHelper.post("/accounts/auth/signin", values);
      console.log(JSON.stringify(response, null, 2));
      actions.setSubmitting(false);
    } catch (e) {
      console.log(e);
      actions.setSubmitting(false);
    }
  };
  return (
    <AuthTemplate title="Sign in" subTitle="Enter your credentials to continue">
      <SocialAuth onGoogleAuth={() => console.log("google auth")} />
      <Divider withText="or" />
      <SignInForm
        initialValues={{ email: "", password: "" }}
        validationSchema={SignInValidationSchema}
        onSubmit={onSubmit}
      />
      <Center>
        <Link href={pageUrl.SIGN_UP}>Don&#39;t have an account? Sign up</Link>
      </Center>
    </AuthTemplate>
  );
};

export default SignIn;
