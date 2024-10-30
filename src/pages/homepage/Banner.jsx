import React from "react";
import bannerHead from "../../assets/Banner/RobotSide.png";

export default function () {
  return (
    <div className="flex items-center justify-center">
      <div>
        <h1 className="text-5xl">Welcome to the future</h1>
        <p className="w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          porro delectus dicta rerum pariatur modi, nostrum aut! Eius, molestias
          cum!
        </p>
        <button>Do nothing</button>
      </div>
      <div>
        <img src={bannerHead} alt="" />
      </div>
    </div>
  );
}
