import { createContext, useEffect, useState } from "react";
import { supabase } from "@utils/supabase";
import { Session, User } from "@supabase/supabase-js";

type Context = {
  session: Session | null | undefined;
  sessionLoading: boolean;
};

const SessionContext = createContext<Context>({
  session: null,
  sessionLoading: true,
});

const SessionContextProvider = ({ children }: any) => {
  const [session, setSession] = useState<Session | null>(null);
  const [sessionLoading, setSessionLoading] = useState<boolean>(true);
  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSessionLoading(false);
      setSession(session);
    };
    getSession();
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <SessionContext.Provider value={{ session, sessionLoading }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionContextProvider };
