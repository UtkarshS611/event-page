"use client";

import React from "react";
import Link from "next/link";
import { events } from "@/app/mock-events-data/events-data";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  function getInitials(eventName: string): string {
    return eventName.trim().charAt(0).toUpperCase();
  }

  return (
    <section className="fixed h-full px-6 max-w-xs w-full shadow-xl">
      <div className="flex flex-col gap-2">
        {events.map((event) => (
          <div key={event.slug} className="py-2 px-1">
            <Link
              href={`/event-dashboard/${event.slug}`}
              className={`flex items-center gap-1 rounded-lg p-2 hover:bg-[#e0c3fc]/20 transition-all duration-200 ${
                pathname === `/event-dashboard/${event.slug}`
                  ? "bg-[#e0c3fc]/20"
                  : ""
              }`}
            >
              <div className="h-12 w-12 bg-[#e0c3fc]/30 text-fuchsia-900 flex items-center justify-center rounded-full overflow-hidden">
                {getInitials(event.name)}
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-lg">{event.name}</p>
                <p className="text-muted-foreground border border-dashed  px-2 text-center w-fit rounded-xl border-[#ffc971]">
                  {event.eventType}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
