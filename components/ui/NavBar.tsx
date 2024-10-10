"use client";
import React, { useState } from "react";
import { MenuItem } from "@/app/data/menuData";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Modal from "./Modal";

interface NavBarProps {
  menuItems: MenuItem[];
}

const NavBar: React.FC<NavBarProps> = ({ menuItems }) => {
  // handling modal
  const [showModal, setShowModal] = useState(false);

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
                            <Link href={subItem.path}>{subItem.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link href={item.path as string}>{item.title}</Link>
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
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems &&
            menuItems.map((menu, index) => (
              <li key={index}>
                {menu.subMenu ? (
                  <div className="dropdown dropdown-hover dropdown-bottom">
                    <div tabIndex={0} role="button">
                      <span>{menu.title}</span>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 ms-1 rounded-b-xl w-40 p-2 shadow"
                    >
                      {menu.subMenu.map((subMenu, subIndex) => (
                        <li key={subIndex}>
                          <Link href={subMenu.path}>{subMenu.title}</Link>
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
      <div className="navbar-end">
        <Button
          text="Book Tour"
          onClick={() => setShowModal(true)}
          className="btn-md bg-button hover:bg-primary-background"
        />
        <Modal onClose={() => setShowModal(false)} visible={showModal} />
      </div>
    </div>
  );
};

export default NavBar;
