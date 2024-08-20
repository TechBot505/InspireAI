"use client"
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContextProvider } from "../(context)/TotalUsageContext";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  return (
    <TotalUsageContextProvider>
    <div className="h-screen bg-slate-100">
      <div>
        <SideNav showSidebar={showSideBar} setShowSidebar={setShowSideBar} />
      </div>
      <div className="lg:ml-64">
        <Header setShowSidebar={setShowSideBar} />
        {children}
      </div>
    </div>
    </TotalUsageContextProvider>
  );
}

export default DashboardLayout;
