import React from "react";
import bannerHead from "../../assets/Banner/RobotSide.png";

export default function () {
  return (
    <div className=" flex items-center justify-center bg-gradient-to-r from-black via-purple-900 to-purple-500 rounded-xl px-8">
      <div className="w-1/2">
        <h1 className=" text-xl lg:text-5xl">Welcome to the future</h1>
        <p className="text-sm lg:text-lg w-full lg:w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          porro delectus dicta rerum pariatur modi, nostrum aut! Eius, molestias
          cum!
        </p>
        <button>Do nothing</button>
      </div>
      <div className=" w-1/2 flex justify-end">
        <img src={bannerHead} alt="" />
      </div>
    </div>
  );
}
