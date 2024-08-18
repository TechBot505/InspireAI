import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="p-5 shadow-sm border-b-2 flex flex-col gap-3 sm:flex-row bg-white justify-between items-center">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg">
        <Search size={24} />
        <input
          type="text"
          placeholder="Search..."
          className="border-none outline-none"
        />
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="bg-primary p-1 rounded-full text-xs text-white px-2">
          Join Premium Membership just for{" "}
          <span className="text-secondary">$9.99/Month</span>
        </h2>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
