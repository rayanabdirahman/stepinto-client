import React from "react";
import * as Yup from "yup";
import { AuthTemplate } from "../../shared/components/templates";
import { SocialAuth } from "../../shared/components/UI/organisms";
import { Divider, Link } from "../../shared/components/UI/atoms";
import SignUpForm from "./components/SignUpForm";
import { Center } from "@chakra-ui/react";
import { pageUrl } from "../../shared/domain/constants/pageUrl";

const SignUpValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .required("Password required")
    .min(8, "Password is too short - must be 8 characters minimum"),
});

const SignUp: React.FC = () => (
  <AuthTemplate
    title="Let's get started!"
    subTitle="Register your details to continue"
  >
    <SocialAuth onGoogleAuth={() => console.log("google auth")} />
    <Divider withText="or" />
    <SignUpForm
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={SignUpValidationSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    />
    <Center>
      <Link href={pageUrl.SIGN_IN}>Already have an account? Sign in</Link>
    </Center>
  </AuthTemplate>
);

export default SignUp;
