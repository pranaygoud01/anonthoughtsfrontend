import React, { useEffect, useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { NavBar } from "../components/NavBar";
import { Add } from "../components/Add";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";

export const Home = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://anonthoughtsbackend.onrender.com/api/get"
      );
      if (!response.ok) {
        throw new Error("Network Error");
      }
      const result = await response.json();
      setData(result.reverse());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [openc, setOpenc] = useState(false);
  const handleChange = () => {
    setOpenc(!openc);
  };
  const handleDelete = (id) => {
    axios
      .delete("https://anonthoughtsbackend.onrender.com/api/delete/" + id)
      .then((res) => {
        window.location.reload();
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-screen h-fit bg-gray-100 ">
      <NavBar />
      <div className="px-20 pt-10 max-lg:flex max-lg:justify-center">
        <button
          className="flex gap-2 h-[50px] max-lg:h-[40px] max-lg:py-1 max-lg:px-4 max-lg:text-sm items-center w-fit py-1 border px-6 rounded-[40px] text-white bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 hover:border "
          onClick={handleChange}
        >
          <p className="font-semibold">Create</p>
          <p>
            <FaPlus />
          </p>
        </button>
      </div>
      <div className="px-20 max-lg:px-6 py-10">
        <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-1">
          {data.map((ideas) => {
            return (
              <li
                key={ideas.id}
                className="shadow-xl h-fit min-h-[185px] w-full flex flex-col justify-between gap-4 p-[25px]  rounded-[20px]  bg-white"
              >
                <div>
                  <h1 className="font-bold text-[21px] leading-6">
                    {ideas.idea}
                  </h1>
                </div>
                <div className="flex justify-between mt-2">
                  <div>
                    <h1 className="font-bold text-sm">Anonymous</h1>
                    <p className="text-xs font-semibold text-blue-500">
                      Created at:{ideas.createdAt}
                    </p>
                  </div>
                  <button
                    className="text-red-500 text-xl"
                    onClick={() => handleDelete(ideas._id)}
                  >
                    <IoMdTrash />
                  </button>
                </div>
              </li>
            );
          })}
        </div>
      </div>
      {openc && <Add />}
    </div>
  );
};
