import React from "react";
import { AuthTemplate } from "../../shared/components/templates";
import { SocialAuth } from "../../shared/components/UI/organisms";
import { Divider, Link } from "../../shared/components/UI/atoms";
import SignInForm from "./components/SignInForm";
import { pageUrl } from "../../shared/domain/constants/pageUrl";
import { Center } from "@chakra-ui/react";

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
    <Center>
      <Link href={pageUrl.SIGN_UP}>Don&#39;t have an account? Sign up</Link>
    </Center>
  </AuthTemplate>
);

export default SignIn;
