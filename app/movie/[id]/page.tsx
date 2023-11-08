import React from "react";
import Link from "next/link";
import Image from "next/image";

const API_KEY = process.env.API_KEY;

export default async function page({ params }: { params: any }) {
  const movieId = params.id;
  const res = await fetch(` https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`, {
    next: { revalidate: 10000 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data"); //this will be caught by the error page and passed to the page as props
  }

  const movie = await res.json();

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie poster"
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
