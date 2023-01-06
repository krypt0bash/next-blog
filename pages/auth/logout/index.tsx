import { supabase } from "@utils/supabase";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LoginPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const logout = async () => {
      await supabase.auth.signOut();
    };
    logout();
    router.push("/");
  }, []);
  return <h1>Logging out</h1>;
};

export default LoginPage;
