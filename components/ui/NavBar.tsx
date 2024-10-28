"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/Modal";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { MenuItem } from "@/data/menuData";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { Profile } from "../Profile";

interface NavBarProps {
  menuItems: MenuItem[];
}

const NavBar: React.FC<NavBarProps> = ({ menuItems }) => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const supabase = createClient(); // initialize supabase outside component

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      console.log("Current User: ", data.user);
      setUser(data.user);
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        const currentUser = session?.user || null;
        setUser((prevUser) =>
          prevUser !== currentUser ? currentUser : prevUser
        );
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [supabase.auth]);

  return (
    <div className="navbar sticky top-4 mx-auto z-[1] bg-white text-black shadow rounded-xl w-11/12">
      <div className="navbar-start">
        <div className="dropdown font-bold">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-b-xl z-[1] ms-1 mt-3 w-52 p-2"
          >
            {menuItems &&
              menuItems.map((item, index) => (
                <li key={index}>
                  {item.subMenu ? (
                    <>
                      <a>{item.title}</a>
                      <ul className="p-2">
                        {item.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link href={subItem.path} prefetch={true}>
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link href={item.path as string} prefetch={true}>
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
          </ul>
        </div>
        <Link href="/" className="cursor-pointer text-xl">
          <div>
            <Image
              src="/images/Abigrilogo.png"
              alt="AbiGri logo"
              width={100}
              height={100}
              priority={true}
            />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex font-semibold">
        <ul className="menu menu-horizontal px-1">
          {menuItems &&
            menuItems.map((menu, index) => (
              <li key={index}>
                {menu.subMenu ? (
                  <div className="dropdown dropdown-hover dropdown-bottom">
                    <div tabIndex={0} role="button">
                      <span>{menu.title} &#11206;</span>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 ms-1 rounded-b-xl w-40 p-2 shadow"
                    >
                      {menu.subMenu.map((subMenu, subIndex) => (
                        <li key={subIndex}>
                          <Link href={subMenu.path} prefetch={true}>
                            {subMenu.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link href={menu.path ?? ""}>{menu.title}</Link>
                )}
              </li>
            ))}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <Button variant="outline" onClick={() => setShowModal(true)}>
          Book Farm Tour
        </Button>
        <Modal onClose={() => setShowModal(false)} visible={showModal}>
          <ComingSoon />
        </Modal>

        {user ? (
          <Profile />
        ) : (
          <LoginButton>
            <Button className="bg-green-500 hover:bg-green-600">SignIn</Button>
          </LoginButton>
        )}
      </div>
    </div>
  );
};

export default NavBar;
