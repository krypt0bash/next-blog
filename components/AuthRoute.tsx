import { useContext, useEffect, useRef, useState } from "react";
import Spinner from "./Spinner";
import { useRouter } from "next/dist/client/router";
import { AuthContext, AuthContextProvider } from "@utils/AuthContext";
import { SessionContext } from "@utils/SessionContext";
import { toast } from "react-hot-toast";

const AuthRoute = ({ children }: any) => {
  const { user, loading } = useContext(AuthContext);
  const { session } = useContext(SessionContext);
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const checkAuthRoute = async () => {
      console.log(user, loading);
      if (!user && !loading) {
        setLoaded(true);
        toast.error("You're not logged in.");
        await router.push("/");
      }
    };
    checkAuthRoute();
  }, [session, loading]);
  if (loaded) {
    return <Spinner />;
  } else return <div>{children}</div>;
};

export default AuthRoute;
