import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase.init";

const CourseModal = () => {
  const [courseName, setCourseName] = useState("");

  const coursesCollection = collection(db, "courses");

  const registerCourse = async (e) => {
    e.preventDefault();
    const courseName = e.target.courseName.value;
    setCourseName(courseName);
    await addDoc(coursesCollection, {
      courseName: courseName,
      vote: Number(0),
    });
    e.target.reset();
  };

  return (
    <div>
      <input type="checkbox" id="courseModal" className="modal-toggle" />
      <div className="modal">
        <form onSubmit={registerCourse} className="modal-box relative">
          <label
            htmlFor="courseModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center mb-5">
            Request a Tutorial
          </h3>
          <input
            type="text"
            placeholder="Request..."
            className="input input-bordered input-primary w-full max-w-xs flex mx-auto"
            name="courseName"
          />
          <button className="flex mx-auto mt-5 btn btn-primary">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseModal;
