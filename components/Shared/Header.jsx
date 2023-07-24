"use client";
import Link from "next/link";
import React, { useState } from "react";
import GlobalHOC from "../HOC/GlobalValues";
import { FiMenu } from "react-icons/fi";
import MenuModal from "./Modal";

function Header({ value }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="hidden md:flex justify-between items-center text-xl py-4 px-3 font-semibold">
        <div className="flex gap-20 items-center">
          <div>
            <Link className="py-3 px-2" href="/">
              Company name
            </Link>
          </div>
          <div className="hidden md:flex gap-4">
            <Link className="py-3 px-2" href="">
              Home
            </Link>
            <Link className="py-3 px-2" href="">
              get
            </Link>
            <Link className="py-3 px-2" href="">
              Details
            </Link>
          </div>
        </div>
        <div className="hidden md:flex gap-3">
          {!value ? (
            <div>
              <Link className="py-3 px-2" href="/account/login">
                Log in
              </Link>
              <Link
                className="py-3 px-2 text-[#0A8080]"
                href="/account/register"
              >
                Get Started
              </Link>
            </div>
          ) : (
            <div>
              <Link className="py-3 px-2" href="/account/logout">
                Log out
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="md:hidden flex items-center justify-between mx-5">
        <Link className="py-3 px-2 font-semibold" href="/">
          Company name
        </Link>
        <button onClick={() => setOpenModal(true)} className="py-3 px-2">
          <FiMenu />
        </button>
      </div>
      <MenuModal openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
  );
}
export default GlobalHOC(Header);
