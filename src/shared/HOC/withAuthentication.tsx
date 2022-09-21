import { useRouter } from "next/router";
import { ComponentType } from "react";
import { FullPageSpinner } from "../components/UI/molecules";
import { pageUrl } from "../domain/constants/pageUrl";
import useUser from "../hooks/useUser";

export default function withAuthentication(
  WrappedComponent: ComponentType<any>
) {
  return function WithAuthentication(props: any) {
    const router = useRouter();
    const { isLoading, user } = useUser();

    if (isLoading) {
      return <FullPageSpinner />;
    }

    if (user) {
      return <WrappedComponent {...props} user={user} />;
    }

    router.push(pageUrl.SIGN_IN);
  };
}
