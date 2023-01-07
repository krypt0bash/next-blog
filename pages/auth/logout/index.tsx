import Spinner from "@components/Spinner";
import { SessionContext } from "@utils/SessionContext";
import { supabase } from "@utils/supabase";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { session } = useContext(SessionContext);
  useEffect(() => {
    const logout = async () => {
      await supabase.auth.signOut();
    };
    logout();
    router.push("/");
  }, []);
  return <Spinner />;
};

export default LoginPage;
