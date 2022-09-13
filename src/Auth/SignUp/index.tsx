import React from "react";
import { AuthTemplate } from "../../shared/components/templates";
import { SocialAuth } from "../../shared/components/UI/organisms";
import { Divider } from "../../shared/components/UI/atoms";
import SignUpForm from "./components/SignUpForm";

const SignUp: React.FC = () => (
  <AuthTemplate
    title="Let's get started!"
    subTitle="Register your details to continue"
  >
    <SocialAuth onGoogleAuth={() => console.log("google auth")} />
    <Divider withText="or" />
    <SignUpForm
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

export default SignUp;
