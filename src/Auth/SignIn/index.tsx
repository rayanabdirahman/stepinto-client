import React from "react";
import { AuthTemplate } from "../../shared/components/templates";
import { SocialAuth } from "../../shared/components/UI/organisms";
import { Divider } from "../../shared/components/UI/atoms";
import SignInForm from "./components/SignInForm";

const SignIn: React.FC = () => (
  <AuthTemplate title="Sign in" subTitle="Enter your credentials to continue">
    <SocialAuth onGoogleAuth={() => console.log("google auth")} />
    <Divider withText="or" />
    <SignInForm
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    />
  </AuthTemplate>
);

export default SignIn;
