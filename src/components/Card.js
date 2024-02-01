import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function Card({ movie }) {
  return (
    <div className="rounded-md cursor-pointer  w-[222px] group">
      <Link to={`/detail/${movie.show.id}`}>
        <div className="relative w-full h-[378px] hover:scale-105 transition-transform duration-200 ">
          <img
            className="h-full w-full object-cover rounded-md hover:brightness-110"
            src={
              movie.show.image
                ? movie.show.image.medium
                : "https://static.tvmaze.com/uploads/images/medium_portrait/155/388118.jpg"
            }
            alt="poster"
          />
          <div className="absolute bottom-0 w-full bg-black  h-7 rounded-b-md">
            <div className="flex items-center ">
              <svg
                className="h-7 w-7"
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
                <style type="text/css">{`.st0{fill:#DC344B;}`}</style>
                <path
                  className="st0"
                  d="M350.4,298.3l73.6-71.8c5.6-5.4,2.5-14.9-5.2-16.1L317,195.6c-3.1-0.4-5.7-2.4-7.1-5.2l-45.5-92.2
        c-3.5-7-13.4-7-16.9,0L202,190.5c-1.4,2.8-4,4.7-7.1,5.2L93.2,210.4c-7.7,1.1-10.8,10.6-5.2,16.1l77.2,75.2c0,0,0,0,0,0l-18.2,106.2
        c-1.3,7.7,6.8,13.6,13.7,9.9l91-47.8c2.7-1.4,6-1.4,8.8,0l91,47.8c6.9,3.6,15-2.2,13.7-9.9l-17.4-101.3
        C347.2,303.5,348.2,300.4,350.4,298.3z"
                />
              </svg>
              <div className="text-lg text-white ml-1">
                {movie.show.rating.average ? movie.show.rating.average : "6.5"}
                /10
              </div>
            </div>
          </div>
        </div>
        <div className="text-lg mt-1 font-semibold group-hover:text-blue-400">{movie.show.name}</div>
        <div className="flex text-gray-500">
          {movie.show.genres?.map((genre, index, array) => (
            <React.Fragment key={genre}>
              <p>{genre}</p>
              {index < array.length - 1 && <span>/</span>}
            </React.Fragment>
          ))}
        </div>
      </Link>
    </div>
  );
}
