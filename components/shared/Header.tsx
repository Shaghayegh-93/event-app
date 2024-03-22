import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full">
      <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            alt="logo"
            src="/assets/images/logo.svg"
            width={128}
            height={38}
          />
        </Link>
        <div className="flex w-32 justify-end gap-3">
          <button>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
