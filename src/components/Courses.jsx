import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const Courses = () => {
  return (
    <div className="card w-96 bg-base-100 my-5 shadow-2xl flex mx-auto">
      <div className="card-body grid grid-cols-2">
        <p className="font-bold">Modern JavaScript Tutorial</p>

        <div className="flex justify-end">
          <span className="mx-5">100</span>
          <span className="mx-5 text-xl">
            <FaArrowCircleUp />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Courses;
