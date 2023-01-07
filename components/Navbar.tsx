import { AuthContext } from "@utils/AuthContext";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { Fragment, useContext } from "react";
import defaultUser from "../public/defaultuser.webp";
import Image from "next/image";

import { Menu, Transition } from "@headlessui/react";

const links = [
  { href: "/account", label: "Account", authRequired: true },
  { href: "/auth/logout", label: "Log out", authRequired: true },
];

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav className="w-full py-8">
      <div className="mx-auto w-4/5 flex justify-between">
        <Link href="/">
          <p className="font-bold text-xl">NextBlog</p>
        </Link>
        <ul className="flex items-center ">
          <Link href="/account">
            <div className="w-10 h-10 mx-2 relative">
              {user?.user_metadata.avatar_url ? (
                <Image
                  className={`rounded-full`}
                  src={user?.user_metadata.avatar_url}
                  alt="Your profile image"
                  fill
                />
              ) : (
                <Image
                  className={`rounded-full`}
                  src={defaultUser}
                  alt="Your profile image"
                />
              )}
            </div>
          </Link>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 focus:ring-offset-gray-100">
                <IoIosArrowDown />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {links.map((link) =>
                    user || !link.authRequired ? (
                      <Menu.Item key={link.href}>
                        {({ active }) => (
                          <a
                            href={link.href}
                            className={`${
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700"
                            } block px-4 py-2 text-sm`}
                          >
                            {link.label}
                          </a>
                        )}
                      </Menu.Item>
                    ) : null
                  )}
                  <Menu.Item key="login">
                    {user ? (
                      <div className="block px-4 py-2 text-sm text-gray-700 border-t-[1px] border-gray-100">
                        <p>Signed in as</p>
                        <b>{user?.email}</b>
                      </div>
                    ) : (
                      <a
                        href="/auth/login"
                        className="block px-4 py-2 text-sm text-gray-700 border-gray-100 hover:bg-gray-100"
                      >
                        Sign in
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
