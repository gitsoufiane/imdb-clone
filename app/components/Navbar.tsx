import Link from "next/link";
import { IconType } from "react-icons";
import { FaHouse, FaPerson } from "react-icons/fa6";
import { DarkModeSwitcher } from "./DarkModeSwitcher";

export function Navbar() {
  return (
    <nav className="flex justify-between mx-8 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex space-x-4 lg:space-x-6">
        <Link href={"/"} className="  hover:text-amber-600">
          <FaHouse className="text-2xl sm:hidden mx-4" />
          <p className="hidden sm:inline my-2 text-sm">Home</p>
        </Link>
        <Link href={"/about"} className=" hover:text-amber-600">
          <FaPerson className="text-2xl sm:hidden mx-4" />
          <p className="hidden sm:inline my-2 text-sm">About</p>
        </Link>
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitcher />
        <Link href="/" className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
          IMDb
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
