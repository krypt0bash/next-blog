import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@utils/supabase";
import { User } from "@supabase/supabase-js";
import { SessionContext } from "./SessionContext";

type Context = {
  user: User | null | undefined;
  loading: boolean;
};

const AuthContext = createContext<Context>({
  user: null,
  loading: true,
});

const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState<boolean>(true);
  const { session, sessionLoading } = useContext(SessionContext);

  useEffect(() => {
    const getUser = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        const curr = user;
        setLoading(false);
        setUser(curr);
      } catch (err) {
        console.error(err);
      }
    };
    getUser();
  }, [session]);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
