import { div } from "@tensorflow/tfjs-core";
import React from "react";
import { IoBarChartOutline, IoImagesOutline } from "react-icons/io5";
import { VscGraphLine } from "react-icons/vsc";
import Banner from "./Banner";

export default function Homepage() {
  return (
    <div>
      <Banner></Banner>
      <div className="flex gap-10 flex-col lg:flex-row  items-center justify-center px-4 lg:px-0 mt-8 w-full">
        <a
          href="/classification"
          className="group flex flex-col justify-center items-center border-2 w-1/2 border-purple-800 rounded-2xl  hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] delay-100 transition ease-in-out cursor-pointer"
        >
          <div className="h-96 flex items-center justify-center">
            <IoImagesOutline className="text-7xl" />
          </div>
          <hr className="bg-white" />
          <div className="space-y-4 w-full group-hover:bg-purple-800 p-10 delay-100 transition ease-in-out">
            <h1 className="text-3xl font-bold">Image Classification</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              reprehenderit?
            </p>
            <p className="border-purple-800 border-2 group-hover:bg-[#1D232A] delay-100 transition ease-in-out  max-w-28 rounded-xl py-2 text-center">
              Go to page
            </p>
          </div>
        </a>
        <div className="group flex flex-col justify-center items-center border-2 w-1/2 border-purple-800 rounded-2xl  hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] delay-100 transition ease-in-out cursor-pointer">
          <div className="h-96 flex items-center justify-center">
            <IoBarChartOutline className="text-7xl" />
          </div>
          <hr className="bg-white" />
          <div className="space-y-4 w-full group-hover:bg-purple-800 p-10 delay-100 transition ease-in-out">
            <h1 className="text-3xl font-bold">Data Visualization</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              reprehenderit?
            </p>
            <p className="border-purple-800 border-2 group-hover:bg-[#1D232A] delay-100 transition ease-in-out  max-w-28 rounded-xl py-2 text-center">
              Go to page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
