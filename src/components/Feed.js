import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Feed() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  console.log(movies);
  return (
    <div className="max-w-7xl mt-5 mx-auto grid grid-cols-5 gap-y-8">
      {movies?.map((movie) => {
        return <Card key={movie.show.id} movie={movie} />;
      })}
    </div>
  );
}
