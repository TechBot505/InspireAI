import { UserButton } from "@clerk/nextjs";
import { Menu, Search } from "lucide-react";
import React from "react";

interface PROPS {
  setShowSidebar: (value: boolean) => void;
}

function Header({ setShowSidebar }: PROPS) {
  return (
    <div className="p-5 shadow-sm border-b-2 flex flex-row gap-3 bg-white justify-between items-center">
      <div className="lg:hidden">
        <Menu
          size={32}
          onClick={() => {
            setShowSidebar(true);
          }}
        />
      </div>
      <div className="flex gap-2 hidden sm:block items-center p-2 border rounded-md max-w-lg">
        <Search size={24} />
        <input
          type="text"
          placeholder="Search..."
          className="border-none outline-none"
        />
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="bg-primary p-1 hidden lg:block rounded-full text-xs text-white px-2">
          Join Premium Membership just for{" "}
          <span className="text-secondary">$9.99/Month</span>
        </h2>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
