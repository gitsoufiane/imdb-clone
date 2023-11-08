import React from "react";
import { SubNavbarItem } from "./SubNavbarItem";

export function SubNavbar() {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
      <SubNavbarItem title="Trending" param="fetchTrending" />
      <SubNavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
