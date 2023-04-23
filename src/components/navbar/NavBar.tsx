"use client";

import React from "react";
import NavbarContainer from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { User } from "@prisma/client";
import { SafeUser } from "@/types";
import Categories from "./Categories";

type Props = {
  currentUser?: SafeUser | null;
};

function NavBar({ currentUser }: Props) {
  console.log({ currentUser });

  return (
    <nav className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <NavbarContainer>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </NavbarContainer>
      </div>
      <Categories />
    </nav>
  );
}

export default NavBar;
