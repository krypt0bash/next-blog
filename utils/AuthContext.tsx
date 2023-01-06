import { createContext, useEffect, useState } from "react";
import { supabase } from "@utils/supabase";
import { User } from "@supabase/supabase-js";

const AuthContext = createContext<User | null | undefined>(null);

const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const curr = user;
      setUser(curr);
    };
    fetchUser();
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
