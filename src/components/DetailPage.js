import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";
import DetailSection from "./DetailSection";
import FormModal from "./FormModal";

export default function DetailPage() {
  const { id } = useParams();
  console.log(id);
  const movies = useSelector((store) => store.movies.movie);
  console.log(movies);
  const movie = movies.filter((movie) => movie.show.id == id);
  console.log(movie);

  const createMarkup = (html) => ({ __html: html });

  return (
    <div className="">
      <Header />
      <DetailSection />
      <div className="max-w-4xl ml-10 mt-10">
        <h1 className="mb-3 font-bold text-xl">About the movie</h1>
        <div
          className="text-gray-600"
          dangerouslySetInnerHTML={createMarkup(movie[0]?.show?.summary)}
        />
      </div>
      <div className="ml-10 mt-5 max-w-4xl border text-gray-800"></div>
      <FormModal movie={movie[0]} />
    </div>
  );
}
