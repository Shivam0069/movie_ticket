import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

export default function Feed() {
  const movies = useSelector((store) => store.movies.movie);
  console.log(movies);
  return (
    <div className="max-w-7xl mx-auto mb-10">
      <h1 className="text-3xl font-semibold  mt-10">Recommended Movies</h1>
      {movies ? (
        <div
          
          className=" mt-7 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10"
        >
          {movies?.map((movie) => {
            return <Card key={movie.show.id} movie={movie} />;
          })}
        </div>
      ) : (
        <div className="h-screen w-screen flex items-center justify-center">
          <div className="flex flex-col items-center mt-4">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <span className="ml-2 text-lg font-semibold text-gray-700">
              Loading...
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
