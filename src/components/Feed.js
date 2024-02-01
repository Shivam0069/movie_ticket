import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

export default function Feed() {
  const movies = useSelector((store) => store.movies.movie);
  console.log(movies);
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold  mt-10">Recommended Movies</h1>
      <div className=" mt-7  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10">
        {movies?.map((movie) => {
          return <Card key={movie.show.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
