import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContextProvider } from "../(context)/TotalUsageContext";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TotalUsageContextProvider>
    <div className="h-screen bg-slate-100">
      <div className="lg:w-64 hidden lg:block fixed">
        <SideNav />
      </div>
      <div className="lg:ml-64">
        <Header />
        {children}
      </div>
    </div>
    </TotalUsageContextProvider>
  );
}

export default DashboardLayout;
