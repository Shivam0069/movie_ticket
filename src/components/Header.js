import React from "react";
import { Link } from "react-router-dom";
import { setIsOpen } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(setIsOpen(false))}
      className="sticky top-0 z-10 bg-white h-16 max-w-7xl  mx-auto flex items-center border-b  "
    >
      <div className="h-[33px] w-full flex items-center justify-between ">
        <div className="h-[33px] w-[115px]">
          <Link to="/">
            <img
              className="w-full h-full object-cover"
              src="https://png.pngtree.com/png-clipart/20230221/original/pngtree-cinema-ticket-icon-in-flat-style-admit-one-coupon-entrance-vector-png-image_8961928.png"
              alt="logo"
            />
          </Link>
        </div>

        <button className="mr-2 text-sm bg-[#F84464] text-white px-3 py-1 rounded-[4px] hover:brightness-110 hover:scale-110">
          Sign in
        </button>
      </div>
    </div>
  );
}
