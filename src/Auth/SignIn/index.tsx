import * as Yup from "yup";
import { Center } from "@chakra-ui/react";
import { AuthTemplate } from "../../shared/components/templates";
import { SocialAuth } from "../../shared/components/UI/organisms";
import { Divider, Link } from "../../shared/components/UI/atoms";
import SignInForm from "./SignInForm";
import { pageUrl } from "../../shared/domain/constants/pageUrl";
import useStore from "../../shared/store";
import useSignIn from "./useSignIn";

const SignInValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .required("Password required")
    .min(8, "Password is too short - must be 8 characters minimum"),
});

const SignIn: React.FC = () => {
  // const store = useStore((state) => state.session.user);

  const { onSubmit, errorMessage } = useSignIn();

  return (
    <AuthTemplate
      title="Sign in"
      subTitle="Enter your credentials to continue"
      errorMessage={errorMessage}
    >
      {/* <SocialAuth onGoogleAuth={() => console.log("google auth")} />
      <Divider withText="or" /> */}
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
