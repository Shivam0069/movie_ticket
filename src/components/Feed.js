import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

export default function Feed() {
  const movies = useSelector((store) => store.movies.movie);
console.log(movies);
  return (
    <div className="max-w-7xl mt-5 mx-auto grid grid-cols-5 gap-y-8">
      {movies?.map((movie) => {
        return <Card key={movie.show.id} movie={movie} />;
      })}
    </div>
  );
}
