import React from "react";

export const NavBar = () => {
  return (
    <div className="flex justify-around">
      <div className="w-full flex justify-center gap-10 ">
        <div className="">
          <div className="w-full flex justify-center pt-10">
            <h1 className="font-bold text-3xl max-lg:text-2xl bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text">
              Secret Reflections
            </h1>
          </div>
          <div className="flex w-full justify-center">
            <p className="mt-1  max-lg:text-xs font-semibold text-base">
              Anonymously Share Your Thoughts with the World
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
