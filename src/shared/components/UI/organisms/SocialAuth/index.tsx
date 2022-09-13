import React from "react";
import Button from "../../atoms/Button";
import { FcGoogle } from "react-icons/fc";

type Props = {
  onGoogleAuth: () => void;
};

const SocialAuth: React.FC<Props> = ({ onGoogleAuth }) => (
  <Button leftIcon={<FcGoogle />} colorScheme="gray" onClick={onGoogleAuth}>
    Sign in with Google
  </Button>
);

export default SocialAuth;
