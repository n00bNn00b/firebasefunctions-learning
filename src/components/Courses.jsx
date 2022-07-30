import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { db } from "../firebase.init";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const coursesCollection = collection(db, "courses");

  const voteIncrease = async (id, vote) => {
    const courseDoc = doc(db, "courses", id);
    const newVote = { vote: vote + 1 };
    await updateDoc(courseDoc, newVote);
  };
  useEffect(() => {
    const getCourses = async () => {
      const data = await getDocs(coursesCollection);
      setCourses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getCourses();
  }, [coursesCollection]);

  return (
    <div>
      {courses.map((course) => (
        <div
          key={course.id}
          className="card w-96 bg-base-100 my-5 shadow-2xl flex mx-auto"
        >
          <div className="card-body grid grid-cols-2">
            <p className="font-bold">{course.courseName}</p>

            <div className="flex justify-end">
              <span className="mx-5">{course.vote}</span>
              <button
                onClick={() => {
                  voteIncrease(course.id, course.vote);
                }}
                className="mx-5 text-xl btn btn-accent"
              >
                <FaArrowCircleUp />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
