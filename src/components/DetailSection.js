import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setIsOpen } from "../utils/movieSlice";

export default function DetailSection() {
  const dispatch = useDispatch();
  const isOpen = useSelector((store) => store.movies.isOpen);
  const { id } = useParams();
  console.log(id);
  const movies = useSelector((store) => store.movies.movie);
  console.log(movies);
  const movie = movies.filter((movie) => movie.show.id == id);
  console.log(movie);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const containerStyle = {
    backgroundImage:
      "url(https://img.freepik.com/free-photo/assortment-cinema-elements-red-background-with-copy-space_23-2148457848.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706659200&semt=sph)",
    backgroundSize: "100% auto",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "480px",
  };
  const time = movie[0].show.runtime;
  const hours = time >= 60 ? Math.floor(time / 60) : "0";
  let minutes = time % 60;
  return (
    <div
      style={windowWidth <= 768 ? {} : containerStyle}
      className={`mt-10 w-full flex flex-col md:flex-row lg:pl-20 md:pl-10 pl-5 overflow-hidden `}
    >
      {movie ? (
        <>
          <div className="flex flex-col w-[261px] my-auto hover:scale-105 hover:brightness-110 transition-transform duration-200">
            <img
              className="h-[392px] w-full object-cover"
              src={
                movie[0].show.image
                  ? movie[0].show.image.medium
                  : "https://static.tvmaze.com/uploads/images/medium_portrait/155/388118.jpg"
              }
              alt="poster"
            />
            <div className="bg-black h-[35px] flex items-center justify-center w-full text-white">
              In cinemas
            </div>
          </div>
          <div className="flex flex-col md:space-y-6 space-y-3 items-start md:justify-center mt-5 md:mt-0  md:ml-10">
            <h1 className="md:text-[#FFFFFF] text-black text-4xl font-semibold ">
              {movie[0].show.name}
            </h1>
            <div className="flex items-center  ">
              <svg
                className="h-12 w-12 pl-0"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512" }}
                xmlSpace="preserve"
              >
                <style type="text/css">{`.st0{fill:#F07584;}`}</style>
                <path
                  className="st0"
                  d="M350.4,298.3l73.6-71.8c5.6-5.4,2.5-14.9-5.2-16.1L317,195.6c-3.1-0.4-5.7-2.4-7.1-5.2l-45.5-92.2
    c-3.5-7-13.4-7-16.9,0L202,190.5c-1.4,2.8-4,4.7-7.1,5.2L93.2,210.4c-7.7,1.1-10.8,10.6-5.2,16.1l77.2,75.2c0,0,0,0,0,0l-18.2,106.2
    c-1.3,7.7,6.8,13.6,13.7,9.9l91-47.8c2.7-1.4,6-1.4,8.8,0l91,47.8c6.9,3.6,15-2.2,13.7-9.9l-17.4-101.3
    C347.2,303.5,348.2,300.4,350.4,298.3z"
                />
              </svg>
              <div className="text-2xl md:text-white text-black ml-1">
                {movie[0].show.rating.average
                  ? movie[0].show.rating.average
                  : "6.5"}
                /10
              </div>
            </div>
            <div className="w-[446px] h-[74px]  bg-black/75 rounded-md flex justify-around items-center">
              <div>
                <p className="text-white font-semibold text-lg ">
                  Add your rating & review
                </p>
                <p className="text-gray-500 font-medium text-lg">
                  Your rating matter
                </p>
              </div>
              <div>
                <button className="text-black hover:scale-105 bg-white rounded-md px-2 py-1 text-lg font-semibold">
                  Rate now
                </button>
              </div>
            </div>
            <div className="">
              <button className="bg-[#E5E5E5] text-black text-sm  px-2 py-1 rounded-md hover:underline">
                {movie[0].show.language}
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="  md:text-white text-black text-lg ">
                {hours}h {minutes}m
              </div>
              <div className="rounded-full md:bg-white bg-black h-1.5 w-1.5"></div>
              <div className="flex md:text-white text-black">
                {movie[0].show.genres?.map((genre, index, array) => (
                  <React.Fragment key={genre}>
                    <p className="text-lg ml-1">{genre}</p>
                    {index < array.length - 1 && (
                      <span className="text-[18px]">,</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="rounded-full md:bg-white bg-black h-1.5 w-1.5"></div>
              <div className= "md:text-white text-black text-lg ">
                {movie[0].show.premiered}
              </div>
            </div>
            <div>
              <button
                onClick={() => dispatch(setIsOpen(true))}
                className="bg-[#F84464] flex hover:scale-105 hover:brightness-105  items-center justify-center text-white text-lg font-semibold w-[214px] h-[49px] rounded-md "
              >
                Book tickets
              </button>
            </div>
          </div>{" "}
        </>
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
