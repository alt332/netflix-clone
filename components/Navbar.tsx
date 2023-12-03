"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../public/netflix_logo.svg";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BellIcon, SearchIcon } from "lucide-react";
import UserNav from "./UserNav";

interface LinkProps {
  name: string;
  href: string;
}

const links: LinkProps[] = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "TV Shows",
    href: "/home/shows",
  },
  {
    name: "Movies",
    href: "/home/movies",
  },
  {
    name: "Recently Added",
    href: "/home/recent",
  },
  {
    name: "My List",
    href: "/home/user/list",
  },
];

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between p-5 sm:px-6 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="Logo" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, idx) => (
            <li
              key={idx}
              className={cn(
                "text-gray-300 hover:text-white font-normal text-sm cursor-pointer",
                {
                  "underline text-white text-sm font-semibold":
                    pathName === link.href,
                }
              )}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-x-8">
        <SearchIcon className="w-5 h-5 text-gray-300 cursor-pointer" />
        <BellIcon className="w-5 h-5 text-gray-300 cursor-pointer" />
        <UserNav />
      </div>
    </div>
  );
}
