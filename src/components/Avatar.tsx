"use client";

import Image from "next/image";

import React from "react";

function Avatar() {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="avatar"
      src="/images/placeholder.jpeg"
    />
  );
}

export default Avatar;
