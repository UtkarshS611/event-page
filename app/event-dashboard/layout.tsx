import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const EventDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="px-4 md:px-6 lg:px-14 xl:px-16 min-h-screen">
      <Sidebar />
      <section className="ml-[20rem]">{children}</section>
    </section>
  );
};

export default EventDashboardLayout;
