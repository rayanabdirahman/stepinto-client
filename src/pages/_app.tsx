import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../shared/chakra/theme";
import "../shared/interceptors/axios";
import Navbar from "../shared/components/UI/organisms/Navbar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const { pathname } = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        {!pathname.split("/").includes("auth") && <Navbar />}
        <Component {...pageProps} />
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
