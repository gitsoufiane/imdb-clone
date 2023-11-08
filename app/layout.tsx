import type { Metadata } from "next";
import "./globals.css";
import { Navbar, ThemeProviders, SubNavbar, SearchBox } from "@/app/components";
import clsx from "clsx";
import { inter } from "@/app/fonts";

export const metadata: Metadata = {
  title: "imdb clone",
  description: "Imdb clone with nextjs",
  creator: "soufiane chaoufi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className)}>
        <ThemeProviders>
          <Navbar />
          <SubNavbar />
          <SearchBox />
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
