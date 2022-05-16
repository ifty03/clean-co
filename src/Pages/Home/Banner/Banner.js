import React from "react";

const Banner = () => {
  return (
    <div className=" bg-accent lg:px-14 lg:flex flex-wrap items-center">
      <div className="w-[50%]">
        <p className="text-lg text-gray-600">Best Quality</p>
        <h1 className="text-6xl font-bold text-gray-600">
          Professional Cleaning service
        </h1>
        <p className="text-lg text-gray-600 my-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae culpa
          amet excepturi nemo saepe, nam eum deleniti iste.
        </p>
        <button className="btn btn-primary">GET STARTED</button>
      </div>
      <div>
        <img
          className="w-[100%]"
          src="https://raw.githubusercontent.com/mir-hussain/clean-co-live/main/src/assets/image/bucketgirl.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
