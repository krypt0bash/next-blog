import { supabase } from "@utils/supabase";
import { NextPage } from "next";
import { useEffect } from "react";

const LoginPage: NextPage = () => {
  useEffect(() => {
    const login = async () => {
      await supabase.auth.signInWithOAuth({
        provider: "github",
      });
    };
    login();
  }, []);
  return <h1>Logging in</h1>;
};

export default LoginPage;
