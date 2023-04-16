"use client";

import React from "react";
import NavbarContainer from "./NavbarContainer";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

function NavBar() {
  return (
    <nav className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <NavbarContainer>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </NavbarContainer>
      </div>
    </nav>
  );
}

export default NavBar;
