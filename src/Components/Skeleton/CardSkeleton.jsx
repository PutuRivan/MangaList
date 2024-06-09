import React from "react";
import "../../Style/Card.css";

const CardSkeleton = () => {
  return (
    <>
      {Array(10)
        .fill()
        .map((_, index) => (
          <div key={index} className="wrapper mt-5 lg:mt-0 animate-pulse">
            <div className="card bg-gray-300 rounded-lg shadow-md">
              <div className="h-48 bg-gray-400 rounded-t-lg"></div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CardSkeleton;
