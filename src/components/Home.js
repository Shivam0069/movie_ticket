import React, { useEffect } from "react";
import Header from "./Header";
import Feed from "./Feed";
import { useDispatch } from "react-redux";
import { addMovie } from "../utils/movieSlice";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => dispatch(addMovie(data)));
  }, []);
  return (
    <div>
      <Header />
      <Feed />
    </div>
  );
}
