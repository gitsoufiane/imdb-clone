"use client";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaHouse, FaMoon, FaPerson, FaSun } from "react-icons/fa6";
import { useTheme } from "next-themes";

export function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex ">
        <MenuItem title="Home" address="/" Icon={FaHouse} />
        <MenuItem title="About" address="/about" Icon={FaPerson} />
      </div>
      <div className="flex items-center space-x-5">
        {currentTheme === "dark" ? (
          <FaSun
            onClick={() => setTheme("light")}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ) : (
          <FaMoon
            onClick={() => setTheme("dark")}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        )}
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDb</span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </nav>
  );
}

function MenuItem({ title, address, Icon }: { title: string; address: string; Icon: IconType }) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}
