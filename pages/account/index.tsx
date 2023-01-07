import AuthRoute from "@components/AuthRoute";
import Navbar from "@components/Navbar";
import { AuthContext } from "@utils/AuthContext";
import { NextPage } from "next";
import React, { useContext } from "react";

const AccountPage: NextPage = () => {
  const { user } = useContext(AuthContext);
  return (
    <AuthRoute user={user}>
      <div className="">
        <Navbar />
        <div className="mx-auto w-4/5 pt-16">
          <h1 className="text-2xl font-bold">Your profile</h1>
          <div className="flex flex-col mt-10 items-center">
            <img
              className={`w-32 h-32 rounded-full mx-2 shadow-sm`}
              src={user?.user_metadata.avatar_url}
              alt="Your profile image"
            />
            <h1 className="mt-2 font-bold text-neutral-800">
              {user?.user_metadata.name}
            </h1>
            <p className="mt-1 text-sm text-neutral-500">{user?.email}</p>
            <p className="-mt-1 mb-12 text-xs font-bold text-neutral-600">
              Logged in with{" "}
              <span className="capitalize ">{user?.app_metadata.provider}</span>
            </p>
            <button className="bg-neutral-500 my-2 px-4 py-2 rounded-lg font-semibold text-white">
              Change password
            </button>
            <button className="bg-blue-500 my-2 px-4 py-2 rounded-lg font-semibold text-white">
              Delete account
            </button>
          </div>
        </div>
      </div>
    </AuthRoute>
  );
};

export default AccountPage;
