import React from "react";

const CourseModal = () => {
  return (
    <div>
      <input type="checkbox" id="courseModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
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
          />
          <button className="flex mx-auto mt-5 btn btn-primary">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
