import React from "react";

export const Footer = () => {
  return (
    <div className="w-screen bg-gray-100 h-[90px] flex justify-center items-center">
      <h1 className="font-bold">
        Developed by{" "}
        <span>
          <a
            href="https://pranayportfolio.vercel.app/ "
            className="bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text"
          >
            Pranay ❤️
          </a>
        </span>
      </h1>
    </div>
  );
};
