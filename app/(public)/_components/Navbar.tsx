import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-sm border-b border-b-slate-200">
      <div>
        <Link href={"/"}>
          <Image src="/logo.png" alt="logo" />
        </Link>
      </div>
      {children}
    </header>
  );
};

export default Navbar;
