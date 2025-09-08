import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="p-5 shadow-sm border-b-2 bg-white ">
      <div className="flex justify-end">
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
