"use client";

import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const Header = () => {
  return (
    <section className="relative py-4 flex justify-center px-4 md:px-6 lg:px-14 xl:px-16 header-animation">
      <div className="w-full">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg md:text-xl font-bold tracking-tighter">
              CampusConnect
            </span>
          </Link>
          <NavigationMenu className="hidden lg:block absolute left-[50%] translate-x-[-50%]">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  Products
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  Resources
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Button className="cursor-pointer">
              <Link href={"/event-dashboard"}>View Events</Link>
            </Button>
            <Button variant={"outline"} className="cursor-pointer">
              <Link href={"/create-event"}>Host Event</Link>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2">
                    <span className="text-lg font-semibold tracking-tighter">
                      CampusConnect
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <div className="flex flex-col gap-6">
                  <Link href="#" className="font-medium">
                    Templates
                  </Link>
                  <Link href="#" className="font-medium">
                    Blog
                  </Link>
                  <Link href="#" className="font-medium">
                    Pricing
                  </Link>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <Button className="cursor-pointer">
                    <Link href={"/event-dashboard"}>View Events</Link>
                  </Button>
                  <Button variant={"outline"} className="cursor-pointer">
                    <Link href={"/create-event"}>Host Event</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export default Header;
