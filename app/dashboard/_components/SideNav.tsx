"use client";

import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

function SideNav() {
  const path = usePathname();

  const MenuList = [
    {
      title: "Dashboard",
      icon: Home,
      path: "/dashboard",
    },
    {
      title: "History",
      icon: FileClock,
      link: "/dashboard/history",
    },
    {
      title: "Billing",
      icon: WalletCards,
      link: "/dashboard/billing",
    },
    {
      title: "Setting",
      icon: Settings,
      link: "/dashboard/setting",
    },
  ];

  return (
    <div className="h-screen p-5 shadow-sm border bg-white">
      <div className="flex justify-center gap-1 items-center">
        <Image width={42} height={42} alt="logo" src={"/logo.png"} />
        <span className="font-bold text-xl">Inspire AI</span>
      </div>
      <hr className="my-5 border" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <div
            key={index}
            className={`flex items-center mb-3 p-3 gap-2 cursor-pointer hover:bg-primary hover:text-white rounded-lg ${
              path == menu.path && "bg-primary text-white"
            }`}
          >
            <menu.icon size={24} />
            <span className="text-lg">{menu.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
