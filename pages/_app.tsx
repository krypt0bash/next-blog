import Spinner from "@components/Spinner";
import { AuthContextProvider } from "@utils/AuthContext";
import { SessionContextProvider } from "@utils/SessionContext";
import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <SessionContextProvider>
        <Spinner>
          <Component {...pageProps} />
          <Toaster />
        </Spinner>
      </SessionContextProvider>
    </AuthContextProvider>
  );
}
