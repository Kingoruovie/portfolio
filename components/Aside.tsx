"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import Header from "./Header";

const links = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "builds", href: "/builds" },
  { name: "logs", href: "/logs" },
];

export default function Aside() {
  const pathname = usePathname();

  return (
    <aside className="md:w-[200px] ">
      <div className="md:sticky md:top-20">
        <Header />
        <nav className="flex md:flex-col gap-4 md:mt-20">
          {links.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.name}
                className={clsx(
                  "font-mono capitalize relative md:after:w-1 md:after:h-full md:after:-left-2 md:after:top-0",
                  {
                    "text-primary after:w-[30px] after:h-1/5 after:absolute after:bg-primary after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:rounded-sm":
                      pathname == link.href,
                  },
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
