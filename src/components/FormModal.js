import React, { useRef, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../utils/movieSlice";
import toast from "react-hot-toast";

export default function FormModal({ movie }) {
  const dispatch = useDispatch();
  const isOpen = useSelector((store) => store.movies.isOpen);
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const dayRef = useRef("Sunday");
  const timeRef = useRef("11:00");
  const seatRef = useRef();

  const handleBookTicket = () => {
    const username = usernameRef.current?.value;
    const email = emailRef.current?.value;
    const day = dayRef.current?.value;
    const time = timeRef.current?.textContent;
  
    if (!username?.trim() || !email?.trim()) {
      toast.error("Fill the form completely!");
      return;
    }
  
    const bookingData = {
      username,
      email,
      day,
      time,
      movieName: movie.show.name,
    };
  
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    toast.success("Ticket booked");
    dispatch(setIsOpen(false));
  };
  
  return (
    <div>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={() => {
            dispatch(setIsOpen(false));
          }}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 max-w-lg w-[90%]   p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
        >
          <form className="flex flex-col space-y-6">
            <div>
              <span className="text-xl font-bold">Movie</span> :{" "}
              <span className="text-xl font-semibold">{movie.show.name}</span>
            </div>

            <div className="flex text-xl items-center">
              <h1 className="text-lg">Name :</h1>
              <input
                className="focus:outline-none border rounded-full ml-2 pl-3 pr-3 text-sm py-2 w-64 focus:border-blue-400"
                type="text"
                ref={usernameRef}
              />
            </div>
            <div className="flex text-xl items-center">
              <h1 className="text-lg">Email :</h1>
              <input
                className="focus:outline-none border rounded-full ml-3 pl-3 pr-3 text-sm py-2 w-64 focus:border-blue-400"
                type="email"
                ref={emailRef}
              />
            </div>
            <div className="flex  items-center">
              <div className="flex">
                <h1 className="text-lg">Day :</h1>
                {movie.show.schedule.days.length === 0 ? (
                  <div className="ml-6">Sunday</div>
                ) : movie.show.schedule.days.length === 1 ? (
                  <div className="ml-6">{movie.show.schedule.days[0]}</div>
                ) : (
                  <select ref={dayRef} className="flex items-center ml-6">
                    {movie.show.schedule.days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              <div className="flex ml-10">
                <h1>Time : </h1>
                <p ref={timeRef}>&nbsp;{movie.show.schedule.time || "11:00"}</p>
              </div>
            </div>
            <button
              className="bg-[#F84464] ml-28  flex items-center justify-center text-white text-lg font-semibold w-[214px] h-[49px] rounded-md "
              type="button"
              onClick={handleBookTicket}
            >
              Book Ticket
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}
