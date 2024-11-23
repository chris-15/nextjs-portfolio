"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
  ];

  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center">
      <h1 className="hidden sm:block ">Chris Sarmiento-Salas</h1>
      <h1 className=" sm:hidden tracking-widest">CSS</h1>

      <nav className="flex justify-end items-center space-x-4">
        {navItems.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={`hover:text-neutral-200 ${
              pathname === item.href ? `underline underline-offset-2` : ``
            } `}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
export default NavBar;
