import React from "react";

const DetailSkeleton = () => {
  return (
    <div className="m-5 mt-10">
      <div className="flex lg:flex-row flex-col lg:gap-20 gap-5 justify-center lg:items-start items-center">
        <div>
          <h1 className="text-2xl font-bold text-white text-center">
            <div className="h-8 bg-gray-300 rounded-md w-48 mx-auto mb-4"></div>
          </h1>
          <div className="h-48 w-48 mx-auto bg-gray-300 rounded-md mb-4"></div>
          <div className="flex flex-col text-white text-l mt-5">
            <div className="flex flex-row">
              <div className="h-6 bg-gray-300 rounded-md w-12 mx-2"></div>
              <div className="h-6 bg-gray-300 rounded-md w-12 mx-2"></div>
            </div>
            <div className="flex flex-row mt-2">
              <div className="h-6 bg-gray-300 rounded-md w-12 mx-2"></div>
              <div className="h-6 bg-gray-3000 rounded-md w-12 mx-2"></div>
            </div>
            <div className="flex flex-row mt-2">
              <div className="h-6 bg-gray-300 rounded-md w-24 mx-2"></div>
              <div className="h-6 bg-gray-300 rounded-md w-24 mx-2"></div>
            </div>
            <div className="flex flex-row mt-2">
              <div className="h-6 bg-gray-300 rounded-md w-12 mx-2"></div>
              <div className="h-6 bg-gray-300 rounded-md w-12 mx-2"></div>
            </div>
            <div className="flex flex-row mt-2">
              <div className="h-6 bg-gray-300 rounded-md w-24 mx-2"></div>
              <div className="h-6 bg-gray-300 rounded-md w-24 mx-2"></div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="text-l text-white h-16 bg-gray-300 rounded-md mt-2"></div>
          <div className="text-l text-white h-32 bg-gray-300 rounded-md mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;
