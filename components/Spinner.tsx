import { AuthContext } from "@utils/AuthContext";
import { PropsWithChildren, useContext } from "react";

const Spinner = ({ children }: PropsWithChildren) => {
  const { loading } = useContext(AuthContext);
  return loading ? (
    <div
      // className={` ${
      //   true
      //     ? "z-100 flex flex-col justify-center items-center w-4 h-4 rounded-full border-r-4 border-neutral-700 animate-spin invisible"
      //     : ""
      // }`}
      className="z-100 flex justify-center items-center w-screen h-screen overflow-hidden"
    >
      <div className="rounded-full border-r-4 w-10 h-10 border-neutral-700 animate-spin"></div>
    </div>
  ) : (
    <div>{children}</div>
  );
};

export default Spinner;
