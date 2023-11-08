"use client";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";

export function DarkModeSwitcher() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return currentTheme === "dark" ? (
    <FaSun
      onClick={() => setTheme("light")}
      className="text-xl cursor-pointer hover:text-amber-500"
    />
  ) : (
    <FaMoon
      onClick={() => setTheme("dark")}
      className="text-xl cursor-pointer hover:text-amber-500"
    />
  );
}
