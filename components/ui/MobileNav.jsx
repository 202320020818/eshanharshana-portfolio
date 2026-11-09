"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[30px] text-accent" />{" "}
        {/* That icon is called a hamburger menu icon 🍔-> mobile part expand part 3 line  */}
      </SheetTrigger>

      <SheetContent className="flex flex-col px-6">
        {/* REQUIRED accessibility elements (hidden) */}
        <VisuallyHidden>
          <SheetTitle>Mobile Navigation</SheetTitle>
          <SheetDescription>
            Navigation menu for mobile devices
          </SheetDescription>
        </VisuallyHidden>

        {/* logo */}
        <div className="mb-16 mt-20 text-center text-2xl sm:mb-24 sm:mt-24">
          <Link href="/">
            <h1>
              Eshan <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col items-center justify-center gap-6 sm:gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-xl capitalize transition-all hover:text-accent ${
                pathname === link.path
                  ? "text-accent border-b-2 border-accent"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
