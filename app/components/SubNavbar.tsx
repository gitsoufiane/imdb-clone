"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import clsx from "clsx";

export function SubNavbar() {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
      <SubNavbarItem title="Trending" param="fetchTrending" />
      <SubNavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}

function SubNavbarItem({ title, param }: { title: string; param: string }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={clsx("m-4 hover:text-amber-600 font-semibold p-2", {
          "underline underline-offset-8 decoration-4  decoration-amber-500 rounded-lg":
            genre === param,
        })}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
